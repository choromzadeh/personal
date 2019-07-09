import React, { Component } from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
import { Switch } from 'react-router-dom';

class Dashboard extends Component {
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
                            {/* <Switch>
                                <Route path="/courses" component={Courses}/>
                                <Route path="/education" component={Education}/>
                                <Route path="/skills" component={Skills}/>
                                <Route path="/about" component={About}/>
                                <Route path="/contact" component={Contact}/>
                                <Route path="/" exact component={Posts}/>
                                <Redirect to="not-found"/>
                            </Switch> */}
                            
                            
                          
                        </main>
                    </div>
                </div>
                
            </React.Fragment>
        );
    }
}

export default Dashboard;
