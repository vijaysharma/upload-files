import UploadForm from "./form/UploadForm";
import Documents from "./documents/Documents";
import { Heading, Container } from "@radix-ui/themes";

const Upload = () => {
  return (
    <Container size="4" className="p-16">
      <Heading align="center">Upload File</Heading>
      <UploadForm />
      <Documents />
    </Container>
  );
};

export default Upload;
