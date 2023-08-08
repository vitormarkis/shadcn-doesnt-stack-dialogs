import React from "react";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { NestedAlertDialog } from "@/components/NestedAlertDialog";

export default function Popovers() {
  return (
    <div className="h-screen grid place-items-center">
      <AlertDialog.Root>
        <AlertDialog.Trigger className="h-12 px-4 rounded-lg shadow shadow-black/30 bg-blue-500 text-white">
          Open Modal
        </AlertDialog.Trigger>
        <AlertDialog.Portal>
          <AlertDialog.Overlay />
          <AlertDialog.Content className="fixed inset-0 grid place-items-center">
            <div className="p-6 rounded-lg shadow shadow-black/30 border bg-white">
              <AlertDialog.Title>Title</AlertDialog.Title>
              <AlertDialog.Description>
                Description description description description description.
              </AlertDialog.Description>
              <AlertDialog.Cancel className="h-12 px-4 rounded-lg shadow shadow-black/30 bg-red-500 text-white">
                Cancel
              </AlertDialog.Cancel>
              <NestedAlertDialog />
            </div>
          </AlertDialog.Content>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    </div>
  );
}
