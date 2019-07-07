import React, { Component } from 'react';


class Like extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            post: this.props.post
         }
        //  this.handleLikeClick = this.handleLikeClick.bind(this);
    }


    handleLikeClick = post => {
    const  likedPost = {...post }
    likedPost.like++;
    this.setState({ post: likedPost  });
    }
    render() { 
        const {post} = this.state;
        return ( 
            <div className="fa fa-heart float-left" style={{cursor:'pointer',color:'red'}} onClick={() => this.handleLikeClick(post)}>

                <span class="badge badge-pill badge-primary m-1"></span>
                {post.like}

            </div>
         );
    }
}
 
export default Like;