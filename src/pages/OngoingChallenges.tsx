import ChallengesTable from "../components/challenges/challengesTable";
import BottomNavBoxes from "../components/challenges/BottomNavBoxes";
import { allChallengesTableData } from "../components/challenges/AllChallengesTableData";
import ChallengesListLayout from "../components/challenges/ChallengesListLayout";

const CompleteChallenges = () => {
  return (
    <>
      <ChallengesListLayout listType="Ongoing Challenges">
        <ChallengesTable
          tableDataList={allChallengesTableData}
          forcesStatus="Active"
        />
        <BottomNavBoxes />
      </ChallengesListLayout>
    </>
  );
};

export default CompleteChallenges;
