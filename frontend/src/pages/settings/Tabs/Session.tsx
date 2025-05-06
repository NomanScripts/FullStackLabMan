import { CheckCircleIcon } from "@heroicons/react/24/outline";

const Session = () => {
  const sessions = [
    {
      device: "Windows 10 (Chrome)",
      ip: "192.168.1.1",
      time: "2023-10-15 14:30",
      status: "active",
    },
    {
      device: "MacOS (Safari)",
      ip: "192.168.1.2",
      time: "2023-10-14 09:15",
      status: "active",
    },
    {
      device: "Android (Firefox)",
      ip: "192.168.1.3",
      time: "2023-10-13 18:45",
    },
  ];

  return (
    <div className="">
      <div className="flex flex-col mt-12">
        <div className="overflow-x-auto rounded-md">
          <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-md">
            <thead className="bg-white">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-semibold text-dark-100 "
                >
                  Device Type
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-semibold text-dark-100 "
                >
                  IP Address
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-semibold text-dark-100 "
                >
                  Time
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-semibold text-dark-100 "
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-semibold text-dark-100 "
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {sessions.map((session, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-dark-70">
                    {session.device}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-dark-70">
                    {session.ip}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-dark-70">
                    {session.time}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-dark-70">
                    <div className="flex items-center">
                      {session.status === "active" && (
                        <CheckCircleIcon className="h-5 w-5 text-green-500" />
                      )}
                      <span className="ml-2">{session.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {session.status === "active" && (
                      <button className="bg-white border border-gray-300 text-primaryOrange-100 px-4 py-1 rounded-md hover:bg-gray-50 transition-colors">
                        Terminate
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Session;
