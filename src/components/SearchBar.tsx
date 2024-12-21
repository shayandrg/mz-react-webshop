import React from 'react';

const SearchBar = ({ onSearch }: { onSearch: (query: string) => void }) => (
  <input
    type="text"
    placeholder="Search products"
    onChange={(e) => onSearch(e.target.value)}
  />
);

export default SearchBar;
