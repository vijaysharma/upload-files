import * as Toast from "@radix-ui/react-toast";
import Styles from "./ToastNotify.module.scss";
import { Button, Link } from "@radix-ui/themes";
import { Cross1Icon } from "@radix-ui/react-icons";
type Props = {
  open: boolean;
  fn: (value: boolean) => void;
  message?: string;
  type?: "alert" | "success";
};
const ToastNotify = ({ open, fn, message, type }: Props) => (
  <div className={`${Styles.ToastRoot} ${type ? Styles[type] : ""}`}>
    <Toast.Provider swipeDirection="down" duration={2500}>
      <Toast.Root open={open} onOpenChange={fn}>
        <Toast.Description>
          {message}
          <Toast.Close className={Styles.ToastClose}>
            <Link>
              <Cross1Icon />
              Close
            </Link>
          </Toast.Close>
        </Toast.Description>
      </Toast.Root>
      <Toast.Viewport />
    </Toast.Provider>
  </div>
);
export default ToastNotify;
