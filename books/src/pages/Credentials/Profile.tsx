import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  Profile_Container,
  Line,
} from "../../components/styles/Profile.styled";

interface IUser {
  id?: number;
  name: string;
  email: string;
  profile_picture: string;
}

//ou interface request aqui, em baixo para exemplificar

function Profile() {

  /* "id": 4,
    "name": "Christophe Soares",
    "email": "csoares@ufp.edu.pt",
    "profile_picture": "https://i1.rgstatic.net/ii/profile.image/272341594800128-1441942704107_Q512/Christophe-Soares.jpg"
 */
  const fetchedToken = localStorage.getItem("token");
  const [userData, setUserData] = useState<IUser>(); 


  /*  function updateUser(data) {
        setUserData(data)
    }
 */
  useEffect(() => {
   
    const request : {method: string, headers: {[key: string]: string, Authorization: string} }= {
                                                //como content type é string usamos [key: string]
      method: "GET",
      headers: {
        "Content-Type": "application/json", //por causa do - tem ''
        Authorization: fetchedToken ?? '',
      },
    };

    async function fetchById() {
      //aqui nao é o url absoluto porque precisa de proxy, no json properties
      const response = await fetch(`/api/user/profile`, request); 
      console.log(response);
      const json = await response.json();
      setUserData(json.data);
    }
    fetchById();
  }, []);

  return (
    <>
      <Header />
      <Profile_Container>
        <Line>
          <h1 className="profile-title">Your profile :) </h1>
        </Line>
        <img src={userData?.profile_picture} alt="profile picture" />
        <h2 className="profile-name">{userData?.name}</h2>
        <p className="profile-email">{userData?.email}</p>
      </Profile_Container>
      <Footer />
    </>
  );
}

export default Profile;
