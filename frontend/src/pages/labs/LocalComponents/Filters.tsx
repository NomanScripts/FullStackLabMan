import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../../components/ui/accordion";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../components/ui/popover";
import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { toggleFilter, clearFilters, setXpFilter, selectFilters, FiltersState } from '../../../store/filterSlice';

const Filters = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();
  const selectedFilters = useSelector(selectFilters);

  const handleFilterClick = (filterType: keyof FiltersState, value: string) => {
    dispatch(toggleFilter({ filterType, value }));
  };

  const handleClearFilters = () => {
    dispatch(clearFilters());
  };

  const getFilterCount = (filterType: keyof FiltersState) => {
    return selectedFilters[filterType]?.length || 0;
  };

  const filterItems = [
    {
      value: "status",
      label: "Status",
      content: (
        <div className="flex flex-wrap gap-2 w-full">
          {["In Progress", "Completed", "Locked", "Not Started Yet"].map(
            (status) => (
              <div
                key={status}
                className={`cursor-pointer border rounded-full px-3 py-1 whitespace-nowrap ${
                  selectedFilters.status.includes(status)
                    ? "border-primaryOrange-100 text-primaryOrange-100 bg-primaryOrange-10"
                    : "border-dark-100 text-dark-70"
                }`}
                onClick={() => handleFilterClick("status", status)}
              >
                <span>{status}</span>
              </div>
            )
          )}
        </div>
      ),
    },
    {
      value: "tags",
      label: "Tags",
      content: (
        <div className="flex flex-wrap gap-2">
          {["Tag A", "Tag B", "Tag C"].map((tag) => (
            <div
              key={tag}
              className={`cursor-pointer border rounded-full px-3 py-1 whitespace-nowrap ${
                selectedFilters.tags.includes(tag)
                  ? "border-primaryOrange-100 text-primaryOrange-100 bg-primaryOrange-10"
                  : "border-dark-100 text-dark-70"
              }`}
              onClick={() => handleFilterClick("tags", tag)}
            >
              <span>{tag}</span>
            </div>
          ))}
        </div>
      ),
    },
    {
      value: "category",
      label: "Category",
      content: (
        <div className="flex flex-wrap gap-2">
          {["Web Development", "Data Structures", "Algorithms"].map(
            (category) => (
              <div
                key={category}
                className={`cursor-pointer border rounded-full px-3 py-1 whitespace-nowrap ${
                  selectedFilters.category.includes(category)
                    ? "border-primaryOrange-100 text-primaryOrange-100 bg-primaryOrange-10"
                    : "border-dark-100 text-dark-70"
                }`}
                onClick={() => handleFilterClick("category", category)}
              >
                <span>{category}</span>
              </div>
            )
          )}
        </div>
      ),
    },
    {
      value: "xp",
      label: "XP Required",
      content: (
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="0"
            className="w-full border border-dark-100 rounded-md px-3 py-2"
            onChange={(e) => {
              const minXP = e.target.value;
              dispatch(setXpFilter(minXP ? ['active'] : [])); 
            }}
          />
          <span className="text-dark-100 items-center flex">-</span>
          <input
            type="number"
            placeholder="Any"
            className="w-full border border-dark-100 rounded-md px-3 py-2"
            onChange={(e) => {
              const maxXP = e.target.value;
              dispatch(setXpFilter(maxXP ? ['active'] : []));
            }}
          />
        </div>
      ),
    },
    {
      value: "difficulty",
      label: "Difficulty",
      content: (
        <div className="flex flex-wrap gap-2">
          {["Easy", "Medium", "Hard"].map((difficulty) => (
            <div
              key={difficulty}
              className={`cursor-pointer border rounded-full px-3 py-1 whitespace-nowrap ${
                selectedFilters.difficulty.includes(difficulty)
                  ? "border-primaryOrange-100 text-primaryOrange-100 bg-primaryOrange-10"
                  : "border-dark-100 text-dark-70"
              }`}
              onClick={() => handleFilterClick("difficulty", difficulty)}
            >
              <span>{difficulty}</span>
            </div>
          ))}
        </div>
      ),
    },
  ];

  const totalSelectedFilters = Object.values(selectedFilters).reduce(
    (acc, filters) => acc + filters.length,
    0
  );

  return (
    <Popover>
      <PopoverTrigger asChild>
        {React.cloneElement(children as React.ReactElement<any>, {
          children: (
            <>
              {React.Children.toArray(
                (children as React.ReactElement<any>).props.children
              )}
              {totalSelectedFilters > 0 && (
                <span className="ml-1 bg-primaryGreen-100 text-white rounded-full px-2.5 py-0.5 text-xs">
                  {totalSelectedFilters}
                </span>
              )}
            </>
          ),
        })}
      </PopoverTrigger>
      <PopoverContent
        className="w-[300px] bg-white"
        align="end"
        sideOffset={10}
        collisionPadding={16}
      >
        <div className="flex justify-between items-center border-b pb-3 mb-3">
          <h3 className="text-dark-100 font-semibold">Filters</h3>
          {totalSelectedFilters > 0 && (
            <button
              onClick={handleClearFilters}
              className="text-primaryOrange-100 text-sm hover:text-primaryOrange-100/80"
            >
              Clear All
            </button>
          )}
        </div>
        <div className="">
          <Accordion type="multiple" className="w-full">
            {filterItems.map((item) => (
              <AccordionItem key={item.value} value={item.value} className="">
                <AccordionTrigger className="hover:no-underline py-3">
                  <div className="flex items-center gap-2">
                    <span className="text-dark-100">{item.label}</span>
                    {getFilterCount(item.value as keyof FiltersState) > 0 && (
                      <span className="bg-primaryGreen-100 text-white rounded-full px-2.5 py-0.5 text-xs">
                        {getFilterCount(item.value as keyof FiltersState)}
                      </span>
                    )}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="">{item.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default Filters;
