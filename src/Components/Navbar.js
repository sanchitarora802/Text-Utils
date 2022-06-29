import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
         <div className="container-fluid">
           <Link className="navbar-brand" to="/">TextUtils</Link>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/about">About Us</Link>
                 </li>
                </ul>
              </div>
            
              <div className={`form-check form-switch text-${props.mode===`light`?`dark`:`light`}`}>
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"></input>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
              </div>

        </div>
      </nav>
    </div>
  );
}
