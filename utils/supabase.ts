import { createClient } from "@supabase/supabase-js";

const bucket = "main-bucket";

export const supabase = createClient(process.env.SUPABASE_URL as string, process.env.SUPABASE_KEY as string);

export const uploadImage = async (image: File) => {
  const timestamp = Date.now();
  const newName = `${timestamp}-${image.name}`;
  const { data } = await supabase.storage.from(bucket).upload(newName, image, { cacheControl: "3600" });
  if (!data) throw new Error("Image upload failed");
  return supabase.storage.from(bucket).getPublicUrl(newName).data.publicUrl;
};

export const deleteImage = async (url: string) => {
  const imageName = decodeURIComponent(url.split(`/storage/v1/object/public/${bucket}/`)[1]);
  if (!imageName) throw new Error("Invalid URL");

  const { data, error } = await supabase.storage.from(bucket).remove([imageName]);
  if (!imageName) throw new Error("Invalid URL");
  if (error) {
    console.log("Error saat menghapus gambar:", error.message);
  }

  console.log("Hapus gambar berhasil:", data);

  return data;
};
