package com.rishi4d.adda_service.controller;

import com.rishi4d.adda_service.model.Post;
import com.rishi4d.adda_service.service.PostService;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/rest/v1/post")
public class PostController {
    private final PostService postService;

    public PostController(PostService postService) {
        this.postService = postService;
    }

    @PostMapping("addPost")
    public Post addPost(@RequestParam Map<String, String> requestParams) throws Exception{
        String strPost = requestParams.get("post");
        String email = requestParams.get("email");
        String name = requestParams.get("name");
        String file = requestParams.get("file");
        String profilePic = requestParams.get("profilePic");

        Post post = Post.builder()
                .file(file)
                .name(name)
                .email(email)
                .post(strPost)
                .profilePic(profilePic)
                .timestamp(new Date().toString())
                .build();
        post = postService.addPost(post);
        return post;
    }

    @GetMapping("getPost")
    public List<Post> getPost(){
        return postService.getPost();
    }
}