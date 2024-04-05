"use server";
import { put, del } from "@vercel/blob";
import { revalidatePath } from "next/cache";

export const uploadFile = async (FormData: FormData) => {
  const file = FormData.get("file") as File;
  try {
    await put(file?.name, file, {
      access: "public",
    });
  } catch (error) {
    throw new Error("Failed to upload the file");
  }
  revalidatePath("/");
};

export const deleteFile = async (FormData: FormData) => {
  const fileUrl = FormData.get("fileUrl") as string;
  try {
    await del(fileUrl);
  } catch (error) {
    throw new Error("Failed to delete the file");
  }
  revalidatePath("/");
};
