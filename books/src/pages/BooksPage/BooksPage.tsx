import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Book from "../../components/Book";
import Sidebar from "../../components/Sidebar";
import { Link } from "react-router-dom";
import {
  Book_Grid,
  Books_Container,
} from "../../components/styles/BooksPage.styled";
import { BooksPage_Container } from "../../components/styles/BooksPageContainer.styled";
import Search from "../../components/Search";
import { IBook } from "../../types";

export enum Direction {
  Asc = "asc",
  Desc = "desc",
}

export enum Filter {
  Title = "title",
  Author = "description",
  Year = "year",
}

function BooksPage() {
  const [allBooks, setAllBooks] = useState<IBook[]>([]);

  //filtros
  const [filter, setFilter] = useState<Filter>(Filter.Title);
  //enum
  const [direction, setDirection] = useState<Direction>(Direction.Asc);

  //search so da com any?
  const search = useRef<HTMLInputElement>(null);

  useEffect(() => {
    async function getAllBooks() {
      const response = await fetch(
        `https://ancient-temple-61124.herokuapp.com/api/book/?sort_by=${filter}&order_by=${direction}`
      );
      const json = await response.json();
      setAllBooks(json.data);
    }
    getAllBooks();
    //como renderiza a primeira vez, tem que ter alguma coisa no array para saber qd mudar
  }, [filter, direction]);

  const booksArray = allBooks.map((book, index) => {
    return (
      <Link key={index} to={`/book/${book.id}`}>
        <Book
          id={book.id}
          title={book.title}
          description={book.description}
          year={book.year}
          book_cover={book.book_cover}
        />
      </Link>
    );
  });

  //ou any
  function handleDirection(event: any) {
    console.log(event.target.value);
    setDirection(event.target.value);
  }

  function handleFilter(event: any) {
    console.log(event.target.value);
    setFilter(event.target.value);
  }

  async function handleSearch() {
    //temos que ter este fetch porque sempre que escrevemos tem que dar um fetch novo
    const response = await fetch(
      "https://ancient-temple-61124.herokuapp.com/api/book/"
    );
    const json = await response.json();
    const bookArray = json.data;

    const searchBooks = bookArray.filter(
      (book: IBook) =>
        book.title
          .toLowerCase()
          .includes(search?.current?.value.toLowerCase() ?? "") //?? se o valor antes existir usar, senao passa para '', optional chaning
    );
    setAllBooks(searchBooks);
  }

  return (
    <>
      <Header />
      <BooksPage_Container>
        <Sidebar
          handleDirection={handleDirection}
          handleFilter={handleFilter}
        ></Sidebar>
        <Books_Container>
          <Search handleSearch={handleSearch} search={search} />
          <Book_Grid>{booksArray}</Book_Grid>
        </Books_Container>
      </BooksPage_Container>
      <Footer />
    </>
  );
}

export default BooksPage;
