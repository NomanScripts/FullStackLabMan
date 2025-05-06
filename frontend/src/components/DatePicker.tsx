"use client";

import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import {
  format,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  subWeeks,
} from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { DateRange as DayPickerDateRange } from "react-day-picker";

export function DatePicker() {
  const [dateRange, setDateRange] = useState<DayPickerDateRange>();
  const [activePreset, setActivePreset] = useState<string | null>(null);

  const handlePreset = (preset: string) => {
    const now = new Date();
    setActivePreset(preset);
    switch (preset) {
      case "thisWeek":
        setDateRange({ from: startOfWeek(now), to: endOfWeek(now) });
        break;
      case "lastWeek":
        setDateRange({
          from: startOfWeek(subWeeks(now, 1)),
          to: endOfWeek(subWeeks(now, 1)),
        });
        break;
      case "thisMonth":
        setDateRange({ from: startOfMonth(now), to: now });
        break;
      default:
        setDateRange({ from: new Date(), to: new Date() });
    }
  };

  const handleClear = () => {
    setDateRange(undefined);
    setActivePreset(null);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "pl-3 text-left font-normal",
            !dateRange?.from && "text-muted-foreground"
          )}
        >
          {dateRange?.from ? (
            dateRange?.to ? (
              <>
                {format(dateRange.from, "LLL dd, y")} -{" "}
                {format(dateRange.to, "LLL dd, y")}
              </>
            ) : (
              format(dateRange.from, "LLL dd, y")
            )
          ) : (
            <span className="text-dark-100 hidden lg:block">Date Range</span>
          )}
          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-4 bg-white" align="start">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-sm text-black">Date Picker</h3>
          {dateRange && (
            <Button
              variant="ghost"
              className="text-primaryOrange-100 hover:text-primaryOrange-100"
              onClick={handleClear}
            >
              Clear
            </Button>
          )}
        </div>
        <Calendar
          mode="range"
          selected={dateRange}
          onSelect={(range) => {
            setDateRange(range);
            setActivePreset(null);
          }}
          disabled={(date) =>
            date > new Date() || date < new Date("1900-01-01")
          }
          initialFocus
          classNames={{
            day_selected:
              "bg-primaryOrange-10 text-primaryOrange-100 hover:bg-primaryOrange-10 hover:text-primaryOrange-100 focus:bg-primaryOrange-10 focus:text-primaryOrange-100",
            day_range_middle: "bg-primaryOrange-10 text-primaryOrange-100",
          }}
        />
        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="flex flex-col">
            <span className="text-sm text-gray-500">From</span>
            <span className="text-dark-100 text-sm">
              {dateRange?.from ? format(dateRange.from, "PP") : "-"}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-gray-500">To</span>
            <span className="text-dark-100 text-sm">
              {dateRange?.to ? format(dateRange.to, "PP") : "-"}
            </span>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {["thisWeek", "lastWeek", "thisMonth"].map((preset) => (
            <Button
              key={preset}
              variant="outline"
              className={cn(
                "rounded-full text-xs p-1.5",
                activePreset === preset
                  ? "border-primaryOrange-100 text-primaryOrange-100"
                  : "text-dark-70"
              )}
              onClick={() => handlePreset(preset)}
            >
              {preset
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (str) => str.toUpperCase())}
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
