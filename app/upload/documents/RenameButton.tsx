"use client";
import { useRouter } from "next/navigation";
import { Pencil1Icon } from "@radix-ui/react-icons";

type Props = {
  url: string;
  name?: string;
};
const RenameButton = ({ url, name }: Props) => {
  const router = useRouter();
  return (
    <button
      onClick={async () => {
        await fetch(`/api/upload?name=${name}`, {
          method: "PUT",
          body: JSON.stringify({ url }),
        });
        router.refresh();
      }}
    >
      <Pencil1Icon />
    </button>
  );
};

export default RenameButton;
