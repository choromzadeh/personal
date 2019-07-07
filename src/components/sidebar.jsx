import React, { Component } from 'react';
import getNavLinks from './../services/navLinks';


class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    
    render() { 
        const navLinks = getNavLinks();
        return ( 
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                <div className="sidebar-sticky">
                    <div className="text-center">
                        <img
                            src="https://via.placeholder.com/200x200"
                            className="img-thumbnail img-fluid"
                            alt=""
                        />
                        <span className="card bg-danger shadow user-fullname">
                            محمد چرم زاده
                        </span>
                        <p className="mt-2">Front-End Developer</p>
                    </div>
                    <hr className="shadow"/>

                    <ul class="nav flex-column">
                        {navLinks.map(l =>  (
                            <li className="nav-item" key={l.id}>
                                <a className="nav-link " href={l.link}>
                                    <span className={l.icon}></span>
                                    <span className="m-2" >{l.text}</span>
                                </a>
                        </li>
                        ))}
                        
                        
                    </ul>


                </div>

            </nav>
         );
    }
}
 
export default SideBar;