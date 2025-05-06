import { DatePicker } from "../../components/DatePicker";
import LabCard from "../../components/LabCard";
import Filters from "./LocalComponents/Filters";
import Sort from "./LocalComponents/Sort";
import {
  MagnifyingGlassIcon,
  FunnelIcon,
} from "@heroicons/react/24/outline";
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
    title: "ByteNest",
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
    difficulty: "Beginner",
    category: "Web Development",
    description: "This is a description",
    xp: 100,
  },
];
const Labs = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-4 px-4 py-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold">Labs</h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <MagnifyingGlassIcon className="w-4 h-4" />
          </div>
          <div className="flex items-center gap-2">
            <Sort />
          </div>
          <Filters>
            <button
              className="flex items-center gap-2 border border-dark-100 rounded-md px-3 py-2"
            >
              <FunnelIcon className="w-4 h-4" />
              <span className="text-dark-100 text-sm hidden lg:block">
                Filters
              </span>
            </button>
          </Filters>
          <div>
            <DatePicker />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {labs.map((lab) => (
          <LabCard
            key={lab.title}
            title={lab.title}
            difficulty={lab.difficulty}
            category={lab.category}
            description={lab.description}
            xp={lab.xp}
            onClick={() => navigate(`/attemptlab/${lab.title}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default Labs;
