package com.rishi4d.adda_service.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.rishi4d.adda_service.controller.PostController;
import com.rishi4d.adda_service.entity.PostEntity;
import com.rishi4d.adda_service.model.Post;
import com.rishi4d.adda_service.repository.PostEntityRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class PostServiceImpl implements PostService{

    private PostEntityRepository postEntityRepository;

    public PostServiceImpl(PostEntityRepository postEntityRepository) {
        this.postEntityRepository = postEntityRepository;
    }

    @Override
    public Post addPost(Post post) throws Exception {
        try {
            PostEntity postEntity = new PostEntity();
            BeanUtils.copyProperties(post, postEntity);

            Logger logger = LoggerFactory.getLogger(PostServiceImpl.class);

            logger.debug("Inside PostServiceImpl - addPost(), post -"+post);
            logger.debug("Inside PostServiceImpl - addPost(), postEntity -"+postEntity);

            if(post.getFile() != null && !post.getFile().equalsIgnoreCase(("null")))
                postEntity.setImage(post.getFile());
            else
                postEntity.setImage(null);

            logger.debug("Before Saving postEntity -"+postEntity);

            postEntity = postEntityRepository.save(postEntity);
            post.setId(postEntity.getId());
            post.setFile(post.getFile());
            post.setImage(post.getFile());

        } catch (Exception e) {
            throw new Exception("Could not save Post : " + e);
        }

        return post;
    }

    @Override
    public List<Post> getPost() {
        List<PostEntity> postEntities = postEntityRepository.findAllByOrderByTimestampDesc();
        List<Post> posts = new ArrayList<>();
        posts = postEntities.stream()
                .map((postEntity) ->
                    Post.builder()
                            .id(postEntity.getId())
                            .timestamp(postEntity.getTimestamp())
                            .email(postEntity.getEmail())
                            .name(postEntity.getName())
                            .post(postEntity.getPost())
                            .image(postEntity.getImage())
                            .profilePic(postEntity.getProfilePic())
                            .build())
                        .collect(Collectors.toList());
        return posts;
    }
}
