import React, { useState } from "react";

const CompanySearch = ({ onSearch = handleLocationSearch }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearch(value);

    if (onSearch) {
      onSearch(value);
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
      </div>
    </div>
  );
};

export default CompanySearch;
