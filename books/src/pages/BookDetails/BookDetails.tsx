import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  Book_Details_Container,
  Book_Image,
  Book_Data,
} from "../../components/styles/BookDetails.styled";
import { Link } from "react-router-dom";
// import leftArrow from "../../assets/arrow-left.png";
import { IBook } from "../../types";

function BookDetails() {
  const { id } = useParams();
  const [bookData, setBookData] = useState<IBook>(); //como inicio objeto book? pus '?' em baixo

  useEffect(() => {
    async function fetchBook() {
      fetch(`https://ancient-temple-61124.herokuapp.com/api/book/${id}`)
        .then((response) => response.json())
        .then((json) => setBookData(json.data));
    }
    fetchBook();
  }, []);

  console.log(bookData);

  return (
    <>
      <Header />
      <Book_Details_Container>
        <Book_Image>
          <img src={bookData?.book_cover} alt="book cover" />
        </Book_Image>
        <Book_Data>
          <h1>{bookData?.title}</h1>
          <h3>by {bookData?.description}</h3>
          <p>{bookData?.year}</p>
          <Link to="/bookspage">
            <img
              src={require("../../assets/arrow-left.png")}
              alt="left arrow"
            />
            <p>Click to go to books page</p>
          </Link>
        </Book_Data>
      </Book_Details_Container>
      <Footer />
    </>
  );
}

export default BookDetails;
