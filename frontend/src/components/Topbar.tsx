import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import NotificationContent from "../pages/Notification/LocalComponents/NotificationContent";
import { logout } from "../pages/auth/AuthService";
import Settings from "../pages/settings/index";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import shortcutkey from "../assets/images/shortcutkey.png"
import {
  BellIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  QuestionMarkCircleIcon,
  UserIcon,
  MagnifyingGlassIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { LogOutIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const Topbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
  const navigate = useNavigate();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setIsSearchOpen(e.target.value.length > 0);
  };

  return (
    <header className="flex justify-between py-4 xs:ml-16 lg:pr-4">
      <div className="relative lg:block hidden">
        <div className="flex items-center">
          <div className="absolute left-2 bottom-2.5">
            <MagnifyingGlassIcon className="w-5 h-5 text-dark-100/40 cursor-pointer" />
          </div>
          <div className="absolute right-2 bottom-2.5">
            <img src={shortcutkey} alt="shortcutkey" className="w-8 h-5 " />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2.5 rounded-md focus:ring-2 focus:ring-primary-100 bg-white shadow-md text-sm w-[340px]"
            value={searchQuery}
            onChange={handleSearchChange}
            onFocus={() => setIsSearchOpen(true)}
          />
          {isSearchOpen && (
            <div 
              className="absolute top-full mt-2 w-full bg-white p-3 shadow-lg rounded-md z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-sm text-gray-500">Recent searches</p>
              <div className="mt-2">
                <div className="flex items-center gap-2 py-2 hover:bg-gray-100 cursor-pointer">
                  <ClockIcon className="w-4 h-4 text-gray-500" />
                  React Labs
                </div>
                <div className="flex items-center gap-2 py-2 hover:bg-gray-100 cursor-pointer">
                  <ClockIcon className="w-4 h-4 text-gray-500" />
                  JavaScript Basics
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex space-x-6 xs:space-x-2.5 items-center fixed right-0 pr-4 bg-white py-2 z-10 top-0">
        <div className="block lg:hidden items-center flex">
          <div onClick={() => setIsSearchOpen(!isSearchOpen)}>
            <MagnifyingGlassIcon className="w-6 h-6 text-dark-100 cursor-pointer" />
          </div>
          {isSearchOpen && (
            <div 
              className="absolute top-full left-0 right-0 bg-white p-3 shadow-lg z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-2 mb-4">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full px-3 py-2 rounded-md focus:outline-none border border-primaryOrange-100"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </div>
              <p className="text-sm text-gray-500">Recent searches</p>
              <div className="mt-2">
                <div className="flex items-center gap-2 py-2 hover:bg-gray-100 cursor-pointer">
                  <ClockIcon className="w-4 h-4 text-gray-500" />
                  React Labs
                </div>
                <div className="flex items-center gap-2 py-2 hover:bg-gray-100 cursor-pointer">
                  <ClockIcon className="w-4 h-4 text-gray-500" />
                  JavaScript Basics
                </div>
              </div>
            </div>
          )}
        </div>
        <Dialog>
          <DialogTrigger>
            <Cog6ToothIcon className="w-6 h-6 text-dark-100 cursor-pointer" />
          </DialogTrigger>
          <DialogContent className="bg-white lg:max-w-[90vw] w-full lg:w-auto max-h-[90vh] overflow-y-auto p-0">
            <div className="flex flex-col gap-4">
              <p className="text-2xl font-semibold text-dark-100 p-4">Settings</p>
              <Settings />
            </div>
          </DialogContent>
        </Dialog>
        <QuestionMarkCircleIcon className="w-6 h-6 text-dark-100 cursor-pointer " />

        <DropdownMenu>
          <DropdownMenuTrigger>
            <BellIcon className="w-6 h-6 text-dark-100 cursor-pointer " />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white p-0 m-0 rounded-none">
            <DropdownMenuItem className="max-w-md p-0 m-0">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between p-3">
                  <p className="text-xl text-dark-100 font-semibold">
                    Notifications
                  </p>
                  <p className="text-sm text-primaryOrange-100 font-semibold">
                    Mark all as read
                  </p>
                </div>
                <NotificationContent limit={5} />
                <div className="flex items-center justify-center p-3">
                  <p
                    className="text-sm text-primaryOrange-100 font-semibold cursor-pointer"
                    onClick={() => navigate("/Notification")}
                  >
                    View All
                  </p>
                </div>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Avatar>
          <AvatarFallback>
            <div className="w-10 h-10 bg-primaryGreen-10 rounded-full flex items-center justify-center">
              <p className="text-primaryGreen-100 font-semibold">
                {currentUser?.firstName?.charAt(0).toUpperCase()}{currentUser?.lastName?.charAt(0).toUpperCase()}
              </p>
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

                <div className="flex items-center justify-between p-3 gap-3 cursor-pointer hover:bg-gray-200 rounded-md"
                onClick={() => navigate("/upgrade")}
                >
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
