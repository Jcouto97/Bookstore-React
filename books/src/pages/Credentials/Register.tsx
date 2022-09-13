import React, { useRef, useState } from 'react'
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Credentials_Container, Title, Message_Register } from '../../components/styles/Credentials.styled'
import { Button } from '../../components/styles/Button.styled'


function Register() {
  /*
name password email
  */
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const [message, setMessage] = useState("")

  async function handleSubmit(event: any) {
    event.preventDefault()

    const request = {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name?.current?.value,
        email: email?.current?.value,
        password: password?.current?.value
      })
    }

    try {
      const response = await fetch("https://ancient-temple-61124.herokuapp.com/api/auth/register", request)
      const result = await response.json()
      console.log(result)

      if (result.status === true) {
        setMessage("Register successful!");
      } else {
        setMessage("Register failed!");
      }
    } catch (err: any) {
      console.log(err.message);
    }

  }

    return (
      <>
        <Header />
        <Credentials_Container>
        <Title>Register below</Title>
          <form onSubmit={handleSubmit}> 
            <label htmlFor='name'>
              <input type="text" ref={name} name="name" placeholder="Name" required/>
            </label>
            <label htmlFor='email'>
              <input type="text" ref={email} name="email" placeholder="Email" required />
            </label>
            <label htmlFor='password'>
              <input type="password" ref={password} name="password" placeholder="Password" required/>
            </label>
            <Button width='100px' type="submit">Register</Button>
          </form>
          <Message_Register color={message} >{message}</Message_Register>
          <p >
						Already have an account?
						<Link to="/login"> <strong>Login here</strong></Link>
					</p>
          </Credentials_Container>
        <Footer />
      </>
    )
  }


export default Register;