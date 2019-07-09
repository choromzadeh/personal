import React, { Component } from 'react';
import getNavLinks from './../services/navLinks';
import personal_IMG from '../images/IMG-personal.jpg';
import { Link } from 'react-router-dom';



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
                            src={personal_IMG}
                            className="img-thumbnail img-fluid"
                            alt=""
                            height='200'
                            width='200'
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
                                <Link className="nav-link " to={l.link}>
                                    <span className={l.icon}></span>
                                    <span className="m-2" >{l.text}</span>
                                </Link>
                        </li>
                        ))}
                        
                        
                    </ul>


                </div>

            </nav>
         );
    }
}
 
export default SideBar;