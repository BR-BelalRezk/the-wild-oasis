"use server";

import supabase from "../supabase";

export async function updateCurrentUser({
  password,
  fullName,
  avatar,
}: {
  password?: string;
  fullName?: string;
  avatar?: File | null;
}) {
  // 1- update password OR fullName
  let updateData;
  if (password) {
    updateData = { password };
  }
  if (fullName) {
    updateData = { data: { fullName } };
  }
  const { data, error } = await supabase.auth.updateUser(updateData!);
  if (error) {
    throw new Error(error.message);
  }
  if (!avatar) return data;

  // 2- upload the avatar image
  const fileName = `avatar-${data.user.id}-${Math.random()}`;
  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);
  if (storageError) {
    throw new Error(storageError.message);
  }

  // 3- use the avatar in the user data itself

  const { data: avatarData, error: avatarError } =
    await supabase.auth.updateUser({
      data: {
        avatar: `${process.env.SUPABASE_URL}/storage/v1/object/public/avatars/${fileName}`,
      },
    });

  if (avatarError) {
    throw new Error(avatarError.message);
  }
  return avatarData;
}
