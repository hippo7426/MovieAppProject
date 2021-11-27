import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
    return <header className="main_header">
        <span id="Logo">SJ</span>
        <nav>
            <ul className="header_links">
                <NavLink to="/"  >
                    <li>
                        Movie
                    </li>
                </NavLink>
                <NavLink to="/TV">
                    <li>
                        TV
                    </li>
                </NavLink>
            </ul>
        </nav>
    </header>;
}

export default Header;