import React, { Component } from 'react';
import ParticlesBg  from "particles-bg";


class Header extends Component {
  render() {

    if(this.props.data){
      var logopic = "images/"+this.props.data.logo;
      var description= this.props.data.description;
    }

    return (
      <header id="home">
      <ParticlesBg type="circle" bg={true} />
      <nav id="nav-wrap">
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">¿Quienes somos?</a></li>
         </ul>
      </nav>

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
