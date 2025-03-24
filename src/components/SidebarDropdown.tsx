import { useEffect, useState } from "react";
import downArrow from "../assets/downArrow.png";
import { useNavigate } from "react-router-dom";

interface DropdownItems {
  title: string;
  icon: string;
  items: { name: string; path: string }[];
}

const SidebarDropdown = ({ title, icon, items }: DropdownItems) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  

  // Check if any item inside the dropdown is currently active
  const isActive = items.some((item) => location.pathname === item.path);

  const getFocusStyles = (path: string) => {
    return location.pathname === path
      ? "bg-[#FCFCFC] border-1 border-[#F0F0F0] text-[var(--primary)] rounded-[5px]"
      : "";
  };

  // to Open the dropdown if an item inside isActive
  useEffect(() => {
    if (isActive) {
      setIsOpen(true);
    }
  }, [isActive]);

  return (
    <>
      <div
        className={`flex flex-row gap-[8px] text-[var(--primary)] font-medium text-[16px] items-center h-[34px]  rounded-[5px] px-[12px] py-[4px] cursor-pointer hover:bg-[#FCFCFC] hover:border-1 hover:border-[#F0F0F0]
         ${isOpen ? "bg-[#FCFCFC] border border-[#F0F0F0]" : ""}`}
      >
        <img src={icon} className="w-[16px] h-[16px]" />
        <div className="flex flex-row justify-between items-center w-full">
          <p>{title}</p>
          <img
            src={downArrow}
            onClick={() => setIsOpen(!isOpen)}
            className={`w-[16px] h-[16px] transform transition-transform cursor-pointer ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
      </div>

      {/*dropdown content */}
      <div
        className={`transition-all duration-300 ${
          isOpen ? "h-auto opacity-100" : " h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="list-disc list-inside ml-[20px] mb-[10px] text-[14px] font-medium text-[var(--subText)] cursor-pointer">
          {items.map((listItem, index) => (
            <li
              key={index}
              onClick={() => {
                navigate(listItem.path);
              }}
              className={`p-2 hover:text-[var(--primary)] hover:bg-[#FCFCFC] hover:border-1 hover:border-[#F0F0F0] rounded-[5px]
            ${getFocusStyles(listItem.path)}`}
            >
              {listItem.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SidebarDropdown;
