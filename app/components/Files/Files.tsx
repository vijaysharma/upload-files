import { list } from "@vercel/blob";
import FilesTable from "./FilesTable";
import { revalidatePath, revalidateTag } from "next/cache";

const Files = async () => {
  async function allFiles() {
    const { blobs } = await list();
    revalidateTag("blob");
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return blobs;
  }
  const files = await allFiles();
  return <FilesTable files={files} />;
};

export default Files;
