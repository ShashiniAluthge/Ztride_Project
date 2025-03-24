import SideNavBar from "../components/SideNavBar";
import TopNavBar from "../components/TopBar";

import ScheduleDetails from "../components/editChallenges/scheduleDetails";
import ChallengeDetails from "../components/editChallenges/challengeDetails";
import AdditionalSettings from "../components/editChallenges/AdditionalSettings";
import OrganizationDetails from "../components/editChallenges/OrganizationDetails";
import ChallengeStatus from "../components/editChallenges/ChallengeStatus";

const EditChallengeDetails = () => {
  return (
    <div className="flex w-full bg-[var(--screenbg)]">
      <div className="h-full fixed top-0 left-0">
        <SideNavBar />
      </div>
      <div className="flex flex-col flex-1 ml-[269px] mr-[32px]">
        <div className="w-full h-[101px] bg-[var(--background)]">
          <TopNavBar />
        </div>
        <p className="text-[24px] text-[var(--primary)] font-medium">
          Edit Challenges
        </p>
        <div className="bg-[var(--background)] border-1 border-[#F9F8F8] shadow-sm flex flex-row p-[17px] gap-[33px] mt-[8px] mb-[26px]">
          <div className="flex flex-col w-1/2">
            <ChallengeDetails />
            <AdditionalSettings/>
          </div>
          <div className="flex flex-col w-1/2">
            <ScheduleDetails />
            <OrganizationDetails/>
            <ChallengeStatus/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditChallengeDetails;
