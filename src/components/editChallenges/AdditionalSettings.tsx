import MapImage from "../../assets/editchallengeMap.png";

const AdditionalSettings = () => {
  return (
    <div className="mt-[8px]">
              <p className="text-[16px] text-[var(--primary)] font-medium">Additional Settings</p>
              <div className="flex flex-col w-1/2 text-[12px]  mt-[8px] w-full">
                <p className="text-[var(--subText)] ">Map Tracking</p>
                <div>
                <img src={MapImage} className="w-full"/>
                </div>
                
              </div>
            </div>
  )
}

export default AdditionalSettings