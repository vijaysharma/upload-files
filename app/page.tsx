import { Theme } from "@radix-ui/themes";
import Files from "./components/Files/Files";
import { Heading, Container } from "@radix-ui/themes";
import UploadForm from "./components/Form/UploadForm";
import "@radix-ui/themes/styles.css";

export default function Home() {
  return (
    <Theme>
      <Container size="4" className="p-16">
        <Heading align="center">Vercel Blob Storage</Heading>
        <UploadForm />
        <Files />
      </Container>
    </Theme>
  );
}
