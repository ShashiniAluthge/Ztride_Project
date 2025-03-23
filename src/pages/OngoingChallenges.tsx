import SideNavBar from "../components/SideNavBar";
import TopNavBar from "../components/TopBar";
import ExportCSV from "../components/challenges/ExportCSV";
import SearchBar from "../components/challenges/SearchBar";
import ChallengesTable from "../components/challenges/challengesTable";
import BottomNavBoxes from "../components/challenges/BottomNavBoxes";
import { allChallengesTableData } from "../components/challenges/AllChallengesTableData";

const OngoingChallenges = () => {
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
            Ongoing Challenges
          </p>
          <div className="flex flex-row justify between  mt-[8px]">
            <div className="flex flex-row gap-[8px] w-1/2">
              <ExportCSV />
            </div>
            <div className="flex justify-end w-full">
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

          <ChallengesTable tableDataList={allChallengesTableData} forcesStatus="Active"/>
          <BottomNavBoxes />
        </div>
      </div>
    </div>
  );
};

export default OngoingChallenges;
