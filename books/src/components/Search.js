import React from 'react'
import searchBar from './../assets/search-bar.png'
import { Search_Container } from './styles/Search.styled'

function Search({ handleSearch, search }) {
    return (
        //STYLES
        <Search_Container>
            <label htmlFor='search'>
                <input type='text' name='search' placeholder='Search' onChange={handleSearch} ref={search} />
            </label>
            <img src={searchBar} />
        </Search_Container>
    )
}

export default Search