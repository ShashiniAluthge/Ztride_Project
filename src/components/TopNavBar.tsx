import SearchIcon from "../assets/search.png";
import NotificationIcon from "../assets/Bell_light.png";
import SettingsIcon from "../assets/setting.png";
import ProfileImage from "../assets/progileImage.png";

const TopNavBar = () => {
  return (
    <div className="flex items-center justify-between px-4 h-full text-[var(--primary)]">
      <div className="w-[469px] flex justify-between items-center border-1 border-[#ECECEC] rounded-[50px] pl-[19px] p-[3px]">
        <p className="text-[16px] text-[var(--primary)]">Search</p>
        <div className="w-[38px] h-[38px] bg-[#F9F8F8] items-center justify-center flex rounded-full border-1 border-[#F9F8F8]">
          <img src={SearchIcon} />
        </div>
      </div>
      <div className="flex items-center justify-between gap-[8px]">
        <div className="flex items-center justify-between  border-1 border-[#ECECEC] rounded-[50px] p-[3px] pr-[14px] gap-[8px]">
          <div className="w-[38px] h-[38px] bg-[#F9F8F8] items-center justify-center flex rounded-full border-1 border-[#F9F8F8]">
            <img src={NotificationIcon} />
          </div>

          <p className="text-[16px] text-[var(--primary)]">Tue,16 Jul</p>
          <div className="bg-[#FF5F8F] w-[20px] h-[16px] items-center justify-center flex rounded-[50px] ml-[16px]">
            <p className="text-white text-[10px]">5</p>
          </div>
        </div>
        <div className="w-[44px] h-[44px] border-1 border-[#ECECEC] rounded-full flex justify-center items-center">
          <img src={SettingsIcon} />
        </div>
        <div>
          <img src={ProfileImage} />
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
