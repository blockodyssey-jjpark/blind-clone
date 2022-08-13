const SearchBar = () => {
  return (
    <div className="py-3 px-4 focus-within:border-red-500 text-lg border border-gray-300 shadow-sm rounded-md flex">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <input type="text" placeholder="관심있는 내용을 검색해보세요!" className="ml-3 block w-full focus:outline-none" />
    </div>
  );
};

export default SearchBar;
