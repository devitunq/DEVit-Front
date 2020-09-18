import React from "react";
import "./Logo.css"

const Logo = () => {
  return (
    <div className="logo-startpage">
      <img
        className="logo-start"
        src={"/images/Logo.png"}
        alt="logo"
      />
    </div>
  )
}

export { Logo }