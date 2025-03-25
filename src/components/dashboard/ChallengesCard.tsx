import DoubleArrowIcon from "../../assets/doubleArrowIcon.png";
import TajSamudraLogo from "../../assets/TajSamudraLogo.png";
import AyuboIcon from "../../assets/ayuboicon.png";
import DashboardMapImage from "../../assets/dashboardMapImage.png";

const ChallengesCard = () => {
  return (
    <div className="mt-[17px]  border-1 border-[#F9F8F8] rounded-[20px] w-2/3 mb-[40px] ">
      <div className="ml-[24px] m-[8px]">
        <div className="flex flex-row items-center justify-between ">
          <p className="text-[16px] font-medium text-[var(--primary)]">
            Challenges
          </p>
          <img src={DoubleArrowIcon} alt="Expand" />
        </div>
        <div className="mt-[11px] flex flex-row items-center justify-between">
          <div className="flex-1">
            <div className="flex flex-row">
              <div>
                <img src={TajSamudraLogo} />
              </div>

              <div className="flex flex-col ml-[10px]">
                <p className="text-[14px] text-[var(--primary)]">
                  Taj Samudra Colombo
                </p>
                <div className="flex flex-row gap-[6px]">
                  <img src={AyuboIcon} className="w-[16px] h-[16px]" />
                  <p className="text-[12px] text-[var(--subText)]">
                    Running . Sat 20, 2024
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-[16px]">
              <p className="text-[16px] text-[var(--primary)] font-medium">
                Weekend Running
              </p>
              <p className="text-[12px] text-[var(--subText)]">
                Join our exciting Weekend Running Challenge. this challenge is a
                great opportunity to push your limits and enjoy a weekend of
                active fun. Don't miss out – register now and make every step
                count!
              </p>
            </div>

            <div className="mt-[10px] flex flex-row gap-[24px]">
              <div className="flex flex-col">
                <p className="text-[14px] font-medium text-[var(--primary)]">
                  100 km
                </p>
                <p className="text-[10px] text-[var(--subText)]">Distance</p>
              </div>

              <div className="flex flex-col">
                <p className="text-[14px] font-medium text-[var(--primary)]">
                  08:00 am
                </p>
                <p className="text-[10px] text-[var(--subText)]">
                  Starting Time
                </p>
              </div>
            </div>
          </div>
          <div className=" ml-[26px]">
            <img src={DashboardMapImage} className="object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengesCard;
