import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import AvatarUploadPage from "./upload/page";

export default function Home() {
  return (
    <Theme>
      <main>
        <AvatarUploadPage />
      </main>
    </Theme>
  );
}
