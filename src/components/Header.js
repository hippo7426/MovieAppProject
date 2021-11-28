import React from 'react';
import { NavLink, Link, useLocation, useResolvedPath } from 'react-router-dom';
import './Header.css';

function MyLink({ to, active, children}) {
    let { pathname: curPath } = useLocation();
    let { pathname: toPath } = useResolvedPath(to);
    let isActive = false;

    if ((curPath.startsWith(active)) || curPath === toPath)
        isActive = true;

    let className = isActive ? 'active' : null;

    return (
        <Link to={to} className={className}>
            {children}
        </Link>
    );
}

function Header() {
    return <header className="main_header">
        <div id="Logo">SJ</div>
        <nav>
            <ul className="header_links">
                <MyLink to="/" active="/movie" >
                    <li>
                        Movie
                    </li>
                </MyLink>
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