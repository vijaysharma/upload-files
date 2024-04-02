"use client";

import type { PutBlobResult } from "@vercel/blob";
import { useRouter } from "next/navigation";
import { useState, useRef } from "react";
import Loader from "./loader";
import { Button } from "@radix-ui/themes";
import "./form.scss";

type UploadedFile = {
  lastModified?: number;
  lastModifiedDate?: Date;
  name?: string;
  size?: number;
  type?: string;
  webkitRelativePath?: string;
};

export default function UploadForm() {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  const [loader, setLoader] = useState<boolean>(false);
  const [uploadedFile, setUploadedFile] = useState<UploadedFile | null>(null);
  const router = useRouter();
  return (
    <>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          if (!inputFileRef.current?.files) {
            throw new Error("No file selected");
          }

          const file = inputFileRef.current.files[0];

          setLoader(true);
          const response = await fetch(`/api/upload?filename=${file.name}`, {
            method: "POST",
            body: file,
          });
          const newBlob = (await response.json()) as PutBlobResult;

          setBlob(newBlob);
          setLoader(false);
          setUploadedFile(null);
          router.refresh();
        }}
      >
        <label className="selectFileLabel">
          <span>
            {uploadedFile ? uploadedFile.name : "Choose a file to upload"}
          </span>
          <input
            name="file"
            ref={inputFileRef}
            type="file"
            required
            onChange={(e) => {
              setUploadedFile(e.target.files && e.target.files[0]);
            }}
          />
          <Button type="submit" disabled={!uploadedFile}>
            Upload
          </Button>
        </label>
      </form>
      {loader && <Loader />}
      {blob && (
        <div>
          Blob url: <a href={blob.url}>{blob.url}</a>
        </div>
      )}
    </>
  );
}
