import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { ArrowsUpDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const Sort = () => {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleClear = () => {
    setSelectedValue("");
  };

  return (
    <div>
      <Select value={selectedValue} onValueChange={setSelectedValue}>
        <SelectTrigger className="gap-2">
          <ArrowsUpDownIcon className="w-4 h-4" />
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent className="bg-white">
          <div className="flex justify-between gap-2 px-2 py-3 border-b">
            <div className="flex items-center gap-2">
              <p className="text-dark-100 text-md font-semibold">Sort by</p>
            </div>
            <div className="flex items-center gap-2">
              <button 
                className="text-primaryOrange-100 text-sm"
                onClick={handleClear}
              >
                Clear
              </button>
            </div>
          </div>
          <div className="py-4">
            <SelectItem value="name">Most Popular</SelectItem>
            <SelectItem value="difficulty">Most Recent</SelectItem>
            <SelectItem value="category">Most Liked</SelectItem>
          </div>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Sort;
