import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import EditProfile from "./Tabs/EditProfile";
import Security from "./Tabs/Security";
import Session from "./Tabs/Session";
import Socials from "./Tabs/Socials";

const index = () => {
  return (
    <div className="flex justify-center ">
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="">
          <TabsTrigger
            value="account"
            className="text-sm bg-gray-100 rounded-none"
          >
            Edit Profile
          </TabsTrigger>
          <TabsTrigger
            value="password"
            className="text-sm bg-gray-100 rounded-none"
          >
            Socials
          </TabsTrigger>
          <TabsTrigger
            value="notifications"
            className="text-sm bg-gray-100 rounded-none"
          >
            Session Management
          </TabsTrigger>
          <TabsTrigger
            value="integrations"
            className="text-sm bg-gray-100 rounded-none"
          >
            Security
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <EditProfile />
        </TabsContent>
        <TabsContent value="password">
          <Socials />
        </TabsContent>
        <TabsContent value="notifications">
          <Session />
        </TabsContent>
        <TabsContent value="integrations">
          <Security />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default index;
