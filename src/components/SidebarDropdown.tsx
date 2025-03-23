import { useState } from "react";
import downArrow from "../assets/downArrow.png";

interface DropdownItems {
  title: string;
  icon: string;
  items: string[];
  selectedItem: string | null;
  setSelectedItem: (item: string) => void;
}

const SidebarDropdown = ({
  title,
  icon,
  items,
  selectedItem,
  setSelectedItem,
}: DropdownItems) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <div
        className={`flex flex-row gap-[8px] text-[var(--primary)] font-medium text-[16px] items-center h-[34px]  rounded-[5px] px-[12px] py-[4px] cursor-pointer
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
              onClick={() => setSelectedItem(listItem)}
              className={`p-2 hover:text-[var(--primary)] hover:bg-[#FCFCFC] hover:border-1 hover:border-[#F0F0F0] rounded-[5px]
            ${
              selectedItem == listItem
                ? "bg-[#FCFCFC] border border-[#F0F0F0] text-[var(--primary)] bg-[#FCFCFC] border-1 border-[#F0F0F0] rounded-[5px]"
                : ""
            }`}
            >
              {listItem}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SidebarDropdown;
