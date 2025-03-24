import SideNavBar from "../components/SideNavBar";
import TopNavBar from "../components/TopBar";
import AdditionalSettings from "../components/editChallenges/AdditionalSettings";
import OrganizationDetails from "../components/editChallenges/OrganizationDetails";
import ChallengeStatus from "../components/editChallenges/ChallengeStatus";
import ScheduleDetails from "../components/editChallenges/ScheduleDetails";
import ChallengeDetails from "../components/editChallenges/ChallengeDetails";
import { allChallengesTableData } from "../components/challenges/allChallengesTableData";
import { useParams } from "react-router-dom";

const EditChallengeDetails = () => {
  const { Challengename } = useParams();
  const decodedChallengeName = Challengename
    ? decodeURIComponent(Challengename).replace(/^:/, "")
    : null;
  console.log("Decoded Challenge Name:", decodedChallengeName);

  const selectedChallenge = allChallengesTableData.find(
    (challenge) => challenge.ChallengeName === decodedChallengeName
  );

  console.log("Selected Challenge:", selectedChallenge);

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
            {selectedChallenge ? (
              <ChallengeDetails challengeData={[selectedChallenge]} />
            ) : (
              <p>Challenge not found</p>
            )}

            <AdditionalSettings />
          </div>
          <div className="flex flex-col w-1/2">
            {selectedChallenge ? (
              <>
              <ScheduleDetails challengeData={[selectedChallenge]} />
              <OrganizationDetails challengeData={[selectedChallenge]} />
              </>
            ) : (
              <p>Challenge not found</p>
            )}
            
            <ChallengeStatus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditChallengeDetails;
