package com.backend.controller;

import com.backend.Services.CarServices;
import com.backend.entity.CarEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/carsAll")
@CrossOrigin(origins = "http://localhost:3000")
public class CarController {
    @Autowired
    private CarServices carServices;

    // Get all menu items
    @GetMapping("/items")
    public List<CarEntity> getAllMenuItems() {
        return carServices.getAllMenuItems();
    }

    // Get menu items by category
    @GetMapping("/items/category/{category}")
    public List<CarEntity> getMenuItemsByCategory(@PathVariable String category) {
        return carServices.getMenuItemsByCategory(category);
    }

    // Get menu item by ID
    @GetMapping("/items/{id}")
    public CarEntity getMenuItemById(@PathVariable Long id) {
        return carServices.getMenuItemById(id);
    }

    // Add a new menu item
    @PostMapping("/items")
    public CarEntity addMenuItem(@RequestBody CarEntity menuItem) {
        return carServices.addMenuItem(menuItem);
    }

    // Update a menu item
    @PutMapping("/items/{id}")
    public CarEntity updateMenuItem(@PathVariable Long id, @RequestBody CarEntity menuItem) {
        CarEntity existingMenuItem = carServices.getMenuItemById(id);
        if (existingMenuItem != null) {
            menuItem.setId(id);
            return carServices.updateMenuItem(id, menuItem);
        }
        return null; // Return null or handle error as needed
    }

    // Delete a menu item
    @DeleteMapping("/items/{id}")
    public void deleteMenuItem(@PathVariable Long id) {
        carServices.deleteMenuItem(id);
    }
}
