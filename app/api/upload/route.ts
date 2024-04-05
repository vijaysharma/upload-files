import { del, copy } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function PUT(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const newFileName = searchParams.get("name") || "";
  const json = await request.json();
  const ext = ".[0-9a-zA-Z]+$";
  const fileExtension = json.url.match(ext) ? json.url.match(ext)[0] : "";
  try {
    const blob = await copy(json.url, `${newFileName}${fileExtension}`, {
      access: "public",
    });
    await del(json.url);
    return NextResponse.json(blob);
  } catch {
    return NextResponse.json({ message: "Unable to rename the file" });
  }
}
