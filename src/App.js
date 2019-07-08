import React, { Component } from 'react';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Posts from './components/posts';
import Footer from './components/footer';
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";
import Pagination from './components/pagination';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="container-fluid rtl">
                    <div className="row">
                        <Sidebar />
                        <main
                            role="main"
                            className="col-md-9 ml-sm-auto col-lg-10 px-4"
                        >
                            <Posts />
                          
                        </main>
                    </div>
                </div>
                <Footer />
                <ScrollUpButton style={{left:10, bottom:40}} />
            </React.Fragment>
        );
    }
}

export default App;
