import DoubleArrowIcon from "../../assets/doubleArrowIcon.png";

const tableDetails = [
  {
    organizationName: "FitPro Club",
    members: "150",
    challengesJoined: "5",
    stepsCompleted: "1,500,000",
    startDate: "15/03/2025",
    status: "Active",
  },
  {
    organizationName: "Wellness Warriors",
    members: "80",
    challengesJoined: "3",
    stepsCompleted: "900,000",
    startDate: "09/03/2025",
    status: "Active",
  },
  {
    organizationName: "Healthy Hustlers",
    members: "45",
    challengesJoined: "7",
    stepsCompleted: "450,000",
    startDate: "26/02/2025",
    status: "Inactive",
  },
  {
    organizationName: "Step Titans",
    members: "120",
    challengesJoined: "2",
    stepsCompleted: "1,200,000",
    startDate: "20/02/2025",
    status: "Active",
  },
  {
    organizationName: "Corporate Climbers",
    members: "110",
    challengesJoined: "4",
    stepsCompleted: "600,000",
    startDate: "14/02/2025",
    status: "Active",
  },
  {
    organizationName: "Energetic Striders",
    members: "70",
    challengesJoined: "9",
    stepsCompleted: "1,400,000",
    startDate: "10/02/2025",
    status: "Inactive",
  },
];

const LatestOrganizationsList = () => {
  return (
    <div className="mt-[27px]  border-1 border-[#F9F8F8] rounded-[20px] w-2/3">
      <div className="ml-[24px] m-[8px]">
        <div className="flex flex-row items-center justify-between">
          <div>
            <p className="text-[13px] text-[var(--subText)]">Latest</p>
            <p className="text-[16px] font-medium text-[var(--primary)]">
              Organizations
            </p>
          </div>
          <img src={DoubleArrowIcon} alt="Expand" />
        </div>
        <div className="overflow-auto mt-[11px] mr-[24px] pb-[24px]">
          <table className="w-full text-left ">
            <thead>
              <tr className="bg-[#FBFBFB] text-[var(--primary)] h-[50px] text-[13px] items-center border border-[#F9F8F8]">
                <th className="py-2 px-3 font-light">Organization Name</th>
                <th className="py-2 px-3 font-light">Members</th>
                <th className="py-2 px-3 font-light">Challenges Joined</th>
                <th className="py-2 px-3 font-light">Steps Completed</th>
                <th className="py-2 px-2 font-light">Start Date</th>
                <th className="py-2 px-3 font-light">Status</th>
              </tr>
            </thead>
            <tbody>
              {tableDetails.map((tableData, index) => (
                <tr
                  key={index}
                  className="border-[#F9F8F8] text-[var(--subText)] text-[12px] h-[30px]"
                >
                  <td className="py-2 px-3">{tableData.organizationName}</td>
                  <td className="py-2 px-3">{tableData.members}</td>
                  <td className="py-2 px-3">{tableData.challengesJoined}</td>
                  <td className="py-2 px-3">{tableData.stepsCompleted}</td>
                  <td className="py-2 px-3">{tableData.startDate}</td>
                  <td
                    className={`py-2 px-3 ${
                      tableData.status === "Active"
                        ? "text-[var(--activeText)]"
                        : "text-[var(--inactiveText)]"
                    }`}
                  >
                    {tableData.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LatestOrganizationsList;
