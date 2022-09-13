import React, { useEffect, useState } from 'react'
import { StyledFooter, Footer_Container, Footer_Text, Footer_Images } from './styles/Footer.styled'
import { Container } from './styles/Container.styled';
import { useLocation } from "react-router-dom";
/* import facebooklogo from "../assets/logo-facebook.png";
import instagramlogo02 from "../assets/logo-instagram02.png";
import twitterlogo from "../assets/logo-twitter.png"; */

function Footer() {

    const location = useLocation();
    const [isFooterAbsolute, setIsFooterAbsolute] = useState(true); //useStat<boolean>(true)

    useEffect(() => {

        if (location.pathname === '/bookspage') {
            setIsFooterAbsolute(false);
        }

    }, []);

    return (
        //se o isFooterAbsolute é um boolean porque da erro?
        //No overload matches this call
        <StyledFooter isFooterAbsolute={isFooterAbsolute}>
            <Container>
                <Footer_Container>
                    <Footer_Text>
                        <h2>© BookStore 2022</h2>
                    </Footer_Text>
                    <Footer_Images>
                        <img src={require('../assets/logo-facebook.png')} alt="facebooklogo" />
                        <img src={require('../assets/logo-instagram02.png')} alt="instagramlogo" />
                        <img src={require('../assets/logo-twitter.png')} alt="twitterlogo" />
                    </Footer_Images>
                </Footer_Container>
            </Container>
        </StyledFooter>
    )
}

export default Footer

/*
passo o state como boolean como prop, no footer faço conditional rendering com ternario caso v absolute caso f relative
*/