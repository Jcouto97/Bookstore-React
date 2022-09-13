import styled from "styled-components";

export const Profile_Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 105px;
  background-color: rgb(246, 239, 234);
  position: absolute;
  top: 40%;
  left: 50%;
  padding: 40px;
  transform: translate(-50%, -50%);
  min-width: 500px;
  max-height: 80%;
  justify-content: center;
  align-items: center;
  gap: 30px;
  font-family: "Inria Serif", serif;

  h1{
    background: linear-gradient(94.99deg, #b65667 -3.88%, #ea2eff 120.78%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-family: "Inria Serif", serif;
    font-size: 25px;
  }

  img{
    border-radius: 50%;
    max-height: 450px;
    border: 2px solid #ff2ec8;
  }

  h2{
    font-weight: 400;
  }

  p{
    padding: 6px;
    background-color: white;
    border: 1px solid grey;
  }
`

export const Line = styled.span`
    border-bottom: 1px solid;
    border-bottom-color: #ff2ec8;
    width: 100%;
`
