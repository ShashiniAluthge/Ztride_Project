import TajSamudraLogo from "../../assets/TajSamudraLogo.png";
import upDownArrow from "../../assets/upDownArrow.png";
import user1 from "../../assets/user1.png";
import user2 from "../../assets/user2.png";
import user3 from "../../assets/user3.png";
import user4 from "../../assets/user4.png";
import usersCountbg from "../../assets/usersCountbg.png";
import { ChallengeDataProp } from "./ChallengeDetails";

const OrganizationDetails = ({challengeData}:ChallengeDataProp) => {
  return (
    <>
    {challengeData.map((challengeItem,index)=>(
      <div className="mt-[8px]" key={index}>
      <p className="text-[16px] text-[var(--primary)] font-medium">
        Organization Details
      </p>
      <div className="flex flex-col w-1/2  mt-[8px] w-full">
        <div>
          <p className="text-[var(--subText)] text-[12px] ">Add Organization</p>
          <div className="flex flex-row items-center justify-between mt-[8px]">
            <img src={TajSamudraLogo} />
            <p className="text-[var(--subText)] text-[12px]">
            Taj Samudra Colombo
            </p>
          </div>

          <p className="text-[var(--activeText)] text-[10px] mt-[8px]">
            + Add New Member
          </p>
        </div>
        <div className="flex flex-row mt-[8px] gap-[21px]">
          <div className="w-1/2">
            <p className="text-[var(--subText)] text-[12px]">
              Minimum Participants
            </p>
            <div className="flex flex-row items-center justify-between mt-[8px] border-1 border-[#F9F8F8] p-[8px]">
              <p>1</p>
              <img src={upDownArrow} />
            </div>
          </div>
          <div className="w-1/2">
            <p className="text-[var(--subText)] text-[12px]">
              Maximum Participants
            </p>
            <div className="flex flex-row items-center justify-between mt-[8px] border-1 border-[#F9F8F8] p-[8px]">
              <p>{challengeItem.Participants}</p>
              <img src={upDownArrow} />
            </div>
          </div>
        </div>
        <div>
          <p className="text-[var(--subText)] text-[12px] ">Add Members</p>
          <div className="flex flex-row items-center justify-between mt-[8px]">
            <div className="flex flex-row">
              <img src={user1} className="w-[40px] h-[40px] rounded-full" />
              <img
                src={user2}
                className="-ml-5 w-[40px] h-[40px] rounded-full"
              />
              <img
                src={user3}
                className="-ml-5 w-[40px] h-[40px] rounded-full"
              />
              <img
                src={user4}
                className="-ml-5 w-[40px] h-[40px] rounded-full"
              />
              <div className="relative flex items-center justify-center w-[40px] h-[40px] -ml-5">
                <img src={usersCountbg} className=" w-full h-full " />
                <p className="absolute text-[12px] text-[var(--primary)] font-medium">
                  +{challengeItem.Participants -4}
                </p>
              </div>
            </div>

            <p className="text-[var(--subText)] text-[12px]">
              {challengeItem.Participants} Participants
            </p>
          </div>

          <p className="text-[var(--activeText)] text-[10px] mt-[8px]">
            + Add New Member
          </p>
        </div>
      </div>
    </div>
    ))}
    
    </>
  );
};

export default OrganizationDetails;
