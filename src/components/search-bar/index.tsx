import React, { useState } from "react";
import CountrySearch from "./country-search";
import DateSearch from "./date-search";
import StartSearch from "./start-search";
const SearchBar: React.FC = ({}) => {
  return (
    <div className="bg-white flex items-center p-2 w-full border rounded-full">
      <CountrySearch />
      <div className="w-0.5 h-full bg-red-100" />
      <DateSearch />
      <div className="w-0.5 h-full bg-red-100" />
      <StartSearch />
    </div>
  );
};

export default SearchBar;
