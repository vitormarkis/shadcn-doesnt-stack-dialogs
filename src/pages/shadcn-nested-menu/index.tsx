import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React, { useState } from "react";

export default function ShadCNNestedMenu() {
  const [optionsDropdown, setOptionsDropdown] = useState(false);
  const [detailsModal, setDetailsModal] = useState(false);
  const [moreOptionsDropdown, setMoreOptionsDropdown] = useState(false);
  const [moreDetailsModal, setMoreDetailsModal] = useState(false);

  return (
    <div className="h-screen grid place-items-center">
      <DropdownMenu open={optionsDropdown} onOpenChange={setOptionsDropdown}>
        <DropdownMenuTrigger>
          <Button>Options</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Button
            onClick={() => setDetailsModal(true)}
            variant="item"
            size="item"
          >
            See details
          </Button>
        </DropdownMenuContent>
      </DropdownMenu>

      <AlertDialog open={detailsModal} onOpenChange={setDetailsModal}>
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

            <DropdownMenu
              open={moreOptionsDropdown}
              onOpenChange={setMoreOptionsDropdown}
            >
              <DropdownMenuTrigger asChild>
                <Button>See more options</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Button
                  onClick={() => setMoreDetailsModal(true)}
                  variant="item"
                  size="item"
                >
                  See more details
                </Button>
              </DropdownMenuContent>
            </DropdownMenu>

            <AlertDialog
              open={moreDetailsModal}
              onOpenChange={setMoreDetailsModal}
            >
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
