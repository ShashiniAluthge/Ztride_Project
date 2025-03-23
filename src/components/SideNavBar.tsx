import LogoImage from "../assets/logo.png";
import DashboardIcon from "../assets/dashboard.png";
import OrganizationIcon from "../assets/organization.png";
import ChallengesIcon from "../assets/crown.png";
import ReviewsIcon from "../assets/star.png";
import { useState } from "react";
import SidebarDropdown from "./SidebarDropdown";

const SideNavBar = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  return (
    <div className="w-full h-full items-center justify-center text-[var(--primary)]">
      <div>
        <img src={LogoImage} />
      </div>
      <div className="flex flex-col px-[20px] mt-[-20px] gap-[8px]">
        <div className="flex flex-row gap-[8px] text-[var(--primary)] font-medium text-[16px] items-center h-[34px]  rounded-[5px] px-[12px] py-[4px] cursor-pointer">
          <img src={DashboardIcon} className="w-[16px] h-[16px]" />
          <div className="items-center w-full">Dashboard</div>
        </div>

        <SidebarDropdown
          title="Organizations"
          icon={OrganizationIcon}
          items={["All Organizations", "Disable Organizations"]}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />

        <SidebarDropdown
          title="Challenges"
          icon={ChallengesIcon}
          items={[
            "All Challenges",
            "Ongoing Challenges",
            "Disable Challenges",
            "Complete Challenges",
          ]}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />

        <div className="flex flex-row gap-[8px] text-[var(--primary)] font-medium text-[16px] items-center h-[34px]  rounded-[5px] px-[12px] py-[4px] cursor-pointer">
          <img src={ReviewsIcon} className="w-[16px] h-[16px]" />
          <div className="items-center w-full">Reviews</div>
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;
