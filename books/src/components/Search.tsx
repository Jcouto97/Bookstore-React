import React, { LegacyRef } from "react";
// import searchBar from './../assets/search-bar.png'
import { Search_Container } from "./styles/Search.styled";

interface ISearchProps {
  handleSearch: () => Promise<void>;
  search: LegacyRef<HTMLInputElement> | undefined ; //PORQUE HTMLINPUTELEMENTE N DA?
}

function Search({ handleSearch, search }: ISearchProps) {
  return (
    //STYLES
    <Search_Container>
      <label htmlFor="search">
        <input
          type="text"
          name="search"
          placeholder="Search"
          onChange={handleSearch}
          ref={search}
        />
      </label>
      <img src={require("./../assets/search-bar.png")} alt='search' />
    </Search_Container>
  );
}

export default Search;
