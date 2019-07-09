import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import getAdminNavLinks from './../../services/adminNavLinks';



class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    
    render() { 
        const AdminNavLinks = getAdminNavLinks();
        return ( 
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                <div className="sidebar-sticky">
                    
                    

                    <ul class="nav flex-column">
                        {AdminNavLinks.map(l =>  (
                            <li className="nav-item" key={l.id}>
                                <Link className="nav-link " to={l.link}>
                                    <span className={l.icon}></span>
                                    <span className="m-2" >{l.text}</span>
                                </Link>

                                <hr className="shadow"/>
                        </li>
                         
                        
                        ))}
                        
                        
                    </ul>


                </div>

            </nav>
         );
    }
}
 
export default SideBar;