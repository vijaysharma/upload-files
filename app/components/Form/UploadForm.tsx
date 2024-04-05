"use client";
import { uploadFile } from "@/app/actions/formAction";
import { useRef, useState } from "react";
import Modal from "../Modal/Modal";
import ToastNotify from "../ToastNotify/ToastNotify";
import UploadFormBody from "./UploadFormBody";

export default function UploadForm() {
  const ref = useRef<HTMLFormElement>(null);
  const [open, setOpen] = useState(false);
  const [notify, setNotify] = useState(false);
  const [notification, setNotification] = useState("");
  return (
    <>
      <form
        ref={ref}
        action={async (formData) => {
          const file = formData.get("file") as File;
          if (file && file.size > 5 * 1024 * 1024) setOpen(true);
          else {
            await uploadFile(formData);
            setNotification(
              `File "${file.name}" has been successfully uploaded.`
            );
            setNotify(true);
            ref.current?.reset();
          }
        }}
        className="text-right"
      >
        <UploadFormBody formRef={ref} />
        <Modal
          open={open}
          fn={setOpen}
          message="The file you're attempting to upload exceeds 5MB in size. Currently,
          only files up to 5MB are permitted."
          title="File Upload"
        />
      </form>
      {notify && (
        <ToastNotify open={notify} fn={setNotify} message={notification} />
      )}
    </>
  );
}
