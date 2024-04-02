"use client";
import { useRouter } from "next/navigation";
import { TrashIcon } from "@radix-ui/react-icons";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";

type Props = {
  url: string;
  loaderFn: (value: boolean) => void;
};
const DeleteButton = ({ url, loaderFn }: Props) => {
  const router = useRouter();
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <button>
          <TrashIcon color="red" />
        </button>
      </AlertDialog.Trigger>
      <AlertDialog.Content maxWidth="450px">
        <AlertDialog.Title>Delete the file</AlertDialog.Title>
        <AlertDialog.Description size="2">
          Are you sure? This will delete the file permanently and cannot be
          retrieved.
        </AlertDialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button
              variant="solid"
              color="red"
              onClick={async () => {
                loaderFn(true);
                await fetch("/api/upload", {
                  method: "DELETE",
                  body: JSON.stringify({ url }),
                });
                router.refresh();
              }}
            >
              DELETE
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default DeleteButton;
