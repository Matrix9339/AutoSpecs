package com.backend.Services;

import com.backend.entity.TestDrive;
import com.backend.repo.TestRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TestService {
    @Autowired
    private TestRepo testRepo;

    public List<TestDrive> getAllBookings() {
        return testRepo.findAll();
    }

    public TestDrive getBookingById(Long id) {
        return testRepo.findById(id).orElse(null);
    }

    public TestDrive createBooking(TestDrive booking) {
        return testRepo.save(booking);
    }

    public void deleteBooking(Long id) {
        testRepo.deleteById(id);
    }
}
