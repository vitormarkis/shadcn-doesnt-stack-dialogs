import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React, { useEffect, useState } from "react";

export default function ShadCNNestedMenu() {
  const [dropdown, setDropdown] = useState(false);
  const [alertDialog, setAlertDialog] = useState(false);
  const [modal, setModal] = useState(false);
  const [ddOpen, setDDOpen] = useState(false);

  // useEffect(() => {
  //   const to = setInterval(() => {
  //     setDropdown(isOpen => !isOpen);
  //   }, 500);

  //   return () => clearInterval(to);
  // }, []);

  return (
    <div className="h-screen grid place-items-center">
      <DropdownMenu open={dropdown} onOpenChange={setDropdown}>
        <DropdownMenuTrigger>
          <Button>Options</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Button
            onClick={() => setAlertDialog(true)}
            variant="item"
            size="item"
          >
            See details
          </Button>
        </DropdownMenuContent>
      </DropdownMenu>

      <AlertDialog open={alertDialog} onOpenChange={setAlertDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>

            <DropdownMenu open={ddOpen} onOpenChange={setDDOpen}>
              <DropdownMenuTrigger asChild>
                <Button>See more options</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Button
                  onClick={() => setModal(true)}
                  variant="item"
                  size="item"
                >
                  See more details
                </Button>
              </DropdownMenuContent>
            </DropdownMenu>

            <AlertDialog open={modal} onOpenChange={setModal}>
              <AlertDialogContent className="w-[30rem] translate-y-6 bg-orange-500">
                <AlertDialogHeader>
                  <AlertDialogTitle>EVEN MORE DETAILS?</AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
