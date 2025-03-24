const ChallengeStatus = () => {
  return (
    <div className="mt-[8px]">
      <p className="text-[16px] text-[var(--primary)] font-medium">
        Challenge Status
      </p>
      <div className="flex flex-col w-1/2  mt-[8px] w-full">
        <div className="flex flex-row  gap-[8px] w-3/4">
          <div className="px-4 py-2 bg-[#FCFCFC] border-[0.6px] border-[#F0F0F0] flex items-center justify-center flex-1 hover:bg-[#E7EFFF] hover:border-[var(--activeText)]">
            <p className="text-[var(--activeText)] text-[12px]">Activate</p>
          </div>
          <div className="px-4 py-2 bg-[#FCFCFC] border-[0.6px] border-[#F0F0F0] flex items-center justify-center flex-1 hover:bg-[#FDEDF2] hover:border-[var(--inactiveText)]">
            <p className="text-[var(--inactiveText)] text-[12px]">Inactivate</p>
          </div>
          <div className="px-4 py-2 bg-[#FCFCFC] border-[0.6px] border-[#F0F0F0] flex items-center justify-center flex-1 hover:bg-[#E9FFEE] hover:border-[#25A244]">
            <p className="text-[#25A244] text-[12px]">Completed</p>
          </div>
        </div>
        <div className="mt-[47px]">
          <div className="flex flex-row justify-end cursor-pointer">
            <div className="text-[#747474] text-[14px] p-[8px] flex items-center justify-center h-[35px]">
              Cancel
            </div>
            <div className="text-[var(--activeText)] text-[14px] p-[8px] flex items-center justify-center h-[35px] border-1 border-[#E5F6FF] bg-[#E5F6FF]">
              Save Changes
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeStatus;
