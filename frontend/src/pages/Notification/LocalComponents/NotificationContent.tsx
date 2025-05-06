import profile from "../../../assets/images/profile.png";

interface Notification {
  id: number;
  message: string;
  timestamp: string;
  unread: boolean;
}
const notifications: Notification[] = [
  {
    id: 1,
    message:
      "Lab related notification lorem ipsum Ut eminim veniam, quis nostrud exercitatio.",
    timestamp: "12:00 PM",
    unread: true,
  },
  {
    id: 2,
    message:
      "User related notification lorem ipsum Ut eminim veniam, quis nostrud exercitatio",
    timestamp: "1:30 PM",
    unread: false,
  },
  {
    id: 3,
    message:
      "User related notification lorem ipsum Ut eminim veniam, quis nostrud exercitatio",
    timestamp: "3:45 PM",
    unread: true,
  },
  {
    id: 4,
    message:
      "User related notification lorem ipsum Ut eminim veniam, quis nostrud exercitatio",
    timestamp: "3:45 PM",
    unread: true,
  },
  {
    id: 5,
    message:
      "User related notification lorem ipsum Ut eminim veniam, quis nostrud exercitatio",
    timestamp: "3:45 PM",
    unread: false,
  },
  {
    id: 6,
    message:
      "User related notification lorem ipsum Ut eminim veniam, quis nostrud exercitatio",
    timestamp: "3:45 PM",
    unread: true,
  },
  {
    id: 7,
    message:
      "User related notification lorem ipsum Ut eminim veniam, quis nostrud exercitatio",
    timestamp: "3:45 PM",
    unread:false,
  },
];

interface NotificationContentProps {
  limit?: number;
}

const NotificationContent = ({ limit }: NotificationContentProps) => {
  const displayedNotifications = limit ? notifications.slice(0, limit) : notifications;

  return (
    <div className="flex flex-col">
      {displayedNotifications.map((notification) => (
        <div
          key={notification.id}
          className={`flex gap-2 p-2 border-b border-dark-100/10 ${
            notification.unread ? "bg-gray-100 " : ""
          }`}
        >
          <div className="flex">
            <img
              src={profile}
              alt="notification"
              className="w-8 h-8 rounded-full"
            />
          </div>
          <div className="flex flex-col text-sm text-dark-100 max-w-80">
            {notification.message}
            <p className="text-sm text-dark-70 text-xs mt-1">{notification.timestamp}</p>
          </div>
          <div className="flex">
            {notification.unread && (
              <div className="h-2 w-2 rounded-full bg-primaryOrange-100"></div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotificationContent;
