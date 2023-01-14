import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <a className="navbar-brand" href="/#"><p className="text-white">Marse</p></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars} style={{color: "#fff"}}/>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mx-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/#">Home <span class="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/#">O firmie</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/#">Usługi</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/#">Oferty </a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="/#">Portfolio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/#">Kontakt</a>
      </li>
    </ul>
  </div>
</nav>
    )
}
export default Navbar