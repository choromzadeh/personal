import React, { Component } from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
import { Switch, Route, Redirect } from 'react-router-dom';
import AllPosts from './allPosts';

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
                            <Switch>
                                <Route path="/admin/allposts" component={AllPosts}/>
                                <Redirect to="not-found"/>
                            </Switch>
                            
                            
                          
                        </main>
                    </div>
                </div>
                
            </React.Fragment>
        );
    }
}

export default Dashboard;
