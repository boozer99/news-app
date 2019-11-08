import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = () =>{
    return(
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <Link className="brand-logo" to="/">nav</Link>
            <ul className="right">
                <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to='/register'>Regster</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
      </div>
    </nav> 
    )
}

export default withRouter(Navbar)