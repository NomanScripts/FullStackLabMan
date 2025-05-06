import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import profileImage from "../assets/images/profile.png";

interface RecentListProps {
  username: string;
  time: string;
  type: string;
  title: string;
}
const RecentList = ({ username, time, type, title }: RecentListProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            src={profileImage}
            alt="recent-list"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-dark-100 text-xs">{username}</h1>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-dark-70 rounded-full"></div>
                <p className="text-sm text-dark-70">{time}</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-dark-100 text-sm">{type}</p>
              <p className="text-dark-100 text-sm">{title}</p>
            </div>
          </div>
        </div>
        <div>
          <button className="text-sm text-gray-500">
            <EllipsisHorizontalIcon className="w-7 h-7" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentList;
