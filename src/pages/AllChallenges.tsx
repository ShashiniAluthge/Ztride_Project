import SideNavBar from "../components/SideNavBar";
import TopNavBar from "../components/TopBar";
import PlusIcon from "../assets/plusIcon.png";
import ExportCSV from "../components/challenges/ExportCSV";
import SearchBar from "../components/challenges/SearchBar";
import ChallengesTable from "../components/challenges/ChallengesTable";
import BottomNavBoxes from "../components/challenges/BottomNavBoxes";
import { allChallengesTableData } from "../components/challenges/allChallengesTableData";

const AllChallenges = () => {
  return (
    <div className="flex w-full bg-[var(--screenbg)]">
      <div className="h-full fixed top-0 left-0">
        <SideNavBar />
      </div>
      <div className="flex flex-col flex-1 ml-[269px] mr-[32px]">
        <div className="w-full h-[101px] bg-[var(--background)]">
          <TopNavBar />
        </div>
        <div>
          <p className="text-[24px] text-[var(--primary)] font-medium">
            Challenges
          </p>
          <div className="flex  justify-between items-center mt-[8px]">
            <div className="flex gap-[8px] w-full  items-center mb-4">
              <div className="bg-[var(--btnBackground)] h-[44px] text-[16px] flex items-center justify-between pl-[16px] p-[7px] rounded-[50px] gap-[8px]">
                <p>Start a New Challenge</p>
                <img src={PlusIcon} alt="Add New Challenge" />
              </div>
              <ExportCSV />
            </div>
            <div className="flex justify-end w-full ">
              <SearchBar />
            </div>
          </div>

          <div className="mt-[8px]">
            <p className="flex flex-row text-[12px]">
              Challenges:
              <p className="text-[var(--primary)] font-bold  mr-[2px]"> All </p>
              (1,280) |
              <p className="text-[var(--activeText)] mx-[2px]">Ongoing</p>{" "}
              (1105) |
              <p className="text-[var(--activeText)] mx-[2px]">Disable </p>{" "}
              (175) |<p className="text-[var(--activeText)] mx-[2px]">Trash </p>{" "}
              (28)
            </p>
          </div>

          <ChallengesTable tableDataList={allChallengesTableData} />
          <BottomNavBoxes />
        </div>
      </div>
    </div>
  );
};

export default AllChallenges;
