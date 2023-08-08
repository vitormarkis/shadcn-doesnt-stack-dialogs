import React, { useEffect, useImperativeHandle, useRef } from "react";
import { cn } from "@/lib/utils";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { NestedAlertDialogSecond } from "@/components/NestedAlertDialogSecond";

export type NestedAlertDialogProps = React.ComponentPropsWithoutRef<"div"> & {};

export const NestedAlertDialog = React.forwardRef<
  React.ElementRef<"div">,
  NestedAlertDialogProps
>(function NestedAlertDialogComponent({ ...props }, ref) {
  const contentDivRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    console.log(contentDivRef);
  }, [contentDivRef]);

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <button className="h-12 px-4 rounded-lg shadow shadow-black/30 bg-indigo-500 text-white">
          Open this shit
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
              "translate-y-2 p-6 rounded-lg shadow shadow-black/30 border border-black bg-orange-200",
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
            <NestedAlertDialogSecond />
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
});

NestedAlertDialog.displayName = "NestedAlertDialog";
