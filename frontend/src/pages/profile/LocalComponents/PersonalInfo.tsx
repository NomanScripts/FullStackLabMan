import advancedbadge from "../../../assets/images/advance-badge.png";
import beginnerbadge from "../../../assets/images/beginner-badge.png";
import newbieGreen from "../../../assets/images/newbie-green.png";
import pattern from "../../../assets/images/pattern.png";
import probadge from "../../../assets/images/pro-badge.png";
import { Breadcrumb, BreadcrumbItem } from "../../../components/ui/breadcrumb";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "../../../components/ui/dialog";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  SlackIcon,
  Slash,
  TwitterIcon,
} from "lucide-react";
import { FacebookIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const index = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
  const navigate = useNavigate();
  return (
    <div className="flex bg-white  w-full border border-gray-200 rounded-lg pb-6">
      <div className="flex flex-col gap-5">
        <div className="flex gap-3 items-center px-4 pt-4">
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
          <div className="flex items-center">
            <Breadcrumb>
              <BreadcrumbItem className="flex items-center gap-1">
                <Link to="/dashboard" className="text-dark-70 text-sm">
                  Home
                </Link>
                <Slash className="size-3 text-gray-500" />
                <Link to="/profile" className="text-dark-70 text-sm">
                  Profile
                </Link>
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <img src={pattern} alt="pattern" className="" />
        </div>
        <div className="flex flex-col text-center">
          <p className="text-2xl font-semibold text-dark-100">
            {currentUser.firstName + " " + currentUser.lastName}
          </p>
          <p className="text-sm text-dark-70">{currentUser.email}</p>
        </div>
        <div className="flex gap-2 justify-center">
          <button className="bg-primaryOrange-100 text-white px-6 py-1.5 rounded-md">
            + Follow
          </button>
          <button className="border border-gray-200 text-white px-1 rounded-md">
            <EllipsisHorizontalIcon className="w-8 h-8 text-primaryOrange-100" />
          </button>
        </div>
        <div className="text-center">
          <p className="text-sm text-dark-100 max-w-80 mx-auto">
            I get paid to break into things and then tell people how I did it.
            It's like a locksmith, but with a ski mask and a laptop.
          </p>
        </div>
        <div className="flex gap-36 justify-center items-center">
          <div className="flex gap-2 items-center">
            <img src={newbieGreen} alt="newbie-green" className="w-10 h-10" />
            <p className="text-sm text-dark-100">
              <span className="font-semibold">Newbie</span>
            </p>
          </div>
          <Dialog>
            <DialogTrigger>
              <p className="text-sm text-primaryOrange-100">
                <span className="font-semibold">View All Levels</span>
              </p>
            </DialogTrigger>
            <DialogContent className="bg-white">
              <div className="flex flex-col gap-2 text-center">
                <p className="text-lg text-dark-100">
                  <span className="font-semibold">All Levels</span>
                </p>
                <p className="text-sm text-dark-70 max-w-96 mx-auto">
                  <span className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et.
                  </span>
                </p>
              </div>
              <div className="bg-gray-200 h-px my-3"></div>
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <div className="flex  gap-4">
                    <div className="flex flex-col gap-2">
                      <img
                        src={newbieGreen}
                        alt="newbie-green"
                        className="w-10 h-10"
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm text-dark-100">
                        <span className="font-semibold">Newbie</span>
                      </p>
                      <p className="text-sm text-dark-70">0-1,000 XP</p>
                    </div>
                  </div>
                  <div className="w-0.5 h-8 bg-primaryGreen-100 ml-5"></div>
                  <div className="flex justify-between gap-2">
                    <div className="flex flex-col gap-2">
                      <img
                        src={beginnerbadge}
                        alt="beginner-badge"
                        className="w-10 h-10"
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm text-dark-100">
                        <span className="font-semibold">Beginner</span>
                      </p>
                      <p className="text-sm text-dark-70">1,001 - 2,000 XP</p>
                    </div>
                  </div>
                  <div className="w-0.5 h-8 bg-gray-200 ml-5"></div>
                  <div className="flex justify-between gap-4">
                    <div className="flex flex-col">
                      <img
                        src={advancedbadge}
                        alt="advanced-badge"
                        className="w-10 h-10"
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm text-dark-100">
                        <span className="font-semibold">Advanced</span>
                      </p>
                      <p className="text-sm text-dark-70">2,001 - 3,000 XP</p>
                    </div>
                  </div>
                  <div className="w-0.5 h-8 bg-gray-200 ml-5"></div>
                  <div className="flex gap-4">
                    <div className="flex flex-col gap-2">
                      <img
                        src={probadge}
                        alt="pro-badge"
                        className="w-10 h-10"
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm text-dark-100">
                        <span className="font-semibold">Pro</span>
                      </p>
                      <p className="text-sm text-dark-70">3,000+ XP</p>
                    </div>
                  </div>
                </div>
                <div className="flex px-2 py-1 h-fit bg-primaryOrange-10 rounded-md">
                  <p className="text-xs font-semibold text-primaryOrange-100">
                    Current Level
                  </p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <div className="flex flex-col gap-2 px-6 py-2">
          <div className="flex justify-between">
            <span className="text-sm text-dark-70">Followers</span>
            <span className="text-sm font-semibold text-dark-100">82</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-dark-70">Following</span>
            <span className="text-sm font-semibold text-dark-100">120</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-dark-70">Labs Finished</span>
            <span className="text-sm font-semibold text-dark-100">12</span>
          </div>
        </div>
        <div className="px-6">
          <p className="text-sm text-dark-70">On the Web</p>
        </div>
        <div className="px-6 flex gap-4">
          <div className="w-8 h-8 bg-primaryGreen-20 rounded-full flex items-center justify-center">
            <TwitterIcon className="w-4 h-4 text-primaryGreen-100" />
          </div>
          <div className="w-8 h-8 bg-primaryGreen-20 rounded-full flex items-center justify-center">
            <GithubIcon className="w-4 h-4 text-primaryGreen-100" />
          </div>
          <div className="w-8 h-8 bg-primaryGreen-20 rounded-full flex items-center justify-center">
            <FacebookIcon className="w-4 h-4 text-primaryGreen-100" />
          </div>
          <div className="w-8 h-8 bg-primaryGreen-20 rounded-full flex items-center justify-center">
            <LinkedinIcon className="w-4 h-4 text-primaryGreen-100" />
          </div>
          <div className="w-8 h-8 bg-primaryGreen-20 rounded-full flex items-center justify-center">
            <InstagramIcon className="w-4 h-4 text-primaryGreen-100" />
          </div>
          <div className="w-8 h-8 bg-primaryGreen-20 rounded-full flex items-center justify-center">
            <SlackIcon className="w-4 h-4 text-primaryGreen-100" />
          </div>
        </div>
        <div className="px-6 pt-12 text-center">
          <p className="text-sm text-dark-70">Member since May 10, 2023</p>
        </div>
      </div>
    </div>
  );
};

export default index;
