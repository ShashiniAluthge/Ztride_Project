import LogoImage from "../assets/logo.png";
import DashboardIcon from "../assets/dashboard.png";
import OrganizationIcon from "../assets/organization.png";
import ChallengesIcon from "../assets/crown.png";
import ReviewsIcon from "../assets/star.png";
import { useState } from "react";
import SidebarDropdown from "./SidebarDropdown";
import { useNavigate } from "react-router-dom";

const SideNavBar = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const navigate = useNavigate();

  return (
    <div className="w-full h-full items-center justify-center text-[var(--primary)] bg-[var(--background)]">
      <div>
        <img src={LogoImage} />
      </div>
      <div className="flex flex-col px-[20px] mt-[-20px] gap-[8px]">
        <div
          className="flex flex-row gap-[8px] text-[var(--primary)] font-medium text-[16px] items-center h-[34px]  rounded-[5px] px-[12px] py-[4px] cursor-pointer"
          onClick={() => navigate("/dashboard")}
        >
          <img src={DashboardIcon} className="w-[16px] h-[16px]" />
          <div className="items-center w-full">Dashboard</div>
        </div>

        <SidebarDropdown
          title="Organizations"
          icon={OrganizationIcon}
          items={[
            { name: "All Organizations", path: "/allOrganizations" },
            { name: "Disable Organizations", path: "/disableOrganizations" },
          ]}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
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
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />

        <div
          className="flex flex-row gap-[8px] text-[var(--primary)] font-medium text-[16px] items-center h-[34px]  rounded-[5px] px-[12px] py-[4px] cursor-pointer"
          onClick={() => navigate("/reviews")}
        >
          <img src={ReviewsIcon} className="w-[16px] h-[16px]" />
          <div className="items-center w-full">Reviews</div>
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;
