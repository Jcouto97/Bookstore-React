import React, { useState } from "react";
/* import arrowRight from "./../assets/arrow-right.png";
import arrowDown from "./../assets/arrow-down.png"; */
//PARA ASSETS PRECISO DE FICHEIRO ESPECIFIO NO TS
import { Filter_Container } from "./styles/FiltersForm.styled";
//enum direction
import { Direction } from "../pages/BooksPage/BooksPage";

interface IDirectionFormProps {
  //o tipo que esta od ela é chamada e o retorno aseguir (neste caso void)
  handleDirection: (event: any) => void;
}

function DirectionForm(props: IDirectionFormProps) {
  const { handleDirection } = props;
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(!isClicked);
  }

  return (
    <Filter_Container>
      <div onClick={handleClick}>
        <p>Sort Direction</p>
        {isClicked ? (
          <img src={require("./../assets/arrow-down.png")} alt="arrow-down" />
        ) : (
          <img src={require("./../assets/arrow-right.png")} alt="arrow-right" />
        )}
      </div>

      {isClicked ? (
        <form>
          <label htmlFor="ascending">
            Ascending
            <input
              type="radio"
              name="direction"
              value={Direction.Asc}
              id="ascending"
              onChange={handleDirection}
            />
          </label>

          <label htmlFor="descending">
            Descending
            <input
              type="radio"
              name="direction"
              value={Direction.Desc}
              id="descending"
              onChange={handleDirection}
            />
          </label>
        </form>
      ) : null}
    </Filter_Container>
  );
}

export default DirectionForm;
