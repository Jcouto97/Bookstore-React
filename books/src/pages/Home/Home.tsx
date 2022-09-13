import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  Home_Container,
  Home_Content,
} from "../../components/styles/Home.styled";
import { Button } from "../../components/styles/Button.styled";
import { useNavigate } from "react-router-dom";
//importar a interface
import { IBook } from '../../types'; 

function Home() {
  const navigate = useNavigate();

  const [allBooks, setAllBooks] = useState<IBook[]>([]);
  const [book, setBook] = useState<IBook | null>(null); //null porque {} nao é falso, é true
  //any senao parte?!

  useEffect(() => {
    async function fetchAllBooks() {
      const response = await fetch(
        "https://ancient-temple-61124.herokuapp.com/api/book/"
      );
      const books = await response.json();

      const randomNr = Math.floor(Math.random() * books.data.length);
      setAllBooks(books.data);
      setBook(books.data[randomNr]);
      console.log(books.data); //porque aparece 2x?
    }
    fetchAllBooks();
  }, []);

  function fetchRandomCover() {
    const randomNr = Math.floor(Math.random() * allBooks.length);

    setBook(allBooks[randomNr]);
  }

  function sendToBookDetails() {
    console.log("sending to book details...");
    //para evitar undefined
    if (!book) {
      //mostrar erro ao utilizador
      return;
    }
    navigate(`/book/${book?.id}`); //se for null nao tenta acessar o id (! nunca vai ser nulo) (? se for null nao tentamos acessar o id)
  }

  //conditional rendering para perceber se ja tem livro, se nao tiver aguarda ate ter para aparecer componente com imagem

  return book ? (
    <>
      <Header />
      <Home_Container>
        <Home_Content>
          <h1>Choose your book!</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum ab
            cupiditate, ipsa neque quod excepturi dolores animi dolore
            reiciendis nam mollitia? Ad dignissimos, fugit rerum voluptatibus
            molestias repudiandae sed maxime architecto voluptates impedit
            sapiente fuga porro veritatis, natus, facere recusandae minima
            saepe? Repellendus expedita accusantium eveniet molestias in impedit
            quod?
          </p>
          <Button onClick={fetchRandomCover}>New Book</Button>
        </Home_Content>
        <img onClick={sendToBookDetails} src={book.book_cover} alt="Book cover" />
      </Home_Container>
      <Footer />
    </>
  ) : <></>; //em vez de null
}

export default Home;
