import {
  HomeIcon,
  CommandLineIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const VerticalSidebar = () => {
  const [activeTab, setActiveTab] = useState(
    localStorage.getItem("activeTab") || "home"
  );
  const navigate = useNavigate();

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    localStorage.setItem("activeTab", tab);
    navigate(tab === "home" ? "/dashboard" : "/labs");
  };

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t p-3 flex justify-around items-center lg:hidden">
      <button
        onClick={() => handleTabChange("home")}
        className="flex flex-col items-center"
      >
        <HomeIcon
          className={`w-6 h-6 ${
            activeTab === "home" ? "text-black" : "text-gray-400"
          }`}
        />
        <span
          className={`text-sm ${
            activeTab === "home" ? "text-black font-medium" : "text-gray-400"
          }`}
        >
          Home
        </span>
      </button>

      <button
        onClick={() => handleTabChange("labs")}
        className="flex flex-col items-center"
      >
        <CommandLineIcon
          className={`w-6 h-6 ${
            activeTab === "labs" ? "text-black" : "text-gray-400"
          }`}
        />
        <span
          className={`text-sm ${
            activeTab === "labs" ? "text-black font-medium" : "text-gray-400"
          }`}
        >
          Labs
        </span>
      </button>

      <button
        className="flex flex-col items-center"
        onClick={() => navigate("/upgrade")}
      >
        <div className="w-6 h-6 p-1 bg-orange-500 flex items-center justify-center rounded-full">
          <BoltIcon className="w-5 h-5 text-white" />
        </div>
        <span className="text-orange-500 text-sm font-medium">Upgrade</span>
      </button>
    </nav>
  );
};

export default VerticalSidebar;
