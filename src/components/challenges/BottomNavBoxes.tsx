import rightArrow from "../../assets/rightArrow.png";

const BottomNavBoxes = () => {
  return (
    <div className="my-[21px]">
    <div className="flex flex-row gap-[4px] ">
      <div className="bg-[var(--secondary)] w-[25px] h-[25px] border-[0.6px] border-[var(--secondary)] flex items-center justify-center text-[var(--background)]" >1</div>
      <div className="bg-[var(--background)] w-[25px] h-[25px] border-[0.6px] border-[var(--secondary)] flex items-center justify-center text-[var(--secondary)]">2</div>
      <div className="bg-[var(--background)] w-[25px] h-[25px] border-[0.6px] border-[var(--secondary)] flex items-center justify-center text-[var(--secondary)]">3</div>
      <div className="bg-[var(--background)] w-[25px] h-[25px] border-[0.6px] border-[var(--secondary)] flex items-center justify-center text-[var(--secondary)]">
        <img src={rightArrow}/>
      </div>
    </div>
  </div>
  )
}

export default BottomNavBoxes