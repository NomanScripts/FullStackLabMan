import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import VerticalSidebar from "../components/VerticalSidebar";
import { isAuthenticated } from "../pages/auth/AuthService";

interface LayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: LayoutProps) {
  return isAuthenticated() ? (
    <div className="flex h-full lg:h-screen">
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex items-center lg:block">
          <div className="lg:hidden my-8">
            <Sidebar />
          </div>
          <Topbar />
        </div>
        <main className="flex-1 overflow-y-auto lg:pb-0 pb-20">{children}</main>
        <div className="lg:hidden ">
          <VerticalSidebar />
        </div>
      </div>
    </div>
  ) : (
    <>{children}</>
  );
}
