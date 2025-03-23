import ExportIcon from '../../assets/exportIcon.png'

const ExportCSV = () => {
  return (
    <div className="bg-[var(--background)] text-[var(--secondary)] border-1 border-[var(--secondary)] h-[44px]  text-[16px] flex items-center justify-between  pl-[16px] p-[7px] rounded-[50px] gap-[8px]">
    <p>Export CSV</p>
    <img src={ExportIcon} />
    </div>
  )
}

export default ExportCSV