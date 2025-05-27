package com.backend.repo;

import com.backend.entity.CarEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CarRepo extends JpaRepository<CarEntity, Long> {
    List<CarEntity> findByCategory(String category);
}
