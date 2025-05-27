package com.backend.controller;


import com.backend.Services.TestService;
import com.backend.entity.TestDrive;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/bookings")
public class TestController {
    @Autowired
    private TestService testService;

    @GetMapping("/details")
    public List<TestDrive> getAllBookings() {
        return testService.getAllBookings();
    }

    @GetMapping("/{id}")
    public TestDrive getBookingById(@PathVariable Long id) {
        return testService.getBookingById(id);
    }

    @PostMapping("/NewBooking")
    public TestDrive createBooking(@RequestBody TestDrive booking) {
        return testService.createBooking(booking);
    }

    @DeleteMapping("/{id}")
    public void deleteBooking(@PathVariable Long id) {
        testService.deleteBooking(id);
    }
}
