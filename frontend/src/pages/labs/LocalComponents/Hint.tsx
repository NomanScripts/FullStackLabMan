import hintbulb from "../../../assets/images/hint.png";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../../components/ui/accordion";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
} from "../../../components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../../components/ui/tooltip";
import { LightBulbIcon, EyeIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const hint = [
  {
    title: "Hint 1",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Hint 2",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Hint 3",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Hint 4",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];
const Hint = ({ onHintSeen }: { onHintSeen: () => void }) => {
  const [revealedHints, setRevealedHints] = useState<Record<string, boolean>>(
    {}
  );

  const handleReveal = (title: string) => {
    setRevealedHints((prev) => ({ ...prev, [title]: true }));
    onHintSeen();
  };

  return (
    <Dialog>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <DialogTrigger asChild>
              <LightBulbIcon className="w-4 h-4 hover:text-primaryOrange-100 cursor-pointer" />
            </DialogTrigger>
          </TooltipTrigger>
          <TooltipContent className="bg-dark-100 text-white">
            <p className="text-sm max-w-24">
              <span className="font-semibold">Show Hint</span> 100 XP required
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DialogContent className="bg-white">
        <div className="p-4 flex flex-col items-center">
          <img src={hintbulb} alt="hint" className="w-20 h-20" />
          <p className="text-2xl font-bold">View Hint</p>
          <p className="text-sm">
            My XP:{" "}
            {100 - Object.values(revealedHints).filter(Boolean).length * 10}
          </p>
          <p className="text-sm text-gray-500 text-center mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et
          </p>
        </div>
        <Accordion type="multiple" className="">
          {hint.map((item) => (
            <AccordionItem value={item.title} className="border-none">
              <div className="flex items-center justify-between">
                <AccordionTrigger
                  className="hover:no-underline"
                  onClick={() => handleReveal(item.title)}
                >
                  <div className="h-2 w-2 bg-primaryGreen-100 rounded-full mr-2"></div>
                  {item.title}
                </AccordionTrigger>
                <div className="flex items-center gap-2">
                  <EyeIcon
                    className={`w-6 h-6 ${
                      revealedHints[item.title]
                        ? "text-gray-500"
                        : "text-primaryOrange-100"
                    }`}
                  />
                  <p className="text-xs">
                    <span
                      className={`${
                        revealedHints[item.title]
                          ? "text-gray-500"
                          : "text-primaryOrange-100"
                      } font-semibold`}
                    >
                      {revealedHints[item.title] ? "Revealed" : "Reveal"}
                    </span>{" "}
                    {revealedHints[item.title] ? "10 XP Used" : "10 XP"}
                  </p>
                </div>
              </div>
              <AccordionContent className="text-sm">
                <p>{item.content}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </DialogContent>
    </Dialog>
  );
};

export default Hint;
