import SideNavBar from "../components/SideNavBar";
import TopNavBar from "../components/TopNavBar";

const Dashboard = () => {
  return (
    <div className="flex h-screen w-full">
      <div className="w-[235px] bg-blue-500 h-full fixed top-0 left-0">
        <SideNavBar />
      </div>
      <div className="flex flex-col flex-1 ml-[269px] mr-[32px]">
        <div className="w-full h-[101px] bg-[var(--background)]">
          <TopNavBar />
        </div>
        <div className="flex-1 bg-black text-[var(--primary)]">
          <h1>content</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
