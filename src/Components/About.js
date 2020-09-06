import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var bio = this.props.data.bio;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="nine columns main-col">
            <h2>Sobre nosotros</h2>
            <p id="bioParagraph">{bio}</p>
            <div className="row">
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
