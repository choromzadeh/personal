import React from 'react';
import SearchBar from './searchBar';

const Navbar = () => {
    return ( 
        <nav className="rtl navbar navbar-dark bg-dark flex-md-nowrap p-0 shadow sticky-top">
            <a className="navbar-brand col-sm-3 col-md-2 mr-0 " href='#'>وب سایت شخصی</a>
            <SearchBar></SearchBar>
            <ul className="navbar-nav px-3">
                <li className="nav-item text-nowrap">
                <a className="nav-link" href="/login">
                        ورود
                    </a>
                </li>
            </ul>
            
        </nav>
     );
}
 
export default Navbar;
