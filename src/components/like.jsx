import React, { Component } from 'react';
import { async } from 'q';
import {incPostLike} from '../services/postService';


class Like extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            post: this.props.post
         }
        //  this.handleLikeClick = this.handleLikeClick.bind(this);
    }


    handleLikeClick = async post => {
    const originalPost= this.state.post;
    const  likedPost = {...post }
    likedPost.postLike++;
    this.setState({ post: likedPost  });

    try{
        const result = await incPostLike(post._id);
    }
    catch(ex){
        this.setState({ post: originalPost  });
    }
    }
    render() { 
        const {post} = this.state;
        return ( 
            <div className="fa fa-heart float-left" style={{cursor:'pointer',color:'red'}} onClick={() => this.handleLikeClick(post)}>

                <span class="badge badge-pill badge-primary m-1"></span>
                {post.postLike}

            </div>
         );
    }
}
 
export default Like;