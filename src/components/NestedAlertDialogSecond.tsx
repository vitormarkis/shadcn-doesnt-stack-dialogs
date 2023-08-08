import React, { useEffect, useImperativeHandle, useRef } from "react";
import { cn } from "@/lib/utils";
import * as AlertDialog from "@radix-ui/react-alert-dialog";

export type NestedAlertDialogSecondProps =
  React.ComponentPropsWithoutRef<"div"> & {};

export const NestedAlertDialogSecond = React.forwardRef<
  React.ElementRef<"div">,
  NestedAlertDialogSecondProps
>(function NestedAlertDialogSecondComponent({ ...props }, ref) {
  const contentDivRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    console.log(contentDivRef);
  }, [contentDivRef]);

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <button className="h-12 px-4 rounded-lg shadow shadow-black/30 bg-indigo-500 text-white">
          Open third modal actually
        </button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Content
          onOpenAutoFocus={() => console.log("opened nested modal")}
          className="fixed inset-0 grid place-items-center"
        >
          <div
            {...props}
            className={cn(
              "translate-y-4 p-6 rounded-lg shadow shadow-black/30 border border-black bg-purple-200",
              props.className
            )}
            ref={contentDivRef}
          >
            <AlertDialog.Title>Title</AlertDialog.Title>
            <AlertDialog.Description>
              Description description description description description.
            </AlertDialog.Description>
            <AlertDialog.Cancel className="h-12 px-4 rounded-lg shadow shadow-black/30 bg-red-500 text-white">
              Cancel
            </AlertDialog.Cancel>
            <AlertDialog.Action className="h-12 px-4 rounded-lg shadow shadow-black/30 bg-green-500 text-white">
              Confirm
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
});

NestedAlertDialogSecond.displayName = "NestedAlertDialogSecond";
