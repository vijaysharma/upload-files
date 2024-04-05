import { Button, AlertDialog, Flex } from "@radix-ui/themes";
type Props = {
  open: boolean;
  fn: (value: boolean) => void;
  title?: string;
  message?: string | React.ReactNode;
  children?: React.ReactNode;
};
const Modal = ({ open, fn, message, title, children }: Props) => {
  return (
    <AlertDialog.Root open={open} onOpenChange={fn}>
      <AlertDialog.Content maxWidth="450px">
        <AlertDialog.Title>{title}</AlertDialog.Title>

        {children ? (
          <>
            {message}
            <Flex gap="3" mt="4" justify="end">
              <AlertDialog.Cancel>
                <Button variant="outline">Close</Button>
              </AlertDialog.Cancel>
              <AlertDialog.Action>{children}</AlertDialog.Action>
            </Flex>
          </>
        ) : (
          <>
            <AlertDialog.Description size="3">
              {message}
            </AlertDialog.Description>
            <Flex gap="3" mt="4" justify="end">
              <AlertDialog.Cancel>
                <Button variant="outline">Close</Button>
              </AlertDialog.Cancel>
            </Flex>
          </>
        )}
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default Modal;
