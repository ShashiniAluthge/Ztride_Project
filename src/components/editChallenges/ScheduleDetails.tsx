import calenderIcon from '../../assets/calendar.png';
import timeIcon from '../../assets/time.png';
import { ChallengeDataProp } from './ChallengeDetails';



const ScheduleDetails = ({challengeData}:ChallengeDataProp) => {
  return (
    <>
    {challengeData.map((challengeItem,index)=>(
      <div key={index}>
    <p className="text-[16px] text-[var(--primary)] font-medium">Duration & Schedule Details</p>
    <div className="flex flex-row mt-[8px] gap-[21px]">
        <div className="flex flex-col w-1/2 text-[12px] ">
          <p className="text-[var(--subText)] ">Start Date</p>
          <div className="flex flex-row items-center gap-[19px] border-1 border-[#F9F8F8]">
            <div className="border-1 border-[#F9F8F8]  p-[8px]">
            <img src={calenderIcon}/>
            </div>
            <p className="text-[#3D3A3A]">{challengeItem.StartDate}</p>
            </div>
        </div>
        <div className="flex flex-col w-1/2 text-[12px] ">
          <p className="text-[var(--subText)] ">End Date</p>
          <div className="flex flex-row items-center gap-[19px] border-1 border-[#F9F8F8]">
            <div className="border-1 border-[#F9F8F8]  p-[8px]">
            <img src={calenderIcon}/>
            </div>
            <p className="text-[#3D3A3A]">{challengeItem.EndDate}</p>
            </div>
        </div>
      </div>
      <div className="flex flex-col w-1/2 text-[12px] mt-[8px]">
          <p className="text-[var(--subText)] ">Start Time</p>
          <div className="flex flex-row items-center gap-[19px] border-1 border-[#F9F8F8]">
            <div className="border-1 border-[#F9F8F8]  p-[8px]">
            <img src={timeIcon}/>
            </div>
            <p className="text-[#3D3A3A]">{challengeItem.StartTime}</p>
            </div>
        </div>
  </div>
    ))}
    
  </>
  )
}

export default ScheduleDetails