import { ShieldCheckIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import { Switch } from "../../../components/ui/switch";
const Security = () => {
  return (
    <div className="p-6">
      <div className="flex flex-col gap-4">
        <p className="text-lg font-semibold text-dark-100">Security</p>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 ">
            <ShieldCheckIcon className="w-10 h-10 text-white bg-primaryGreen-100 rounded-full p-2.5 " />
            <div className="flex justify-between w-full gap-12 lg:gap-24">
              <div className="flex flex-col gap-1">
                <p className="text-sm text-dark-100 font-semibold">
                  2-Step Verification
                </p>
                <p className="text-sm text-dark-70 max-w-64">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Switch className=" data-[state=checked]:bg-primaryOrange-100 data-[state=unchecked]:bg-gray-300 data-[state=checked]:border-primaryOrange-100 [&>span]:data-[state=checked]:bg-white [&>span]:data-[state=unchecked]:bg-white" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <LockClosedIcon className="w-10 h-10 text-white bg-primaryGreen-100 rounded-full p-2.5 " />
            <div className="flex justify-between w-full gap-12 lg:gap-24">
              <div className="flex flex-col gap-1">
                <p className="text-sm text-dark-100 font-semibold">Password</p>
                <p className="text-sm text-dark-70 max-w-64">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button className="text-sm text-primaryOrange-100 border border-gray-200 rounded-md p-1 text-nowrap">
                  Update Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
