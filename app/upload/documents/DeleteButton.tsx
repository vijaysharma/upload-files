"use client";
import { useRouter } from "next/navigation";
import { TrashIcon } from "@radix-ui/react-icons";

type Props = {
  url: string;
};
const DeleteButton = ({ url }: Props) => {
  const router = useRouter();
  return (
    <button
      onClick={async () => {
        await fetch("/api/upload", {
          method: "DELETE",
          body: JSON.stringify({ url }),
        });
        router.refresh();
      }}
    >
      <TrashIcon />
    </button>
  );
};

export default DeleteButton;
