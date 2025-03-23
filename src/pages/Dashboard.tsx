import SideNavBar from "../components/SideNavBar";
import TopNavBar from "../components/TopBar";
import AyuboIcon from "../assets/ayuboicon.png";
import ArrowIcon from "../assets/arrowIcon.png";
import PlusIcon from "../assets/plusIcon.png";
import LatestOrganizationsList from "../components/dashboard/LatestOrganizationsList";
import NotificationCard from "../components/dashboard/NotificationCard";
import ChallengesCard from "../components/dashboard/ChallengesCard";
import DownloadsOverviewCard from "../components/dashboard/DownloadsOverviewCard";

const Dashboard = () => {
  return (
    <div className="flex w-full bg-[var(--background)]">
      <div className="w-[235px]  h-full fixed top-0 left-0">
        <SideNavBar />
      </div>
      <div className="flex flex-col flex-1 ml-[269px] mr-[32px]">
        <div className="w-full h-[101px] bg-[var(--background)]">
          <TopNavBar />
        </div>
        <div className="flex-1 ">
          <div className="flex items-center justify-between text-[var(--primary)]">
            <div className="text-[32px] font-medium flex flex-col">
              <div className="flex flex-row">
                <p>ayubo.life</p>
                <div className="w-[50px] h-[50px] rounded-full bg-[#F3FBFF] items-center justify-center flex ml-[8px]">
                  <img src={AyuboIcon} />
                </div>
              </div>
              <div className="flex flex-row">
                <p>Dashboard</p>
                <div className="w-[30px] h-[30px] rounded-full bg-[var(--primary)] items-center justify-center flex ml-[35px]">
                  <img src={ArrowIcon} />
                </div>
              </div>
            </div>

            <div className="bg-[var(--btnBackground)] h-[44px]  text-[16px] flex items-center justify-between  pl-[16px] p-[7px] rounded-[50px] gap-[8px]">
              <p>Start a New Challenge</p>
              <img src={PlusIcon} />
            </div>
          </div>
          <div className="flex flex-row gap-[22px]">
            <LatestOrganizationsList />
            <NotificationCard />
          </div>
          <div className="flex flex-row gap-[22px]">
            <ChallengesCard />
            <DownloadsOverviewCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
