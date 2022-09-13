import styled from 'styled-components';

export const Home_Container = styled.div`
    padding: 40px 200px;
    display: flex;
    gap: 250px;

img {
    margin-top: 40px;
    padding: 25px;
    background: linear-gradient(160.7deg, #ea5470 0%, #da79e5 100%);
    width: 25%;
    height: 25%;
    cursor: pointer;

    //porque nao da?
    @media (max-width: 1464px){
        width: 40%;
        padding: 1.5%;
    }
}

@media (max-width: 1464px){
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
    }


`

export const Home_Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;

 h1{
   margin-right: auto;
   margin-top: 70px;
   background: linear-gradient(94.99deg, #ea5470 -3.88%, #da79e5 120.78%);
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
   background-clip: text;
   font-family: "Inria Serif", serif;
   font-size: 38px;

   @media (max-width: 1464px){
    font-size: 25px;
    margin-right: 0;
    }
 }

 p{
  margin-top: 20px;
  color: black;
  font-family: "Inria Serif", serif;
  font-size: 25px;

  @media (max-width: 1464px){
    font-size: 15px;
    margin-right: 0;
    }
 }
 
`



