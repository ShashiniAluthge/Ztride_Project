import ChallengesTable from "../components/challenges/challengesTable";
import BottomNavBoxes from "../components/challenges/BottomNavBoxes";
import { allChallengesTableData } from "../components/challenges/AllChallengesTableData";
import ChallengesListLayout from "../components/challenges/ChallengesListLayout";

const CompleteChallenges = () => {
  return (
    <>
      <ChallengesListLayout listType="Disable Challenges">
        <ChallengesTable
          tableDataList={allChallengesTableData}
          forcesStatus="Inactive"
        />
        <BottomNavBoxes />
      </ChallengesListLayout>
    </>
  );
};

export default CompleteChallenges;
