"use client";
import { Table } from "@radix-ui/themes";
import { useState } from "react";
import FileRows from "./FileRows";
import ToastNotify from "../ToastNotify/ToastNotify";
import { ListBlobResultBlob } from "@vercel/blob";

const FilesTable = ({ files }: { files: ListBlobResultBlob[] }) => {
  const [notify, setNotify] = useState(false);
  const [notification, setNotification] = useState("");
  return (
    <>
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>File Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Download</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Edit</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Delete</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <FileRows
            files={files}
            setNotify={setNotify}
            setNotification={setNotification}
          />
        </Table.Body>
      </Table.Root>
      {notify && (
        <ToastNotify
          open={notify}
          fn={setNotify}
          message={notification}
          type="alert"
        />
      )}
    </>
  );
};

export default FilesTable;
