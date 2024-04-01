import { put, del, copy  } from "@vercel/blob";
import { NextResponse } from "next/server";


export async function PUT(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const newFileName = searchParams.get("name") || "";
  const json = await request.json();
  const blob = await copy(json.url, `${newFileName}${json.url.match('\.[0-9a-z]+$')[0]}`, { access: 'public' });
  await del(json.url);
  return NextResponse.json(blob);
}

export async function DELETE(request: Request): Promise<NextResponse> {
  const json = await request.json();
  await del(json.url);
  return NextResponse.json({message: 'Deleted succesfully!'});
}

export async function POST(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get("filename") || "";

  if (filename && request.body) {
    // ⚠️ The below code is for App Router Route Handlers only
    const blob = await put(filename, request.body, {
      access: "public",
    });
    // Here's the code for Pages API Routes:
    // const blob = await put(filename, request, {
    //   access: 'public',
    // });
    return NextResponse.json(blob);
  } else {
    return NextResponse.json({ message: "File not found!" });
  }
}

// The next lines are required for Pages API Routes only
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };
