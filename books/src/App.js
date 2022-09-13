import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import BooksPage from "./pages/BooksPage/BooksPage";
import Login from "./pages/Credentials/Login";
import Register from "./pages/Credentials/Register";
import BookDetails from "./pages/BookDetails/BookDetails";
import Profile from "./pages/Credentials/Profile";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookspage" element={<BooksPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/book/:id" element={<BookDetails/>} /> 
          <Route path="/profile" element={<Profile/>} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
