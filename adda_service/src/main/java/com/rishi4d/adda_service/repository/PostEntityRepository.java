package com.rishi4d.adda_service.repository;

import com.rishi4d.adda_service.entity.PostEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostEntityRepository extends JpaRepository<PostEntity, String> {
    @Query("select p from PostEntity p order by p.timestamp DESC")
    public List<PostEntity> findAllByOrderByTimestampDesc();
}
