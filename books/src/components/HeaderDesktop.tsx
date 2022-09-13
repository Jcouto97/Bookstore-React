import React from 'react';
import { Link } from "react-router-dom";
import { StyledHeader, Nav, Slogan, Header_Links, Sign_Out } from './styles/Header.styled';
import { Container } from './styles/Container.styled';
// import bookLogo from '../assets/book-logo.png';


function HeaderDesktop() {

    const loginToken = localStorage.getItem('token');

    function handleLogout() {
        console.log("logging out");
        localStorage.removeItem("token");
    }

    //se null
    if (!loginToken) {
        return (
            <StyledHeader>
                <Container>
                    <Nav>
                        <Link to='/'>
                            <Slogan>
                                <h1>BookStore</h1>
                                <img src={require('../assets/book-logo.png')} alt="book-logo" />
                            </Slogan>
                        </Link>
                        <Header_Links>
                            <Link to='/bookspage'>
                                All Books
                            </Link>
                            <Link to='/login'>
                                Login
                            </Link>
                            <Link to='/register'>
                                Register
                            </Link>
                        </Header_Links>
                    </Nav>
                </Container>
            </StyledHeader>
        )
    } else {
        return (
            <StyledHeader>
                <Container>
                    <Nav>
                        <Link to='/'>
                            <Slogan>
                                <h1>BookStore</h1>
                                <img src={require('../assets/book-logo.png')} alt="book-logo" />
                            </Slogan>
                        </Link>
                        <Header_Links>
                            <Link to='/bookspage'>
                                All Books
                            </Link>
                            <Link to='/profile'>
                                Profile
                            </Link>
                            <Sign_Out>
                                <Link to='/' onClick={handleLogout}>
                                    Sign Out
                                </Link>
                            </Sign_Out>
                        </Header_Links>
                    </Nav>
                </Container>
            </StyledHeader>
        )
    }
}

export default HeaderDesktop
