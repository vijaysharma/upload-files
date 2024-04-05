"use client";
import { Button } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import { TrashIcon } from "@radix-ui/react-icons";
import { deleteFile } from "@/app/actions/formAction";
type Props = {
  url: string;
  pathname: string;
  selectedUrl: string;
  setSelectedUrl: (value: string) => void;
  setNotification: (value: string) => void;
  setNotify: (value: boolean) => void;
};

const FileDelete = ({
  url,
  pathname,
  selectedUrl,
  setSelectedUrl,
  setNotify,
  setNotification,
}: Props) => {
  const [deleteOpen, setDeleteOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        onClick={() => setDeleteOpen(true)}
        disabled={!!selectedUrl}
      >
        <TrashIcon color="red" />
      </Button>
      <Modal
        title="Delete the file"
        message="
                Are you sure? This will delete the file permanently and cannot
                be retrieved."
        open={deleteOpen}
        fn={setDeleteOpen}
      >
        <form
          action={async (formData) => {
            setSelectedUrl(url);
            await new Promise((resolve) => setTimeout(resolve, 0));
            await deleteFile(formData);
            setNotification(
              `File "${pathname}" has successfully been deleted and cannot be retrieved.`
            );
            setNotify(true);
            setSelectedUrl("");
          }}
        >
          <input name="fileUrl" type="hidden" value={url} />
          <Button type="submit" variant="solid" color="red">
            Delete
          </Button>
        </form>
      </Modal>
    </>
  );
};

export default FileDelete;
