package com.backend.Services;
import com.backend.entity.CarEntity;
import com.backend.repo.CarRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CarServices {

    @Autowired
    private CarRepo carRepo;

    // Get all menu items
    public List<CarEntity> getAllMenuItems() {
        return carRepo.findAll();
    }

    // Get menu items by category
    public List<CarEntity> getMenuItemsByCategory(String category) {
        return carRepo.findByCategory(category);
    }

    // Get menu item by ID
    public CarEntity getMenuItemById(Long id) {
        Optional<CarEntity> menuItemOptional = carRepo.findById(id);
        return menuItemOptional.orElse(null);
    }

    // Add a new menu item
    public CarEntity addMenuItem(CarEntity menuItem) {
        return carRepo.save(menuItem);
    }

    // Update an existing menu item
    public CarEntity updateMenuItem(Long id, CarEntity updatedMenuItem) {
        Optional<CarEntity> existingMenuItemOptional = carRepo.findById(id);
        if (existingMenuItemOptional.isPresent()) {
            CarEntity existingMenuItem = existingMenuItemOptional.get();
            existingMenuItem.setName(updatedMenuItem.getName());
            existingMenuItem.setCategory(updatedMenuItem.getCategory());
            existingMenuItem.setDescription(updatedMenuItem.getDescription());
            existingMenuItem.setPrice(updatedMenuItem.getPrice());
            // Add logic for updating photo URL if needed
            existingMenuItem.setPhotoUrl(updatedMenuItem.getPhotoUrl());
            return carRepo.save(existingMenuItem);
        } else {
            return null; // Handle if menu item with given id is not found
        }
    }

    // Delete a menu item
    public void deleteMenuItem(Long id) {
        carRepo.deleteById(id);
    }
}
