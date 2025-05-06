import { Breadcrumb, BreadcrumbItem } from "../../../components/ui/breadcrumb";
import {
  InformationCircleIcon,
  ClockIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import { PlayIcon, StopIcon } from "@heroicons/react/24/solid";
import { Slash } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const [isLabStarted, setIsLabStarted] = useState(false);
  const [isStarting, setIsStarting] = useState(false);
  const [isStopping, setIsStopping] = useState(false);
  const navigate = useNavigate();

  const toggleLab = () => {
    if (!isLabStarted) {
      setIsStarting(true);
      setTimeout(() => {
        setIsStarting(false);
        setIsLabStarted(true);
      }, 2000);
    } else {
      setIsStopping(true);
      setTimeout(() => {
        setIsStopping(false);
        setIsLabStarted(false);
      }, 2000);
    }
  };

  return (
    <div className="flex flex-col bg-white lg:rounded-lg  shadow-md border border-gray-200">
      <div className="flex gap-3 items-center p-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5"
          onClick={() => navigate("/labs")}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
        <div className="flex items-center gap-2 bg-gray-100 rounded-md px-2 w-fit">
          <Breadcrumb>
            <BreadcrumbItem>
              <div className="flex items-center gap-2">
                <Link to="/labs" className="text-dark-70 text-xs">
                  Labs
                </Link>
                <Slash className="size-3 text-gray-500" />
                <Link to="" className="text-dark-70 text-xs">
                  Attempt Lab
                </Link>
              </div>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-2 p-4 items-center">
        <h1 className="text-dark-100 text-2xl font-semibold">Chirper</h1>
      </div>
      <div className="flex gap-2 justify-between items-center flex-wrap p-4">
        <div className="flex gap-2 ">
          <span className="bg-chips-blue text-dark-100 text-xs font-medium px-3 py-1 rounded-md font-semibold">
            Beginner
          </span>
          <span className="bg-gray-100 font-medium text-gray-700 text-xs font-semibold px-3 py-1 rounded-md">
            Web Development
          </span>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <div>
            <span className="bg-gray-100 font-medium text-gray-700 text-xs font-semibold px-3 py-1 rounded-md">
              Tag A
            </span>
          </div>
          <div>
            <span className="bg-gray-100 font-medium text-gray-700 text-xs font-semibold px-3 py-1 rounded-md">
              Tag B
            </span>
          </div>
          <div>
            <span className="bg-gray-100 font-medium text-gray-700 text-xs font-semibold px-3 py-1 rounded-md">
              Tag C
            </span>
          </div>
          <div>
            <p className="text-dark-70 text-sm">Added on: Nov 8, 2022</p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 p-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nemo beatae
        eaque labore obcaecati animi a earum aperiam incidunt aspernatur,
        reiciendis vitae, officia iste nostrum assumenda. In cum fuga
        repellendus!
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-2 border-t border-b border-gray-200 py-2">
        <div className="flex items-center gap-2 p-2 w-fit border-r border-gray-200">
          <p className="text-dark-100 text-sm">
            Community difficulty rating:
            <span className="font-semibold"> 8.5 out of 10</span>
          </p>
        </div>
        <div className="flex items-center gap-2 p-2 w-fit border-r border-gray-200">
          <p className="text-dark-100 text-sm">
            XP required:
            <span className="font-semibold">100</span>
          </p>
        </div>
        <div className="flex items-center gap-2 p-2 w-fit">
          <p className="text-dark-100 text-sm">
            XP Gained:
            <span className="font-semibold">300</span>
          </p>
        </div>
      </div>
      <div
        className={`flex flex-col lg:flex-row items-center gap-6 p-4 lg:rounded-b-lg ${
          isLabStarted
            ? "bg-primaryGreen-100 transition-all duration-1000"
            : "transition-all duration-500"
        }`}
      >
        <div className="flex text-center justify-center gap-2 w-full lg:w-fit">
          <button
            onClick={toggleLab}
            disabled={isStarting || isStopping}
            className="text-white p-3 rounded-md flex items-center justify-center gap-2 w-full bg-primaryOrange-100 transition-all duration-1000"
          >
            {isStarting || isStopping ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <p className="text-sm font-semibold">
                  {isStarting ? "Starting Lab..." : "Stopping Lab..."}
                </p>
              </>
            ) : isLabStarted ? (
              <>
                <StopIcon className="size-5" />
                <p className="text-sm font-semibold">Stop Lab</p>
              </>
            ) : (
              <>
                <PlayIcon className="size-5" />
                <p className="text-sm font-semibold">Start Lab</p>
              </>
            )}
          </button>
        </div>

        {isLabStarted && (
          <div className="flex flex-col gap-2 lg:w-fit w-full">
            <div className="flex items-center gap-2 bg-primaryOrange-10 px-4 py-1.5 rounded-md">
              <p className="text-sm font-semibold text-nowrap">
                Lab Url: https://akjhsfhekjhwewfs...
              </p>
              <DocumentDuplicateIcon className="size-5" />
              <button className="bg-primaryOrange-100 text-white px-4 py-2 rounded-md flex items-center justify-center gap-2 w-fit text-xs font-semibold">
                Go
              </button>
            </div>
          </div>
        )}

        <div className="flex items-center gap-2">
          <InformationCircleIcon
            className={`size-5 ${
              isLabStarted ? "text-white" : "text-dark-100"
            }`}
          />
          <p
            className={`text-sm font-semibold ${
              isLabStarted ? "text-white" : "text-dark-100"
            }`}
          >
            Lab Status: {isLabStarted ? "Ready" : "Not Started"}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <ClockIcon
            className={`size-5  ${
              isLabStarted ? "text-red-500 animate-pulse  " : "text-dark-100"
            }`}
          />
          <p
            className={`text-sm font-semibold ${
              isLabStarted ? "text-white" : "text-dark-100"
            }`}
          >
            Time{" "}
            {isLabStarted
              ? "Remaining: 1hr, 29 mins 59 secs"
              : "Allowed: 1hr, 30 mins"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
