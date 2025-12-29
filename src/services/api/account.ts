"use server";

import supabase from "../supabase";

type UpdateUserParams = {
  fullName?: string;
  password?: string;
  avatar?: File | null;
};

export async function updateCurrentUser({
  fullName,
  password,
  avatar,
}: UpdateUserParams) {
  /* ---------------- PROFILE UPDATE (SAFE) ---------------- */
  if (fullName) {
    const { error } = await supabase.auth.updateUser({
      data: { fullName },
    });

    if (error) throw new Error(error.message);
  }

  /* ---------------- PASSWORD UPDATE (SESSION REFRESH) ---------------- */
  if (password) {
    const { error } = await supabase.auth.updateUser({ password });
    if (error) throw new Error(error.message);

    // 🔐 refresh session to prevent logout
    const { error: refreshError } = await supabase.auth.refreshSession();

    if (refreshError) {
      throw new Error("Session expired. Please login again.");
    }
  }

  /* ---------------- AVATAR UPLOAD ---------------- */
  if (avatar) {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) throw new Error("User not authenticated");

    const fileName = `avatar-${user.id}-${crypto.randomUUID()}`;

    const { error: uploadError } = await supabase.storage
      .from("avatars")
      .upload(fileName, avatar, { upsert: true });

    if (uploadError) throw new Error(uploadError.message);

    const avatarUrl = `${
      import.meta.env.VITE_SUPABASE_URL
    }/storage/v1/object/public/avatars/${fileName}`;

    const { error: avatarError } = await supabase.auth.updateUser({
      data: { avatar: avatarUrl },
    });

    if (avatarError) throw new Error(avatarError.message);
  }

  /* ---------------- RETURN UPDATED USER ---------------- */
  const { data, error } = await supabase.auth.getUser();
  if (error) throw new Error(error.message);

  return data.user;
}
