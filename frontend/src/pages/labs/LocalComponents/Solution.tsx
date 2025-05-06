import code from "../../../assets/images/code.png";
import solution from "../../../assets/images/solution.png";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogFooter,
  AlertDialogCancel,
} from "../../../components/ui/alert-dialog";
import { Button } from "../../../components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
} from "../../../components/ui/dialog";
import {
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  Tooltip,
} from "../../../components/ui/tooltip";
import {
  DocumentTextIcon,
  CheckCircleIcon,
  LinkIcon,
  PlayCircleIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

const Solution = ({ onSolutionSeen }: { onSolutionSeen: () => void }) => {
  const [solutionShown, setSolutionShown] = useState(false);

  const handleShowSolution = () => {
    setSolutionShown(true);
    onSolutionSeen();
  };

  return (
    <Dialog>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <DialogTrigger asChild>
              <DocumentTextIcon className="w-4 h-4 hover:text-primaryOrange-100 cursor-pointer" />
            </DialogTrigger>
          </TooltipTrigger>
          <TooltipContent className="bg-dark-100 text-white">
            <p className="text-sm max-w-32">
              <span className="font-semibold">Show Solution</span> No XP will be
              earned
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DialogContent className="bg-white">
        <div className="flex flex-col gap-4 items-center">
          <img src={solution} alt="solution" className="w-20 h-20" />
          <p className="text-2xl font-bold">Solution</p>
          <p className="text-sm text-dark-100">No XP will be earned</p>
          <p className="text-sm text-center text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et
          </p>
          <div className="flex flex-col gap-2 ">
            {!solutionShown && (
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <div className="flex flex-col items-center gap-2 my-16">
                    <Button className="bg-primaryOrange-100 text-white px-12 hover:bg-orange-700">
                      Show Solution
                    </Button>
                    <p className="text-xs text-dark-100 text-center font-semibold">
                      No XP will be earned
                    </p>
                  </div>
                </AlertDialogTrigger>
                <AlertDialogContent className="bg-white">
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel className=" text-primaryOrange-100 border border-gray-200  hover:text-orange-700">
                      Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction
                      className="bg-primaryOrange-100 text-white hover:bg-orange-700"
                      onClick={handleShowSolution}
                    >
                      Yes, Show solution
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            )}
            {solutionShown && (
              <div>
                <div className="flex flex-col lg:flex-row justify-between gap-4">
                  <div className="flex">
                    <p className="text-sm text-start">
                      Here is the solution to the problem. Lorem ipsum dolor sit
                      amet, consectetur adipiscing elit. Sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="flex gap-2 text-xs text-dark-100 text-center">
                      <LinkIcon className="w-4 h-4" />
                      <span>Link</span>
                    </p>
                    <p className="flex gap-2 text-xs text-dark-100 text-center">
                      <span>Reprehenderit in voluptate</span>
                      <CheckCircleIcon className="w-4 h-4" />
                    </p>
                    <p className="flex gap-2 text-xs text-dark-100 text-center text-nowrap">
                      <span>Voluptate velit esse cillum dolore</span>
                      <CheckCircleIcon className="w-4 h-4" />
                    </p>
                  </div>
                </div>
                <div className="relative mt-4">
                  <img src={code} alt="solution" className="w-70 h-40" />
                  <div className="absolute top-1/2  translate-x-28 -translate-y-1/2 flex items-center justify-center">
                    <PlayCircleIcon className="w-10 h-10 text-white" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Solution;
