import SearchIcon from "../../assets/search.png";

const SearchBar = () => {
  return (
    <div className="w-1/3 flex justify-between items-center border-1 border-[#ECECEC] rounded-[50px] pl-[19px] p-[3px]">
              <p className="text-[16px] text-[var(--primary)]">Search</p>
              <div className="w-[38px] h-[38px] bg-[#F9F8F8] items-center justify-center flex rounded-full border-1 border-[#F9F8F8]">
                <img src={SearchIcon} />
              </div>
            </div>
  )
}

export default SearchBar