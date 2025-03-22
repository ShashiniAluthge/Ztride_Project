import DoubleArrowIcon from "../../assets/doubleArrowIcon.png";
import PhoneImage from "../../assets/phoneImage.png";

const DownloadsOverviewCard = () => {
  return (
    <div className="mt-[17px]  border-1 border-[#F9F8F8] rounded-[20px] w-1/3  mb-[40px]">
      <div className="ml-[24px] m-[8px] ">
        <div className="flex flex-row items-center justify-between">
          <div>
            <p className="text-[13px] text-[var(--subText)]">This Week</p>
            <p className="text-[16px] font-medium text-[var(--primary)]">
              Downloads Overview
            </p>
          </div>
          <img src={DoubleArrowIcon} alt="Expand" />
        </div>
        <div className="relative">

        <div className="absolute top-[55px] left-1/2 transform -translate-x-1/2 left-[40%]">
          <img src={PhoneImage} className="object-contain w-[220px] h-[130px]" />
        </div>

        <div className="mt-[20px] flex flex-row gap-[20px]">
          <div className="bg-[#F3FBFF] border-[#F3FBFF] border-1 rounded-[10px] p-[10px] flex flex-col justify-between h-[148px] w-1/2">
            <div className="bg-[#fff] text-[#389FD1] text-[10px] flex items-center justify-center w-[35px] h-[17px] rounded-[3px]">
              <p>5.5%</p>
            </div>
            <div className="flex flex-row justify-between items-center">
              <div className="text-left ">
                <p className="text-[var(--subText)] text-[13px] ">
                  Total 
                  <p>Downloads</p>
                </p>
                <p className="text-[var(--primary)] text-[24px] font-medium">
                  80%
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between  w-1/2 gap-[3px]">
            <div className="bg-[#FBFBFB] border-[#FBFBFB] border-1 rounded-[10px] p-[7px] text-left ">
              <div>
                <p className="text-[var(--primary)] text-[12px] ">
                  Google Play
                </p>
                <p className="text-[var(--primary)] text-[20px] font-medium">
                  50%
                </p>
              </div>
              <p className="text-[10px] text-[var(--subText)] mt-[6px]">
                5% from last week
              </p>
            </div>
            <div className="bg-[var(--primary)] border-[var(--primary)] border-1 rounded-[10px] p-[7px] text-right ">
              <div>
                <p className="text-[var(--background)] text-[12px] ">
                  Apple Store
                </p>
                <p className="text-[var(--background)] text-[20px] font-medium">
                  30%
                </p>
              </div>
              <p className="text-[10px] text-[var(--subText)] mt-[6px]">
                0.5% from last week
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadsOverviewCard;
