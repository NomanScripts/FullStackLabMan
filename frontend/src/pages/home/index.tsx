import { LabCard } from "../../components/LabCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../../components/ui/carousel";
import CategoryCard from "./LocalComponents/CategoryCard";
import CompleteProfile from "./LocalComponents/CompleteProfile";
import RecentList from "../../components/RecentList";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const labs = [
  {
    title: "Chirper",
    difficulty: "Beginner",
    category: "Web Development",
    description: "This is a description",
    xp: 10,
  },
  {
    title: "Squaeler",
    difficulty: "Intermediate",
    category: "Cybersecurity",
    description: "Learn about network security",
    xp: 20,
  },
  {
    title: "ByteNest",
    difficulty: "Pro",
    category: "Cloud Computing",
    description: "AWS infrastructure setup",
    xp: 30,
  },
  {
    title: "IS-101",
    difficulty: "Intermediate",
    category: "Web Development",
    description: "This is a description",
    xp: 10,
  },
  {
    title: "IS-102",
    difficulty: "Pro",
    category: "Web Development",
    description: "This is a description",
    xp: 10,
  },
  {
    title: "SQL-101",
    difficulty: "Pro",
    category: "Web Development",
    description: "This is a description",
    xp: 10,
  },
  {
    title: "IS-103",
    difficulty: "Pro",
    category: "Web Development",
    description: "This is a description",
    xp: 10,
  },
];

const categories = [
  {
    title: "Web Development",
    totalLabs: 10,
  },
  {
    title: "Cybersecurity",
    totalLabs: 10,
  },
  {
    title: "Cloud Computing",
    totalLabs: 10,
  },
  {
    title: "Data Science",
    totalLabs: 10,
  },
  {
    title: "AI",
    totalLabs: 10,
  },
  {
    title: "Blockchain",
    totalLabs: 10,
  },
  {
    title: "DevOps",
    totalLabs: 10,
  },
  {
    title: "Cybersecurity",
    totalLabs: 10,
  },
];
const recentActivity = [
  {
    username: "phambaochau01_12",
    time: "2m ago",
    type: "Started",
    title: "Chirper",
  },
  {
    username: "phambaochau01_12",
    time: "12m ago",
    type: "Started",
    title: "Chirper",
  },
  {
    username: "phambaochau01_12",
    time: "52m ago",
    type: "Started",
    title: "Chirper",
  },
  {
    username: "phambaochau01_12",
    time: "1h ago",
    type: "Started",
    title: "Chirper",
  },
];
export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4">
      <div>
        <CompleteProfile />
      </div>
      <div className="bg-white lg:rounded-lg shadow-md relative max-w-[450px] md:max-w-[800px] lg:max-w-[1250px] border mx-auto lg:mx-0 p-4">
        <h1 className="text-lg font-bold mb-4">
          Recommended labs for you to get started
        </h1>
        <Carousel
          opts={{
            align: "start",
            slidesToScroll: "auto",
          }}
        >
          <div className="absolute -right-1 z-10 flex gap-2 -top-12 hidden lg:flex md:flex">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
          <CarouselContent className="-ml-2 ">
            {labs.map((lab, index) => (
              <CarouselItem
                key={index}
                className="basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/3 pl-2 "
              >
                <LabCard
                  title={lab.title}
                  difficulty={lab.difficulty}
                  category={lab.category}
                  description={lab.description}
                  xp={lab.xp}
                  
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 w-full  lg:ps-0 lg:pe-4 lg:py-4  mx-auto">
        <div className="w-full lg:w-[70%] bg-white p-4 lg:rounded-lg shadow-md border">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-bold mb-4">
              Browse labs by categories
            </h1>
            <div className="flex gap-2">
              <button
                className="text-primaryOrange-100 font-bold text-sm"
                onClick={() => navigate("/categories")}
              >
                View All
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 ">
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
        <div className="w-full lg:w-[30%] bg-white p-4 rounded-lg shadow-md border">
          <h1 className="text-lg font-bold mb-4">Recent Activity</h1>
          <div className="flex flex-col gap-4">
            {recentActivity.map((activity, index) => (
              <RecentList
                key={index}
                username={activity.username}
                time={activity.time}
                type={activity.type}
                title={activity.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
