package com.rishi4d.adda_service.service;

import com.rishi4d.adda_service.model.Post;

import java.util.List;

public interface PostService {
    Post addPost(Post post) throws Exception;

    List<Post> getPost();
}
