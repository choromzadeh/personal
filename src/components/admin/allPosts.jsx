import React, { Component } from 'react';
import {getPosts,deletePost} from '../../services/postService';
import Pagination from './../pagination';
import pagiantion from '../../utils/pagination';
import { async } from 'q';
import { toast } from 'react-toastify';


class AllPosts extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            posts:[],
            currentPage:1,
            pageSize:5
         }
    }

    getPageData = () =>{
        const  {posts:allPosts,currentPage,pageSize} = this.state;
        const posts = pagiantion(allPosts,currentPage,pageSize);
        return {
            totalCount:allPosts.length,
            data: posts
        }
    }

       async componentDidMount(){
            const {data} = await getPosts();
            this.setState({ posts: data  });
        }

    
        handlePageChange=(page)=> {
            this.setState({ currentPage: page  });
        }

        handleDelete = async (postId) => {
            
            const originalPosts = this.state.posts;
            const posts = this.state.posts.filter(p => postId !== p._id);
            this.setState({ posts: posts  });
            try{
              const result = await deletePost(postId);
              if(result.status === 200){
                  toast.success("پست با موفقیت حذف شد");
              }
            }

            catch(ex){
                if(ex.response && ex.response.status === 404){
                    toast.error("پستی با این شناسه یافت نشد")
                }
                this.setState({ posts:originalPosts  });

            }
        }

        handleRedirect(post){
            this.props.history.push({
                pathname:"/admin/editpost",
                post: post
            })
        }
    
    render() { 
        const {currentPage, pageSize} = this.state;
        const {data, totalCount} = this.getPageData();
        let count = 1;
        return ( 
            <div class="container-fluid bg-light border rounded shadow">
                <table class="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>عنوان پست</th>
                            <th>تاریخ انتشار</th>
                            <th>تعداد پسند</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                            {data.map(p => (
                                <tr key={p._id}>
                                    <td scope="row">{count++}</td>
                                    <td scope="row">{p.postTitle}</td>
                                    <td scope="row">{p.postDate}</td>
                                    <td scope="row">{p.postLike}</td>
                                    <td><button type="button" class="btn btn-success" onClick={()=> this.handleRedirect(p)}>ویرایش</button></td>
                                    <td><button type="button" class="btn btn-danger" onClick={() => this.handleDelete(p._id)}>حذف</button></td>
                                </tr>
                            ))}
                      
                       
                    </tbody>
                </table>
                
                <Pagination currentPage={currentPage} pageSize={pageSize} itemCount={totalCount} onPageChange={this.handlePageChange}></Pagination>
            
            </div>
                
         );
    }
}
 
export default AllPosts;
