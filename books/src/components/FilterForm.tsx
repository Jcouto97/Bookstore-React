import React, { useState } from "react";
/* import arrowRight from './../assets/arrow-right.png'
import arrowDown from './../assets/arrow-down.png' */
import { Filter_Container } from "./styles/FiltersForm.styled";
import { Filter } from "../pages/BooksPage/BooksPage";

interface IFilterFormProps {
  //o tipo que esta od ela é chamada e o retorno aseguir (neste caso void)
  handleFilter: (event: any) => void;
}

function FilterForm(props: IFilterFormProps) {
  const { handleFilter } = props;
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(!isClicked);
  }

  return (
    <Filter_Container>
      <div onClick={handleClick}>
        <p>Filters</p>
        {isClicked ? (
          <img src={require("./../assets/arrow-down.png")} alt="arrow-down" />
        ) : (
          <img src={require("./../assets/arrow-right.png")} alt="arrow-right" />
        )}
      </div>

      {isClicked ? (
        <form>
          <label htmlFor="title">
            Title
            <input
              type="radio"
              name="filter"
              value={Filter.Title}
              id="title"
              onChange={handleFilter}
            />
          </label>

          <label htmlFor="author">
            Author
            <input
              type="radio"
              name="filter"
              value={Filter.Author}
              id="author"
              onChange={handleFilter}
            />
          </label>

          <label htmlFor="year">
            Year
            <input
              type="radio"
              name="filter"
              value={Filter.Year}
              id="year"
              onChange={handleFilter}
            />
          </label>
        </form>
      ) : null}
    </Filter_Container>
  );
}

export default FilterForm;
