import { Breadcrumb, BreadcrumbItem } from "../../components/ui/breadcrumb";
import CategoryCard from "./LocalComponents/CategoryCard";
import { Slash } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const categories = [
  {
    title: "Network Security",
    totalLabs: 10,
  },
  {
    title: "Malware Analysis",
    totalLabs: 10,
  },
  {
    title: "Penetration Testing",
    totalLabs: 10,
  },
  {
    title: "Cryptography Basics",
    totalLabs: 10,
  },
  {
    title: "Incident Response",
    totalLabs: 10,
  },
  {
    title: "Threat Hunting",
    totalLabs: 10,
  },
  {
    title: "Web Security",
    totalLabs: 10,
  },
  {
    title: "Secure Coding",
    totalLabs: 10,
  },
  {
    title: "Cloud Security",
    totalLabs: 10,
  },
  {
    title: "IoT Security",
    totalLabs: 10,
  },
  {
    title: "Data Protection",
    totalLabs: 10,
  },
  {
    title: "Vulnerability 101",
    totalLabs: 10,
  },
  {
    title: "Security Compliance",
    totalLabs: 10,
  },
  {
    title: "Social Engineering",
    totalLabs: 10,
  },
];
const Categories = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4 bg-white rounded-md px-4 py-2 shadow-md h-full">
      <div className="flex items-center gap-2">
        <div className="flex justify-between items-center">
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
        </div>
        <Breadcrumb className="flex items-center gap-2 bg-gray-100 rounded-md p-1 w-fit">
          <BreadcrumbItem>
            <Link to="/dashboard" className="text-dark-70 text-xs">
              Home
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Slash className="size-3 text-gray-500" />
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/categories" className="text-dark-70 text-xs">
              Labs Categories
            </Link>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="relative">
        <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-2.5 text-gray-500" />
        <input
          type="text"
          placeholder="Search category name"
          className="pl-10 pr-4 py-2 w-full rounded-md focus:ring-2 focus:ring-primary-100 border border-gray-300"
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Labs categories</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 ">
          {categories.map((category, index) => (
            <Link to="/labslist">
              <CategoryCard
                key={index}
                title={category.title}
                totalLabs={category.totalLabs}
            />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
