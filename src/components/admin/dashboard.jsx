import React, { Component } from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
import { Switch, Route, Redirect } from 'react-router-dom';
import AllPosts from './allPosts';
import CreatePost from './createPost';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditPost from './editPost';

class Dashboard extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="container-fluid rtl">
                <ToastContainer/>
                    <div className="row">
                        <Sidebar />
                        <main
                            role="main"
                            className="col-md-9 ml-sm-auto col-lg-10 px-4"
                        >
                            <Switch>
                                <Route path="/admin/allposts" component={AllPosts}/>
                                <Route path="/admin/create-post" component={CreatePost}/>
                                <Route path="/admin/editpost" component={EditPost}/>
                                
                                
                                {/* <Redirect to="/not-found"/> */}
                            </Switch>
                            
                            
                          
                        </main>
                    </div>
                </div>
                
            </React.Fragment>
        );
    }
}

export default Dashboard;
