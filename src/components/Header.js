import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return <header className="main_header">
        <span id="Logo">SJ</span>
        <nav>
            <ul className="header_links">
                <li>
                    <Link to="/">Movie</Link>
                </li>
                <li>
                    <Link to="/TV">TV</Link>
                </li>
            </ul>
        </nav>
    </header>;
}

export default Header;