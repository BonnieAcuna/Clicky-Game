import React from "react";

const Navbar = (props) => (
  <nav className="navbar navbar-light bg-dark">



    <div className="row">
      <h1 className="text-light">Clicky Game! Pizza Edition</h1>
    </div>
    <div className="row">
      <h3 className="middle text-light">Click on a pizza to earn points, but don't click more than once!</h3>
    </div>
    
    <span className="message text-center h3 text-light">{props.message}</span>

    <span className="text-light font-weight-bold">
      Score: <span>{props.correct}</span>&nbsp;
     Top Score: <span>{props.topscore}</span>
    </span>
   

  </nav>
)
export default Navbar;