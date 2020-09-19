import React from "react";
import ParticlesBg from "particles-bg";
import Navbar from "../Generics/Navbar";
import Banner from "../Others/Banner";

const Home = () => {
  const description =
    "¡Bienvenido a DEVit!, un juego donde podrás aprender a programar divirtiendote" +
    "y poniendo a prueba tus conocimientos.";

  return (
    <header id="home">
      <ParticlesBg type="circle" bg={true} />

      <Navbar />

      <Banner description={description} />
    </header>
  );
};

export default Home;
