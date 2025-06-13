import React from "react";
import { Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const BasicSurveyButton = ({
  children,
  closeButton,
  newButton = false,
}) => {
  const basicStyle =
    "h-30 bg-green-400 relative p-4 rounded-lg hover:bg-green-500 transition-all duration-300 cursor-pointer";
  const basicStyleNew =
    "h-30 bg-blue-400 relative border-2  border-blue-800 border-dashed p-4 rounded-lg hover:bg-blue-500 transition-all duration-300 cursor-pointer";
  return (
    <>
      <Dialog>
        <form>
          <DialogTrigger asChild>
            <div className={newButton ? basicStyleNew : basicStyle}>
              {!newButton ? (
                <div onClick={closeButton} className=" absolute top-0 right-3">
                  x
                </div>
              ) : null}
              {children}
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{children}</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you&apos;re
                done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="name-1">Name</Label>
                <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="username-1">Username</Label>
                <Input
                  id="username-1"
                  name="username"
                  defaultValue="@peduarte"
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </>
  );
};
