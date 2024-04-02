"use client";
import { Table, Link, Skeleton } from "@radix-ui/themes";
import DeleteButton from "./DeleteButton";
import RenameButton from "./RenameButton";
import { useState } from "react";
type Props = {
  url: string;
  pathname: string;
};

const DocumentBody = ({ url, pathname }: Props) => {
  const [loader, setLoader] = useState<boolean>(false);
  return (
    <Table.Row key={url}>
      <Table.RowHeaderCell>
        {loader ? <Skeleton /> : pathname}
      </Table.RowHeaderCell>
      <Table.Cell>
        <Link href={url} target="_blank" download>
          {loader ? <Skeleton /> : url}
        </Link>
      </Table.Cell>
      <Table.Cell>
        {loader ? (
          <Skeleton />
        ) : (
          <RenameButton url={url} loaderFn={setLoader} />
        )}
      </Table.Cell>
      <Table.Cell>
        {loader ? (
          <Skeleton />
        ) : (
          <DeleteButton url={url} loaderFn={setLoader} />
        )}
      </Table.Cell>
    </Table.Row>
  );
};

export default DocumentBody;
