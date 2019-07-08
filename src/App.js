import React, { Component } from 'react';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Posts from './components/posts';
import Footer from './components/footer';
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";
import Pagination from './components/pagination';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import Courses from './components/courses';
import Education from './components/educations';
import Skills from './components/skills';
import About from './components/about';
import Contact from './components/contact';
import { Switch } from 'react-router-dom';

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
                            <Switch>
                                <Route path="/courses" component={Courses}/>
                                <Route path="/education" component={Education}/>
                                <Route path="/skills" component={Skills}/>
                                <Route path="/about" component={About}/>
                                <Route path="/contact" component={Contact}/>
                                <Route path="/" component={Posts}/>
                            </Switch>
                            
                            
                          
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
