import { PAGE_SIZE } from "@/constants";
import supabase from "../supabase";

export async function getAllCabins({
  discount,
  sort,
  page,
}: {
  discount?: string; // all | no-discount | with-discount
  sort?: string; // ex: "regularPrice-asc"
  page: number;
}) {
  let query = supabase.from("cabins").select("*", { count: "exact" });

  // filter
  if (discount === "no-discount") {
    query = query.eq("discount", 0);
  }

  if (discount === "with-discount") {
    query = query.gt("discount", 0);
  }

  // sort
  if (sort) {
    const [field, dir] = sort.split("-");
    query = query.order(field!, { ascending: dir === "asc" });
  }

  // pagination
  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + (PAGE_SIZE - 1);
    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) throw new Error("cabins could not be loaded");

  return { data, count } as { data: Cabins; count: number };
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
      ? newCabin.image?.startsWith?.(import.meta.env.VITE_SUPABASE_URL)
      : false;

  const imageName = `${Math.random()}-${
    typeof newCabin.image !== "string" && newCabin.image.name
  }`.replaceAll("/", "");
  const imagePath = hasImagePath
    ? newCabin.image
    : `${
        import.meta.env.VITE_SUPABASE_URL
      }/storage/v1/object/public/cabin-images/${imageName}`;

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
  if (hasImagePath) return data;
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
