import LogoImage from "../assets/logo.png";
import DashboardIcon from "../assets/dashboard.png";
import OrganizationIcon from "../assets/organization.png";
import ChallengesIcon from "../assets/crown.png";
import ReviewsIcon from "../assets/star.png";
import SidebarDropdown from "./SidebarDropdown";
import { useLocation, useNavigate } from "react-router-dom";

const SideNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getFocusStyles = (path: string) => {
    return location.pathname === path
      ? "bg-[#FCFCFC] border-1 border-[#F0F0F0]"
      : "";
  };

  return (
    <div className="w-full h-full items-center justify-center text-[var(--primary)] bg-[var(--background)]">
      <div>
        <img src={LogoImage} />
      </div>
      <div className="flex flex-col px-[20px] mt-[-20px] gap-[8px]">
        <div
          className={`flex flex-row gap-[8px] text-[var(--primary)] font-medium text-[16px] items-center h-[34px] rounded-[5px] px-[12px] py-[4px] cursor-pointer hover:bg-[#FCFCFC] hover:border-1 hover:border-[#F0F0F0]
            ${getFocusStyles("/dashboard")}`}
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          <img src={DashboardIcon} className="w-[16px] h-[16px]" />
          <div className="items-center w-full">Dashboard</div>
        </div>

        <SidebarDropdown
          title="Organizations"
          icon={OrganizationIcon}
          items={[
            { name: "All Organizations", path: "" },
            { name: "Disable Organizations", path: "" },
          ]}
        />

        <SidebarDropdown
          title="Challenges"
          icon={ChallengesIcon}
          items={[
            { name: "All Challenges", path: "/allChallenges" },
            { name: "Ongoing Challenges", path: "/ongoingChallenges" },
            { name: "Disable Challenges", path: "/disableChallenges" },
            { name: "Complete Challenges", path: "/completeChallenges" },
          ]}
        />

        <div className="flex flex-row gap-[8px] text-[var(--primary)] font-medium text-[16px] items-center h-[34px]  rounded-[5px] px-[12px] py-[4px] cursor-pointer hover:bg-[#FCFCFC] hover:border-1 hover:border-[#F0F0F0]">
          <img src={ReviewsIcon} className="w-[16px] h-[16px]" />
          <div className="items-center w-full">Reviews</div>
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;
