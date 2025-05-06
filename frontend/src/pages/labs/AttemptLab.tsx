import RecentList from "../../components/RecentList";
import Details from "./LocalComponents/Details";
import Questions from "./LocalComponents/Questions";
import ReferenceNotes from "./LocalComponents/ReferenceNotes";

const recentActivity = [
  {
    username: "John Doe",
    time: "10 seconds ago",
    type: "completed",
    title: "Lab 1",
  },
  {
    username: "John Doe",
    time: "15 minutes ago",
    type: "completed",
    title: "Lab 1",
  },
  {
    username: "John Doe",
    time: "19 hours ago",
    type: "completed",
    title: "Lab 1",
  },
];

const AttemptLab = () => {
  return (
    <div className="flex flex-col gap-5">
      <Details />
      <div className="flex flex-col gap-2 w-full lg:flex-row">
        <div className="flex flex-col gap-2 w-full lg:w-[70%]">
          <Questions />
        </div>
      <div className="flex flex-col gap-2 w-full lg:w-[30%]">
        <ReferenceNotes />
        <div className="flex flex-col gap-2 bg-white lg:rounded-lg p-4 shadow-md border border-gray-200">
          <h1 className="text-dark-100 text-lg font-semibold">
            Recent Activity on this Lab
          </h1>
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

export default AttemptLab;
