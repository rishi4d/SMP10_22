package com.rishi4d.adda_service.repository;

import com.rishi4d.adda_service.entity.PostEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostEntityRepository extends JpaRepository<PostEntity, String> {


}
