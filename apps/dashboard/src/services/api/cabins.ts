"use server";
import supabase from "../supabase";

export async function getAllCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("cabins could not be loaded");
  }

  return data;
}

export async function deleteCabin(id: number) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("cabin could not be deleted");
  }

  return data;
}

export async function createEditCabin({
  newCabin,
  id,
}: {
  newCabin: NewCabin | Cabin;
  id?: number;
}) {
  const hasImagePath =
    typeof newCabin.image === "string"
      ? newCabin.image?.startsWith?.(process.env.SUPABASE_URL!)
      : false;

  const imageName =
    `${Math.random()}-${typeof newCabin.image !== "string" && newCabin.image.name}`.replaceAll(
      "/",
      ""
    );
  const imagePath = hasImagePath
    ? newCabin.image
    : `${process.env.SUPABASE_URL}/storage/v1/object/public/cabin-images/${imageName}`;

  // cabin creation
  let query = supabase.from("cabins");
  if (!id) {
    query = query.insert([{ ...newCabin, image: imagePath }]) as any;
  }

  // cabin edit
  if (id) {
    query = query.update({ ...newCabin, image: imagePath }).eq("id", id) as any;
  }

  const { data, error } = await query.select("*").single();

  if (error) {
    console.error(error);
    throw new Error("cabin could not be created");
  }

  // upload image
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  //  delete the cabin if there was an error uploading the image
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data?.id);
    console.error(storageError);
    throw new Error(
      "cabin image could not be uploaded and the cabin was not created"
    );
  }

  return data as NewCabin;
}
