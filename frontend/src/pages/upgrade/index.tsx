import { BreadcrumbItem } from "../../components/ui/breadcrumb";
import { Breadcrumb } from "../../components/ui/breadcrumb";
import { Slash } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger } from "../../components/ui/tabs";
import Cards from "./LocalComponents/Cards";
const index = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-white w-full p-4 border border-gray-200 rounded-lg shadow-md">
        <div className="flex lg:flex-row flex-col gap-5 justify-between items-start">
          <div className="flex flex-col gap-4">
            <div className="flex gap-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
                onClick={() => navigate("/dashboard")}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
              <div className="flex items-center rounded-md px-2 w-fit">
                <Breadcrumb>
                  <BreadcrumbItem>
                    <div className="flex items-center gap-2">
                      <Link to="/dashboard" className="text-dark-70 text-xs">
                        Home
                      </Link>
                      <Slash className="size-3 text-gray-500" />
                      <Link to="" className="text-dark-70 text-xs">
                        Upgrade
                      </Link>
                    </div>
                  </BreadcrumbItem>
                </Breadcrumb>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xl font-bold">Choose your plan</p>
              <p className=" text-gray-500 max-w-lg text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="flex bg-gray-100 px-1 py-2 h-fit w-fit mt-auto rounded-md">
            <Tabs defaultValue="account" className="w-[400px]">
              <TabsList className="bg-white-100 rounded-md">
                <TabsTrigger value="account">Monthly Billing</TabsTrigger>
                <TabsTrigger value="password">Annual Billing
                  <span className="text-semantic-success font-semibold bg-green-100 px-2 py-1 rounded-md text-xs ml-2">Save 20%</span>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </div>
     <div className="mt-4">
      <Cards />
     </div>
    </div>
  );
};

export default index;
