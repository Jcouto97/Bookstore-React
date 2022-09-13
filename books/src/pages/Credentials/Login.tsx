import React, { useRef, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Link, useNavigate } from "react-router-dom";
import {
  Credentials_Container,
  Title,
  Message_Login,
} from "../../components/styles/Credentials.styled";
import { Button } from "../../components/styles/Button.styled";

function Login() {
  const email = useRef<HTMLInputElement>(); //nao devia ser <string> ???
  const password = useRef<HTMLInputElement>();

  const navigate = useNavigate();

  //message para o user
  const [message, setMessage] = useState<string>("");

  //para guardar o token
  const [token, setToken] = useState<string>("");

  const [userId, setUserId] = useState<string>("");

  console.log(token);
  console.log(userId);

  async function handleSubmit(event: any) {
    event.preventDefault();

    const request = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      //email.current.value maneira de aceder ao useRef
      body: JSON.stringify({
        email: email?.current?.value,
        password: password?.current?.value,
      }),
    };

    // search?.current?.value.toLowerCase() ?? ""

    try {
      const response = await fetch(
        "https://ancient-temple-61124.herokuapp.com/api/auth/login",
        request
      );
      const json = await response.json();

      if (!json.status) {
        setMessage(json.message);
        setToken("");
      } else {
        setToken(json.data.token);
        setUserId(json.data.id);
        setMessage("Login successful!");
        localStorage.setItem("token", json.data.token);
        localStorage.setItem("id", json.data.id);
      }
    } catch (err: any) {
      //CORRETO?
      console.log(err.message);
    }
  }

  //set timeout antes de navegar
  if (message === "Login successful!") {
    setTimeout(() => {
      navigate("/bookspage");
    }, 2000);
  }

  return (
    <>
      <Header />
      <Credentials_Container>
        <Title>Login to your Account</Title>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">
            {/* ref para poder guardar nas variaveis useRef acima */}
            <input
              ref={email}
              type="text"
              name="email"
              placeholder="Email"
              required
            />
          </label>
          <label htmlFor="password">
            <input
              ref={password}
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </label>
          <Button width="100px" type="submit">
            Login
          </Button>
        </form>
        <Message_Login color={message}>{message}</Message_Login>
        <p>
          Don't have an account?
          <Link to="/register">
            {" "}
            <strong> Register here</strong>
          </Link>
        </p>
      </Credentials_Container>
      <Footer />
    </>
  );
}

export default Login;
