import {
  Button,
  Skeleton,
  Table,
  Theme,
  Heading,
  Container,
} from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
export default function loading() {
  return (
    <Theme>
      <Container size="4" className="p-16">
        <Heading align="center">Vercel Blob Storage</Heading>
        <form className="text-right">
          <Skeleton>
            <label>
              <span>Choose a file to upload</span>
              <input type="file" />
            </label>

            <Button>Upload</Button>
            <div className="h-8 p-3"></div>
          </Skeleton>
        </form>
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
            <Table.Row>
              <Table.RowHeaderCell>
                <Skeleton />
              </Table.RowHeaderCell>
              <Table.Cell>
                <Skeleton />
              </Table.Cell>
              <Table.Cell>
                <Skeleton />
              </Table.Cell>
              <Table.Cell>
                <Skeleton />
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </Container>
    </Theme>
  );
}
