import styled from "styled-components";

export const Credentials_Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  background-color: rgb(246, 239, 234);
  position: absolute;
  top: 40%;
  left: 50%;
  padding: 60px;
  transform: translate(-50%, -50%);
  min-width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 60px;
  gap: 30px;
  
  form{
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 30px;
  align-items: center;
}

  input{
    padding: 12px;
    border-radius: 10px;
    border: none;
    outline: none;
    }

     a, p{
  margin-top: -10%;
  background: linear-gradient(94.99deg, #270a0f -3.88%, #ea2eff 120.78%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: "Inria Serif", serif;
  font-size: 12x;
   }
`

export const Title = styled.h2`
 background: linear-gradient(94.99deg, #b65667 -3.88%, #ea2eff 120.78%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: "Inria Serif", serif;
  font-size: 28px;
`

export const Message_Login = styled.span`
    margin-bottom: 20px;
    color: ${(props) => props.color === "Login successful!" ? "green" : "red"}
`

export const Message_Register = styled.span`
    margin-bottom: 20px;
    color: ${(props) => props.color === "Register successful!" ? "green" : "red"}
`