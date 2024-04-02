import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import Upload from "./upload/page";

export default function Home() {
  return (
    <Theme>
      <main>
        <Upload />
      </main>
    </Theme>
  );
}
