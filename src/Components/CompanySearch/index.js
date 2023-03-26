import React, { useState } from "react";
import { CustomButton } from "../common/CommonButton/CustomButton";

const CompanySearch = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearch(value);
  };

  const handleButtonClick = () => {
    if (onSearch) {
      onSearch(search);
    }
  };

  return (
    <div className="filter-container">
      <div className="form">
        <input
          type="search"
          value={search}
          onChange={handleSearch}
          placeholder="Search location"
        />
        <CustomButton onClick={handleButtonClick}>Search</CustomButton>
      </div>
    </div>
  );
};

export default CompanySearch;
