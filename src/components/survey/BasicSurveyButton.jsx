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
import { useSurveyContext } from "@/context/SurveyContext";
// import { admin } from "@/helpers/UserProvider";

export const BasicSurveyButton = ({
  name,
  children,
  // closeButton,
  newButton = false,
}) => {
  // const { saveChanges, openAndSave, resetCurrentSurvey, currentSurvey } =
  const { saveChanges, resetCurrentSurvey } =
    useSurveyContext();
  const basicStyle =
    "h-30 bg-indigo-900 text-white hover:bg-indigo-800 relative p-4 rounded-lg transition-all duration-300 cursor-pointer";
  const basicStyleNew =
    "h-30 bg-blue-900 text-blue-300 relative border-2  border-blue-500 border-dashed p-4 rounded-lg hover:bg-blue-800 transition-all duration-300 cursor-pointer";
  return (
    <>
      <Dialog onOpenChange={() => resetCurrentSurvey()}>
        <DialogTrigger asChild>
          <div className={newButton ? basicStyleNew : basicStyle}>
            {/* {!newButton ? (
              <div onClick={closeButton} className=" absolute top-0 right-3">
                x
              </div>
            ) : null} */}
            {newButton ? (
              <div className="text-xl font-bold  flex items-center justify-center h-full">
                <Plus />
              </div>
            ) : (
              <div className="text-l font-bold">{`${name}`}</div>
            )}
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]" onOpenAutoFocus={(e) => e.preventDefault()}>
          <DialogHeader>
            <DialogTitle>{name}</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          {children}
          <DialogFooter>
            <DialogClose asChild>
              <div className="flex gap-2 justify-end">
                <Button variant="outline">Cancelar</Button>
                {/* {!currentSurvey.opened && currentSurvey.created && admin && currentSurvey.enabled && (
                  <Button
                    onClick={openAndSave}
                  >
                    Abrir encuesta
                  </Button>
                )} */}
                <Button onClick={saveChanges} type="submit">
                  Guardar cambios!
                </Button>
              </div>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
