package com.backend.repo;

import com.backend.entity.TestDrive;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TestRepo extends JpaRepository<TestDrive, Long> {
}
