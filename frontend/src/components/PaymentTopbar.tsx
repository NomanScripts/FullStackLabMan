import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { logout } from "../pages/auth/AuthService";
import {
  ChevronDownIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { LogOutIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png"
const Topbar = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
  const navigate = useNavigate();

  return (
    <header className="flex justify-between py-4 xs:ml-16 lg:pr-4">
        <div>
            <img src={logo} alt="logo" className="w-36 h-6 ml-6" />
        </div>
      <div className="flex space-x-6 xs:space-x-2.5 items-center fixed right-0 pr-4 bg-white py-2 z-10 top-0">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>
            <div className="w-10 h-10 bg-primaryGreen-20 rounded-full flex items-center justify-center">
              <UserIcon className="w-6 h-6 text-primaryGreen-100 " />
            </div>
          </AvatarFallback>
        </Avatar>
        <div className="hidden lg:block">
          <p className="text-sm font-semibold text-dark-100">
            {currentUser?.firstName
              ? `${currentUser.firstName
                  .charAt(0)
                  .toUpperCase()}${currentUser.firstName.slice(1)} 
               ${currentUser.lastName
                 .charAt(0)
                 .toUpperCase()}${currentUser.lastName.slice(1)}`
              : "Guest User"}
          </p>
          <p className="text-xs text-dark-100">Newbie • 500 XP</p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <ChevronDownIcon className="w-4 h-4 text-dark-100" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-8 mt-4 rounded-lg bg-white">
            <DropdownMenuItem className="flex items-center p-0">
              <div className="flex flex-col w-full p-3">
                <div className="flex items-center gap-3 pb-3">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>
                      <div className="w-10 h-10 bg-primaryGreen-20 rounded-full flex items-center justify-center">
                        <UserIcon className="w-6 h-6 text-primaryGreen-100" />
                      </div>
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    {currentUser?.firstName
                      ? `${currentUser.firstName
                          .charAt(0)
                          .toUpperCase()}${currentUser.firstName.slice(1)} 
                       ${currentUser.lastName
                         .charAt(0)
                         .toUpperCase()}${currentUser.lastName.slice(1)}`
                      : "Guest User"}
                  </div>
                </div>

                <div className="py-3">
                  <div className="flex items-center justify-between py-3 bg-gray-100 rounded-lg px-6">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 bg-primaryGreen-100 rounded-full flex items-center justify-center">
                        <UserIcon className="w-4 h-4 text-white " />
                      </div>

                      <div className="flex flex-col ">
                        <p className="text-sm font-semibold text-dark-100">
                          Newbie
                        </p>
                        <p className="text-sm text-dark-100">Level</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-semantic-yellow rounded-full flex items-center justify-center">
                        <p className="text-sm text-white">XP</p>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-sm font-semibold text-dark-100">
                          1000
                        </p>
                        <p className="text-sm text-dark-100">XP</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 gap-3">
                  <p className="text-sm font-semibold text-dark-100">
                    Current Plan:Free
                  </p>

                  <p className="text-sm font-semibold text-primaryOrange-100">
                    Upgrade to Pro
                  </p>
                </div>

                <DropdownMenuSeparator className="bg-gray-200" />

                <div className="py-1 ">
                  <DropdownMenuItem className="rounded-md px-3 py-2 hover:bg-gray-200">
                    <div className="flex items-center gap-3">
                      <UserIcon className="w-4 h-4 text-dark-100" />
                      <p
                        className="text-sm  text-dark-100"
                        onClick={() => navigate("/profile")}
                      >
                        My Profile
                      </p>
                    </div>
                  </DropdownMenuItem>
                </div>

                <div className="border-t border-gray-200 mt-2 pt-3 ">
                  <div className="flex items-center gap-3 px-3 py-2 hover:bg-gray-200 rounded-md">
                    <LogOutIcon className="w-4 h-4 text-dark-100  " />
                    <button
                      onClick={() => {
                        logout();
                        navigate("/login");
                      }}
                      className="text-sm text-dark-100"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Topbar;
