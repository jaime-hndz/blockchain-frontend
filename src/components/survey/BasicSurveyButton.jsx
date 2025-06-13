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
import { Plus } from "@mynaui/icons-react";

export const BasicSurveyButton = ({
  name,
  children,
  closeButton,
  newButton = false,
  onSave = () => {},
}) => {
  const basicStyle =
    "h-30 bg-green-400 relative p-4 rounded-lg hover:bg-green-500 transition-all duration-300 cursor-pointer";
  const basicStyleNew =
    "h-30 bg-blue-400 relative border-2  border-blue-800 border-dashed p-4 rounded-lg hover:bg-blue-500 transition-all duration-300 cursor-pointer";
  return (
    <>
      <Dialog>
          <DialogTrigger asChild>
            <div className={newButton ? basicStyleNew : basicStyle}>
              {!newButton ? (
                <div onClick={closeButton} className=" absolute top-0 right-3">
                  x
                </div>
              ) : null}
              {newButton ? <div className='text-xl font-bold  flex items-center justify-center h-full'><Plus /></div> : <div>{`${name}`}</div>}
            </div>
          </DialogTrigger>
        <form>

          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{name}</DialogTitle>
              {/* <DialogDescription>
                Make changes to your profile here. Click save when you&apos;re
                done.
              </DialogDescription> */}
            </DialogHeader>
            {children}
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancelar</Button>
              </DialogClose>
              <Button onClick={onSave} type="submit">Guardar cambios!</Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </>
  );
};
