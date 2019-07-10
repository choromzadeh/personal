import React, { Component } from 'react';
import Like from './like';
import pagiantion from '../utils/pagination';
import Pagination from './pagination';
import { getPosts } from '../services/postService';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            posts:[],
            currentPage:1,
            pageSize:5
         }
    }

    async componentDidMount(){
        const {data} = await getPosts();
        this.setState({ posts: data });
    }

    handlePageChange=(page)=> {
        this.setState({ currentPage: page  });
    }

    getPageData = () =>{
      const  {posts:allPosts,currentPage,pageSize} = this.state;
      const posts = pagiantion(allPosts,currentPage,pageSize);
      return {
          totalCount:allPosts.length,
          data: posts
      }
      

    }
    render() { 
        const {currentPage,pageSize} = this.state; 
        const {totalCount, data} = this.getPageData();
        return (
            
            <React.Fragment>
                {data.map(post =>(
            <div class="container-fluid">
                <div className="card shadow-lg bg-light m-2">
                <article className="p-3">
                        <div className="card-header">
                            <h3 className="card-title">
                                
                                <a href="#">{post.postTitle}</a>
                            </h3>
                           <span className="card-subtitle">
                                <span className="fa fa-calendar m-2" />
                                {post.postDate}

                           </span>
                           <img
                                className="card-img"
                                src={post.postImageUrl}
                                alt=""
                            />
                        </div>
                        <div className="card-body">
                            <p className="card-text">
                                {post.postContent}
                            </p>
                        </div>
                        <div className="card-footer">
                            <ul className="list-inline float-right">
                                <li className="list-inline-item">
                                    <span className="fa fa-link m-1" />
                                    برچسب ها:
                                </li>
                                <li className="list-inline-item">
                                    <a href="#">{post.postTags}</a>
                                </li>
                            </ul>
                            <Like post={post}></Like>
                        </div>
                </article>
                </div>
            </div>
            ))}
            <Pagination currentPage={currentPage} pageSize={pageSize} itemCount={totalCount} onPageChange={this.handlePageChange}></Pagination>
            </React.Fragment>
         );
    }
}
 
export default Posts;
