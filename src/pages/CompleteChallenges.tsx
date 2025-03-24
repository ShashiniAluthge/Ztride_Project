import ChallengesTable from "../components/challenges/ChallengesTable";
import BottomNavBoxes from "../components/challenges/BottomNavBoxes";
import { allChallengesTableData } from "../components/challenges/allChallengesTableData";
import ChallengesListLayout from "../components/challenges/ChallengesListLayout";

const CompleteChallenges = () => {
  return (
    <>
      <ChallengesListLayout listType="Complete Challenges">
        <ChallengesTable
          tableDataList={allChallengesTableData}
          forcesStatus="Completed"
        />
        <BottomNavBoxes />
      </ChallengesListLayout>
    </>
  );
};

export default CompleteChallenges;
