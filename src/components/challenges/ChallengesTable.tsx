import { useState } from "react";
import ImageIcon from "../../assets/Image.png";
import moreIcon from "../../assets/More.png";
import MoreIconDropdown from "./MoreIconDropdown";
import { useNavigate } from "react-router-dom";

export interface ChallengesData {
  image: string;
  ChallengeName: string;
  ChgID: string;
  Participants: number;
  Distance: string;
  StepsTarget: string;
  StartDate: string;
  StartTime: string;
  EndDate: string;
  Status: string;
}

interface ChallengesTableProp {
  tableDataList: ChallengesData[];
  forcesStatus?: string;
}
const ChallengesTable = ({
  tableDataList,
  forcesStatus,
}: ChallengesTableProp) => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );

  const [selectIcon, setSelectIcon] = useState<boolean>(false);

  const onclickDropdownIcon = (index: number) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  const navigate = useNavigate();

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left shadow-sm my-[16px] min-w-max">
        <thead>
          <tr className="bg-[var(--background)] text-[var(--primary)] h-[50px] text-[13px] items-center  border-[var(--background)] font-medium ">
            <th className="py-2 px-3 flex items-center justify-center">
              <img src={ImageIcon} />
            </th>
            <th className="py-2 px-3 font-light">Challenge Name</th>
            <th className="py-2 px-3 font-light">ChgID</th>
            <th className="py-2 px-3 font-light">Participants</th>
            <th className="py-2 px-3 font-light">Distance</th>
            <th className="py-2 px-2 font-light">Steps Target</th>
            <th className="py-2 px-3 font-light">Start Date</th>
            <th className="py-2 px-3 font-light">Start Time</th>
            <th className="py-2 px-3 font-light">End Date</th>
            <th className="py-2 px-3 font-light">Status</th>
            <th className="py-2 px-3 font-light"></th>
          </tr>
        </thead>
        <tbody>
          {tableDataList.map((tableData, index) => (
            <tr
              key={index}
              className={`border-[#F9F8F8] text-[var(--subText)] text-[12px] h-[30px]  items-center cursor-pointer ${
                index % 2 == 0
                  ? "bg-[var(--tablebg)]"
                  : "bg-[var(--background)]"
              }`}
              onClick={() => {
                if (openDropdownIndex !== index) {
                  window.scrollTo(0, 0);
                  navigate(
                    `/editChallenges/:${encodeURIComponent(
                      tableData.ChallengeName
                    )}`
                  );
                }
              }}
            >
              <td className="py-2 px-3 flex items-center justify-center">
                <img src={tableData.image} />
              </td>
              <td className="py-2 px-3">{tableData.ChallengeName}</td>
              <td className="py-2 px-3">{tableData.ChgID}</td>
              <td className="py-2 px-3">{tableData.Participants}</td>
              <td className="py-2 px-3">{tableData.Distance}</td>
              <td className="py-2 px-3">{tableData.StepsTarget}</td>
              <td className="py-2 px-3">{tableData.StartDate}</td>
              <td className="py-2 px-3">{tableData.StartTime}</td>
              <td className="py-2 px-3">{tableData.EndDate}</td>
              <td
                className={`py-2 px-3 ${
                  (forcesStatus || tableData.Status) === "Active"
                    ? "text-[var(--activeText)]"
                    : (forcesStatus || tableData.Status) === "Inactive"
                    ? "text-[var(--inactiveText)]"
                    : "text-[#25A244]"
                }`}
              >
                {forcesStatus || tableData.Status}
              </td>
              <td className="py-2 px-3 cursor-pointer relative">
                <img
                  src={moreIcon}
                  onClick={(event) => {
                    event.stopPropagation(); // to prevent whole row click instead of moreIcon
                    onclickDropdownIcon(index);
                    setSelectIcon(openDropdownIndex === index ? false : true);
                  }}
                  className={`cursor-pointer  py-2 px-3 rounded-full ${
                    selectIcon && openDropdownIndex === index
                      ? "bg-[rgba(48,115,241,0.1)]"
                      : ""
                  }`}
                />
                {openDropdownIndex === index && (
                  <MoreIconDropdown
                    status={forcesStatus || tableData.Status}
                    challengeName={tableData.ChallengeName}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
  );
};

export default ChallengesTable;
