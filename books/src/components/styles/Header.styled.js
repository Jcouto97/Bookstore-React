import styled from 'styled-components';

export const StyledHeader = styled.header`
    background-color: #f6f6f6;
    //width: 100vh;
`

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Slogan = styled.div`
    display: flex;
    align-items: center;
    background: linear-gradient(94.99deg, #ea5470 -3.88%, #da79e5 120.78%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-family: "Inria Serif", serif;
    font-size: 16px;
    gap: 10px;

    /* como tem imagem dentro podemos aceder assim, como no Sass */
    img {
        width: 40px;
        height: 40px;
    }
`

export const Sign_Out = styled.a`
    padding: 2px;;
    text-decoration: none;
    font-weight: 500;
    font-size: 18px;
    font-family: "Inria Serif", serif;
    border: solid 1px #ef67d2;
    background-color: transparent;
    border-radius: 4px;
    cursor: pointer;
`

export const Header_Links = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
    font-size: 18px;
    font-family: "Inria Serif", serif;
    //background: linear-gradient(#d4937f, red) bottom / 0 0.1em no-repeat;
    //transition: 0.2s background-size;

    a:hover{
        color: #e579af;
    }
/*     a{
        :hover{
            background-size: 100% 0.1em;
        }

        .left {
    background-position: left bottom;
    }

    .rigth {
    background-position: right bottom;
    } 
    } */
/*   a:hover{
    background-size: 100% 0.1em;
    }
    
  a.left {
    background-position: left bottom;
    }

  a.rigth {
    background-position: right bottom;
    } */
`
