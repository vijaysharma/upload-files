"use client";
import { useRouter } from "next/navigation";
import { Pencil1Icon } from "@radix-ui/react-icons";
import { Button, TextField } from "@radix-ui/themes";
import { useState } from "react";
import Modal from "../Modal/Modal";

type Props = {
  url: string;
  pathname: string;
  selectedUrl: string;
  setSelectedUrl: (value: string) => void;
};
const FileRename = ({ url, setSelectedUrl, selectedUrl }: Props) => {
  const router = useRouter();
  const [fileName, setFileName] = useState("");
  const [renameOpen, setRenameOpen] = useState(false);
  return (
    <>
      <Button
        variant="ghost"
        onClick={() => setRenameOpen(true)}
        disabled={!!selectedUrl}
      >
        <Pencil1Icon />
      </Button>
      <Modal
        open={renameOpen}
        title="Rename the file"
        fn={setRenameOpen}
        message={
          <TextField.Root
            id="file_rename"
            placeholder="Provide a new name"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
          >
            <TextField.Slot></TextField.Slot>
          </TextField.Root>
        }
      >
        <Button
          variant="solid"
          onClick={async () => {
            setSelectedUrl(url);
            await fetch(`/api/upload?name=${fileName}`, {
              method: "PUT",
              body: JSON.stringify({ url }),
            });
            setSelectedUrl("");
            router.refresh();
          }}
          disabled={!fileName}
        >
          Save
        </Button>
      </Modal>
    </>
  );
};

export default FileRename;
