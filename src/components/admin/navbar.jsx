import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { async } from 'q';
import {getPostcount} from '../../services/postService';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            postCount:''
         }
    }

    async componentDidMount(){
        const {data: postCount} = await getPostcount();
        this.setState({ postCount: postCount.count  });
    }
    render() {  
        return ( 
            <nav className="rtl navbar navbar-dark bg-dark flex-md-nowrap p-0 shadow sticky-top">
            <a className="navbar-brand col-sm-3 col-md-2 mr-0 " href='#'>
                سلام محمد
            </a>
            <p className="mt-2" style={{ color: 'white' }}>
                تعداد پست ها:
                <span className="badge badge-warning badge-pill m-1">{this.state.postCount}</span>
            </p>
            <p className="mt-2" style={{ color: 'white' }}>
                تعداد دوره ها:
                <span className="badge badge-warning badge-pill m-1">#</span>
            </p>
            <ul className="navbar-nav px-3">
                <li className="nav-item text-nowrap">
                <Link className="nav-link" to="/login">
                        خروج
                    </Link>
               
                </li>
            </ul>
            
        </nav>
         );
    }
}
 
export default Navbar;
 

