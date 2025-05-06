import { Breadcrumb, BreadcrumbItem } from "../../components/ui/breadcrumb";
import NotificationContent from "./LocalComponents/NotificationContent";
import { Slash } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const index = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white border shadow-md rounded-md">
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
              <Link to="" className="text-dark-70 text-sm">
                All Notifications
              </Link>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
      </div>
      <div className="flex justify-between p-3">
        <p className="text-xl text-dark-100 font-semibold py-2">All Notifications</p>
        <p className="text-sm text-primaryOrange-100 font-semibold">
          Mark all as read
        </p>
      </div>
      <div className="">
        <NotificationContent />
      </div>
    </div>
  );
};

export default index;
