import LabCard from "../../components/LabCard";
import { Breadcrumb, BreadcrumbItem } from "../../components/ui/breadcrumb";
import { Slash } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const labs = [
  {
    title: "Squealer",
    difficulty: "Beginner",
    category: "Web Development",
    description: "This is a description",
    xp: 100,
  },
  {
    title: "Chirper II",
    difficulty: "Intermediate",
    category: "Web Development",
    description: "This is a description",
    xp: 100,
  },
  {
    title: "Chirper III",
    difficulty: "Intermediate",
    category: "Web Development",
    description: "This is a description",
    xp: 100,
  },
  {
    title: "Chirper IV",
    difficulty: "Pro",
    category: "Web Development",
    description: "This is a description",
    xp: 100,
  },
  {
    title: "Chirper V",
    difficulty: "Pro",
    category: "Web Development",
    description: "This is a description",
    xp: 100,
  },
  {
    title: "Chirper VI",
    difficulty: "Pro",
    category: "Web Development",
    description: "This is a description",
    xp: 100,
  },
];
const LabsList = () => {
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
            onClick={() => navigate("/categories")}
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
          <BreadcrumbItem>
            <Slash className="size-3 text-gray-500" />
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/labslist" className="text-dark-70 text-xs">
              List
            </Link>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-bold">Labs List</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {labs.map((lab, index) => (
            <LabCard
              key={index}
              title={lab.title}
              difficulty={lab.difficulty}
              category={lab.category}
              description={lab.description}
              xp={lab.xp}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LabsList;
