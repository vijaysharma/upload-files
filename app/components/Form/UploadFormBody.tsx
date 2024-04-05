"use client";
import { Cross1Icon } from "@radix-ui/react-icons";
import { Button, Link, Progress } from "@radix-ui/themes";
import { RefObject, useRef, useState } from "react";
import { useFormStatus } from "react-dom";

type Props = {
  formRef: RefObject<HTMLFormElement> | null;
};

export default function UploadFormBody({ formRef }: Props) {
  const { pending } = useFormStatus();
  const ref = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File>();
  return (
    <>
      <label className="relative">
        <span className="cursor-pointer mr-3 underline">
          {ref.current?.value ? selectedFile?.name : "Choose a file to upload"}
        </span>
        <input
          name="file"
          type="file"
          required
          ref={ref}
          disabled={pending}
          className="hidden absolute left-0 right-20"
          onChange={(e) => {
            const file = e.target.files ? e.target.files[0] : null;
            file && setSelectedFile(file);
          }}
        />
      </label>
      {ref.current?.value && (
        <Link
          onClick={() => {
            if (pending) return;
            setSelectedFile(undefined);
            formRef?.current?.reset();
          }}
          className="align-middle inline-block cursor-pointer mr-3"
          color={pending ? "gray" : "indigo"}
        >
          <Cross1Icon className="inline-block align-middle" /> Clear
        </Link>
      )}
      <Button
        type="submit"
        disabled={!ref.current?.value || pending}
        className="align-middle"
      >
        Upload
      </Button>
      <div className="h-8 p-3">{pending && <Progress />}</div>
    </>
  );
}
