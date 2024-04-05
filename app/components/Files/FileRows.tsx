"use client";
import { ListBlobResultBlob } from "@vercel/blob";
import FileRename from "./FileRename";
import { Table, Link, Skeleton } from "@radix-ui/themes";
import { useState } from "react";
import FileDelete from "./FileDelete";

type Props = {
  files: ListBlobResultBlob[];
  setNotify: (value: boolean) => void;
  setNotification: (value: string) => void;
};
const FileRows = ({ files, setNotify, setNotification }: Props) => {
  const [selectedUrl, setSelectedUrl] = useState("");

  return (
    <>
      {files &&
        files.map((file) => (
          <Table.Row key={file.url}>
            <Table.RowHeaderCell>
              <Skeleton loading={file.url === selectedUrl}>
                {file.pathname}
              </Skeleton>
            </Table.RowHeaderCell>
            <Table.Cell>
              <Skeleton loading={file.url === selectedUrl}>
                <Link href={file.url} target="_blank" download>
                  {file.url}
                </Link>
              </Skeleton>
            </Table.Cell>
            <Table.Cell>
              <Skeleton loading={file.url === selectedUrl}>
                <FileRename
                  url={file.url}
                  pathname={file.pathname}
                  setSelectedUrl={setSelectedUrl}
                  selectedUrl={selectedUrl}
                />
              </Skeleton>
            </Table.Cell>
            <Table.Cell>
              <Skeleton loading={file.url === selectedUrl}>
                <FileDelete
                  url={file.url}
                  pathname={file.pathname}
                  setNotify={setNotify}
                  selectedUrl={selectedUrl}
                  setNotification={setNotification}
                  setSelectedUrl={setSelectedUrl}
                />
              </Skeleton>
            </Table.Cell>
          </Table.Row>
        ))}
    </>
  );
};

export default FileRows;
