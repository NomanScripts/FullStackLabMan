import { LabCard } from "../../components/LabCard";
import RecentList from "../../components/RecentList";
import {
  Carousel,
  CarouselItem,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import PersonalInfo from "./LocalComponents/PersonalInfo";

const recentActivity = [
 
   {
    username: "sharif01_12",
    time: "2m ago",
    type: "Started",
    title: "Chirper",
  },
  {
    username: "sharif01_12",
    time: "12m ago",
    type: "Started",
    title: "Chirper",
  },
  {
    username: "sharif01_12",
    time: "52m ago",
    type: "Started",
    title: "Chirper",
  },
  {
    username: "sharif01_12",
    time: "1h ago",
    type: "Started",
    title: "Chirper",
  },
  {
    username: "sharif01_12",
    time: "2m ago",
    type: "Started",
    title: "Chirper",
  },
  {
    username: "sharif01_12",
    time: "12m ago",
    type: "Started",
    title: "Chirper",
  },
  {
    username: "sharif01_12",
    time: "52m ago",
    type: "Started",
    title: "Chirper",
  },
 
];
const labs = [
  {
    title: "Chirper",
    difficulty: "Easy",
    category: "Web Development",
    description: "This is a description",
    xp: 10,
  },
  {
    title: "Spoofing",
    difficulty: "Medium",
    category: "Cybersecurity",
    description: "Learn about network security",
    xp: 20,
  },
  {
    title: "Squealer",
    difficulty: "Hard",
    category: "Cloud Computing",
    description: "AWS infrastructure setup",
    xp: 30,
  },
  {
    title: "ByteNest",
    difficulty: "Easy",
    category: "Web Development",
    description: "This is a description",
    xp: 10,
  },
  {
    title: "Chirper",
    difficulty: "Easy",
    category: "Web Development",
    description: "This is a description",
    xp: 10,
  },
  {
    title: "Spoofing",
    difficulty: "Easy",
    category: "Web Development",
    description: "This is a description",
    xp: 10,
  },
  {
    title: "Squealer",
    difficulty: "Easy",
    category: "Web Development",
    description: "This is a description",
    xp: 10,
  },
];
const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
const index = () => {
  return (
    <div className="flex md:flex-row lg:flex-row flex-col justify-between gap-5">
      <div className="flex flex-col  gap-5">
        <PersonalInfo />
      </div>
      <div className="flex flex-col gap-5">
        <div className="bg-white lg:rounded-lg shadow-md relative max-w-[450px] md:max-w-[800px] lg:max-w-[880px] border mx-auto lg:mx-0 p-4">
          <h1 className="text-lg font-bold mb-4">
            My Labs
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
                  className="basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/2 pl-2 "
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
        <div className="flex flex-col gap-5 bg-white lg:rounded-lg shadow-md relative max-w-[450px] md:max-w-[800px] lg:max-w-[1250px] border lg:mx-0 p-4">
          <h1 className="text-lg font-bold ">
            {currentUser.firstName + "'s"} Recent Activity
          </h1>
          {recentActivity.map((item) => (
            <RecentList
              key={item.username}
              username={item.username}
              time={item.time}
              type={item.type}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
