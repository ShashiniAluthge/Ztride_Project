import { useNavigate } from "react-router-dom";

interface MoreIconDropdownProp {
  status: "Active" | "Inactive" | string;
  challengeName: string;
}

const MoreIconDropdown = ({ status, challengeName }: MoreIconDropdownProp) => {
  const navigate = useNavigate();


  const dropdownItems =
    status === "Active"
      ? ["Edit", "Delete", "Inactivate"]
      : ["Edit", "Delete", "Activate"];

  return (
    <div className="flex flex-col items-center bg-[var(--background)] w-[112px] justify-center shadow-sm rounded-[5px] mt-[16px] gap-[6px] py-[11px] px-[7px] absolute left-[70%] transform translate-x-[-100%] z-10">
      
        <ul  className="text-[12px] w-full">
        {dropdownItems.map((item, index) => (
          <li
          key={index}
            className={`bg-[var(--screenbg)] border-[0.6px] border-[#F0F0F0] py-2 px-4 w-full flex items-center justify-center 
                      ${
                        item === "Delete"
                          ? "text-[#EED40C] hover:bg-[#FFFCE1] hover:border-[#EED40C]"
                          : item === "Inactivate"
                          ? "text-[var(--inactiveText)] hover:bg-[#FDEDF2] hover:border-[var(--inactiveText)]"
                          : item === "Activate"
                          ? "text-[var(--activeText)] hover:bg-[#E7EFFF] hover:border-[var(--activeText)]"
                          : "text-[var(--primary)] hover:border-[var(--primary)] hover:bg-[rgba(32,32,32,0.05)]" //5% of primary color
                      }`}
            onClick={(event) => {
              if (item === "Edit") {
                event.stopPropagation();
               navigate(`/editChallenges/${encodeURIComponent(challengeName)}`);
               window.scrollTo(0,0);
              } else {
                console.log(`${item} clicked`);
              }
            }}
          >
            {item}
          </li>
        
      ))}
      </ul>
    </div>
  );
};

export default MoreIconDropdown;
