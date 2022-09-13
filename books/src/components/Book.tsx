import React from "react";
import styled from "styled-components";

//fiz aqui styled component em vez de importar
const Book_Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  img {
    padding: 15px;
    background-color: #f6f6f6;
    height: 350px;
    width: 280px;
  }

  div {
    margin-top: 5px;
    font-size: 13px;
    width: 200px;
  }

  p {
    font-size: 12px;
    color: lightgray;
    width: 200px;
  }
`;
//qd props a interface sempre chamada assim
//nos props deixar sempre interface propria 
interface IBookProps {
  id?: number; //posso precisar ou nao
  title: string;
  year: number;
  description: string;
  book_cover: string;
}

function Book(props: IBookProps) {
  const { title, year, description, book_cover } = props;

  return (
    <Book_Container>
      <img src={book_cover} alt="book cover" />
      <div>
        {title} ({year})
      </div>
      <p>{description}</p>
    </Book_Container>
  );
}

export default Book;
