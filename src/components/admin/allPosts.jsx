import React, { Component } from 'react';
import getPosts from '../../services/fakePosts';
import Pagination from './../pagination';
import pagiantion from '../../utils/pagination';

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

        componentDidMount(){
            const posts = getPosts();
            this.setState({ posts });
        }

    
        handlePageChange=(page)=> {
            this.setState({ currentPage: page  });
        }
    
    render() { 
        const {currentPage, pageSize} = this.state;
        const {data, totalCount} = this.getPageData();
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
                                <tr key={p.id}>
                                    <td scope="row">{p.id}</td>
                                    <td scope="row">{p.postTitle}</td>
                                    <td scope="row">{p.postDate}</td>
                                    <td scope="row">{p.like}</td>
                                    <td><button type="button" class="btn btn-success">ویرایش</button></td>
                                    <td><button type="button" class="btn btn-danger">حذف</button></td>
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
