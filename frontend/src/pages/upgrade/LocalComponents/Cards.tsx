import enterpriseMask from "../../../assets/images/enterprise-mask.png";
import freeMask from "../../../assets/images/free-mask.png";
import proMask from "../../../assets/images/pro-mask.png";
import {
  TagIcon,
  BoltIcon,
  BuildingOfficeIcon,
} from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

const Cards = () => {
  const navigate = useNavigate();
  return (
    <div className="flex lg:flex-row flex-col gap-6 overflow-hidden">
      <div className="flex-1 bg-white px-6 pb-6 rounded-lg shadow-md border border-gray-200 h-[480px] flex flex-col ">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between ">
            <div className="flex flex-row gap-2 items-center">
              <TagIcon className="size-6 " />
              <p className="text-2xl font-medium">Free</p>
            </div>
            <div>
              <img src={freeMask} alt="free-mask" className="w-28 h-20" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-5xl ">
              $ 0.00 <span className="text-dark-100 text-xs">USD</span>
            </p>
            <p className="text-md font-semibold text-dark-70">Per Month</p>
          </div>
          <div className="h-0.5 w-full bg-gray-100"></div>
          <div className="flex flex-row gap-2 items-center">
            <CheckCircleIcon className="size-6 text-gray-300" />
            <p className="text-sm font-medium">
              Access to labs designated as Free.
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <CheckCircleIcon className="size-6 text-gray-300" />
            <p className="text-sm font-medium">
              2 hours access to a personal “HackReady” instance
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <CheckCircleIcon className="size-6 text-gray-300" />
            <p className="text-sm font-medium">
              2 hours running lab time per month
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <CheckCircleIcon className="size-6 text-gray-300" />
            <p className="text-sm font-medium">
              Maximum 30 minutes for one lab instance
            </p>
          </div>
        </div>
        <div className="lg:mt-auto mt-6">
          <button className="text-dark-70 border border-dark-100/20 px-4 py-2 rounded-md w-full hover:bg-gray-50 transition-colors">
            Current Plan
          </button>
        </div>
      </div>

      <div className="flex-1 bg-white px-6 pb-6 rounded-lg shadow-md border border-primaryOrange-100 h-[480px] flex flex-col">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between ">
            <div className="flex flex-row gap-2 items-center">
              <BoltIcon className="size-6 " />
              <p className="text-2xl font-medium">Pro</p>
            </div>
            <div>
              <img src={proMask} alt="pro-mask" className="w-28 h-20" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-5xl ">
              $ 12.99 <span className="text-dark-100 text-xs">USD</span>
            </p>
            <p className="text-md font-semibold text-dark-70">Per Month</p>
          </div>
          <div className="h-0.5 w-full bg-gray-100"></div>
          <div className="flex flex-row gap-2 items-center">
            <CheckCircleIcon className="size-6 text-gray-300" />
            <p className="text-sm font-medium">
              Access to labs designated as Free.
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <CheckCircleIcon className="size-6 text-gray-300" />
            <p className="text-sm font-medium">
              24 hours access to a personal “HackReady” instance
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <CheckCircleIcon className="size-6 text-gray-300" />
            <p className="text-sm font-medium">
              24 hours running lab time per month
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <CheckCircleIcon className="size-6 text-gray-300" />
            <p className="text-sm font-medium">No lab instance restriction</p>
          </div>
        </div>
        <div className="lg:mt-auto mt-6">
          <button
            className="text-white bg-primaryOrange-100 px-4 py-2 rounded-md w-full hover:bg-primaryOrange-100/80 transition-colors"
            onClick={() => navigate("/payment")}
          >
            Go Pro
          </button>
        </div>
      </div>
      <div className="flex-1 bg-white px-6 pb-6 rounded-lg shadow-md border border-gray-200 h-[480px] flex flex-col">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between ">
            <div className="flex flex-row gap-2 items-center">
              <BuildingOfficeIcon className="size-6 " />
              <p className="text-2xl font-medium">Enterprise</p>
            </div>
            <div>
              <img
                src={enterpriseMask}
                alt="enterprise-mask"
                className="w-28 h-20"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-5xl ">
              $ 14.99 <span className="text-dark-100 text-xs">USD</span>
            </p>
            <p className="text-md font-semibold text-dark-70">Per Month</p>
          </div>
          <div className="h-0.5 w-full bg-gray-100"></div>
          <div className="flex flex-row gap-2 items-center">
            <CheckCircleIcon className="size-6 text-gray-300" />
            <p className="text-sm font-medium">
              Ability to create an Organisation/Team
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <CheckCircleIcon className="size-6 text-gray-300" />
            <p className="text-sm font-medium">
              Add users to Organisation/Team
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <CheckCircleIcon className="size-6 text-gray-300" />
            <p className="text-sm font-medium">
              Create/edit “Tracks” and give Team members access
            </p>
          </div>
          <div className="flex flex-row gap-2 ">
            <CheckCircleIcon className="size-6 text-gray-300" />
            <p className="text-sm font-medium max-w-[300px]">
              Monitor Team member progress.
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <CheckCircleIcon className="size-6 text-gray-300" />
            <p className="text-sm font-medium">Invoice billing option</p>
          </div>
        </div>
        <div className="lg:mt-auto mt-6">
          <button className="text-primaryOrange-100 border border-dark-100/20 px-4 py-2 rounded-md w-full hover:bg-gray-50 transition-colors">
            Go Enterprise
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
