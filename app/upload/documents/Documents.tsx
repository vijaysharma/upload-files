import { list } from "@vercel/blob";
import { Table } from "@radix-ui/themes";
import DocumentBody from "./DocumentBody";

const Documents = async () => {
  const { blobs } = await list();
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>File Name</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Download</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Edit</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Delete</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {blobs &&
          blobs.map((blob) => (
            <DocumentBody url={blob.url} pathname={blob.pathname} />
          ))}
      </Table.Body>
    </Table.Root>
  );
};

export default Documents;
