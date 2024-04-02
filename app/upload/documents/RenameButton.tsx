"use client";
import { useRouter } from "next/navigation";
import { Pencil1Icon } from "@radix-ui/react-icons";
import { AlertDialog, Button, Flex, TextField } from "@radix-ui/themes";
import { useState } from "react";

type Props = {
  url: string;
  loaderFn: (value: boolean) => void;
};
const RenameButton = ({ url }: Props) => {
  const router = useRouter();
  const [fileName, setFileName] = useState<string>("");
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <button>
          <Pencil1Icon />
        </button>
      </AlertDialog.Trigger>
      <AlertDialog.Content maxWidth="450px">
        <AlertDialog.Title>Rename the file</AlertDialog.Title>

        <TextField.Root
          id="file_rename"
          placeholder="Provide a new name"
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
        >
          <TextField.Slot></TextField.Slot>
        </TextField.Root>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              CANCEL
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button
              variant="solid"
              onClick={async () => {
                await fetch(`/api/upload?name=${fileName}`, {
                  method: "PUT",
                  body: JSON.stringify({ url }),
                });
                router.refresh();
              }}
            >
              SAVE
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default RenameButton;
