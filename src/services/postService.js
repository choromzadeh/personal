import http from './httpServices';
import config from '../../src/config.json';

export function createPost (post) {

    return http.post(config.api_post,post)
    
}

export function getPosts(){
    return http.get(config.api_post);
}

export function deletePost(postId){
    return http.delete(config.api_post + '/' + postId);
}

export function getPostcount(){
    return http.get(config.api_post + '/count' );
}

export function updatePost(post){
    const body = {...post};
    delete body._id;
    return http.put(`${config.api_post}/${post._id}`,body);
}