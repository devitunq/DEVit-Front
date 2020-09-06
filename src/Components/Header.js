import React, { Component } from 'react';
import ParticlesBg  from "particles-bg";
import Navbar from "../Components/Generics/Navbar";


class Header extends Component {
  render() {

    if(this.props.data){
      var logopic = "images/"+this.props.data.logo;
      var description= this.props.data.description;
    }

    return (
      <header id="home">
      <ParticlesBg type="circle" bg={true} />

      <Navbar/>

      <div className="row banner">
      
         <div className="banner-text">
            <img id="logoDevit" className="logo-pic" src={logopic} />
            <h3 id="descDevit">{description}.</h3>
            <hr />
            <ul className="social">
               <a id="playButton" className="button btn btn-primary"><i className="fa fa-play"></i>Iniciar el juego</a>
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
