import { list } from "@vercel/blob";
import DeleteButton from "./DeleteButton";
import RenameButton from "./RenameButton";
import { Table } from "@radix-ui/themes";
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
        {blobs.map((blob) => (
          <Table.Row key={blob.url}>
            <Table.RowHeaderCell>{blob.pathname}</Table.RowHeaderCell>
            <Table.Cell>{blob.url}</Table.Cell>
            <Table.Cell>
              <RenameButton name="hello" url={blob.url} />
            </Table.Cell>
            <Table.Cell>
              <DeleteButton url={blob.url} />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default Documents;
