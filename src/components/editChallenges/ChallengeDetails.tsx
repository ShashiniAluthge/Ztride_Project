

const ChallengeDetails = () => {
  return (
    <div>
              <p className="text-[16px] text-[var(--primary)] font-medium">
                Challenge Details
              </p>
              <div className="flex flex-row mt-[8px] gap-[21px]">
                <div className="flex flex-col w-1/2 text-[12px] ">
                  <p className="text-[var(--subText)] ">Challenge ID</p>
                  <div className="flex items-center border-1 border-[#F9F8F8] p-[8px]">
                    <p className="text-[#3D3A3A]">Ch-001</p>
                  </div>
                </div>
                <div className="flex flex-col w-1/2 text-[12px] ">
                  <p className="text-[var(--subText)] ">Distance Goal</p>
                  <div className="flex items-center border-1 border-[#F9F8F8] p-[8px]">
                    <p className="text-[#3D3A3A]">100 km</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col text-[12px] mt-[8px]">
                <p className="text-[var(--subText)] ">Challenge Name</p>
                <div className="flex items-center border-1 border-[#F9F8F8] p-[8px]">
                  <p className="text-[#3D3A3A]">
                    Taj Samudra Colombo Weekly Running
                  </p>
                </div>
              </div>

              <div className="flex flex-col text-[12px] mt-[8px]">
                <p className="text-[var(--subText)] ">Challenge Description</p>
                <div className="flex items-center border-1 border-[#F9F8F8] p-[8px]">
                  <p className="text-[#3D3A3A] mb-[40px]">
                    Join the Taj Samudra Colombo Weekly Running Challenge and
                    experience the scenic beauty of Colombo’s coastline while
                    pushing your limits! 🌴🏃‍♀️ Run at your own pace, track your
                    progress, and compete with fellow participants to climb the
                    leaderboard. 🌟 Stay consistent, earn rewards, and take a
                    step closer to your fitness goals! 💪🎯
                  </p>
                </div>
              </div>
            </div>
  )
}

export default ChallengeDetails