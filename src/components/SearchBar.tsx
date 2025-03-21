"use client";

import React, { FC } from "react";

interface SearchBarProps {
  query: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchBar: FC<SearchBarProps> = ({
  query,
  onChange,
  placeholder = "Search FAQ...",
}) => {
  return (
    <input
      type="text"
      value={query}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring focus:border-blue-300"
    />
  );
};

export default SearchBar;
