import {
  HomeIcon,
  CommandLineIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoMobile from "../assets/images/logo-mobile.png";
import logo from "../assets/images/logo.png";
const Sidebar = () => {
  const [activeTab, setActiveTab] = useState(localStorage.getItem('activeTab') || 'home');
  const navigate = useNavigate();

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    localStorage.setItem('activeTab', tab);
    navigate(tab === 'home' ? '/dashboard' : '/labs');
  };

  return (
    <>
      <div className="lg:hidden pl-3 fixed top-0 py-4 z-10 left-0 right-0 bg-white ">
        <img
          src={logoMobile}
          alt="4ARMED"
          className="h-6 w-36"
        />
      </div>

      <aside className="hidden lg:flex w-64 bg-white h-screen p-6 flex-col justify-between">
        <div>
          <div className="mb-6">
            <img
              src={logo}
              alt="4ARMED"
              className="h-6 w-36"
            />
          </div>

          <nav className="space-y-2">
            <button
              onClick={() => handleTabChange('home')}
              className={`flex items-center px-4 py-2 w-full rounded-md relative ${
                activeTab === 'home'
                  ? "bg-primaryOrange-10 text-primaryOrange-100 before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:bg-primaryOrange-100"
                  : "text-dark-100"
              }`}
            >
              <HomeIcon className="w-5 h-5 mr-3" />
              Home
            </button>

            <button
              onClick={() => handleTabChange('labs')}
              className={`flex items-center px-4 py-2 w-full rounded-md relative ${
                activeTab === 'labs'
                  ? "bg-primaryOrange-10 text-primaryOrange-100 before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:bg-primaryOrange-100"
                  : "text-dark-100"
              }`}
            >
              <CommandLineIcon className="w-5 h-5 mr-3" />
              Labs
            </button>
            <div className="h-0.5 w-full bg-gray-100 mt-3"></div>
            <p className=" text-dark-70 py-2">Recent Labs</p>
              <button className="flex items-center px-4 py-2 w-full rounded-md relative text-dark-100">
                <CommandLineIcon className="w-5 h-5 mr-3" />
                Squealer
              </button>
              <button className="flex items-center px-4 w-full rounded-md relative text-dark-100 ">
                <CommandLineIcon className="w-5 h-5 mr-3" />
                Chirper
              </button>
              <button className="flex items-center px-4 py-2 w-full rounded-md relative text-dark-100">
                <CommandLineIcon className="w-5 h-5 mr-3" />
                ByteNest
              </button>
          </nav>
        </div>

        <div className="mt-auto ">
          <button className="w-full bg-primaryGreen-100 text-white py-2 px-4 rounded-md flex items-center justify-center space-x-2 text-sm">
            <div className="flex items-center justify-center bg-primaryOrange-100 rounded-full p-1">
              <BoltIcon className="w-3 h-3 text-white" />
            </div>
            <span
            onClick={()=> navigate("/upgrade")}>Upgrade to Pro</span>
          </button>
        

          <p className="text-sm text-dark-100 mt-3">
            12 out of 20 free lab hours used
          </p>
          <div className="w-full bg-gray-200 h-0.5 rounded-full mt-1">
            <div
              className="bg-dark-70 h-0.5 rounded-full"
              style={{ width: "40%" }}
            ></div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
