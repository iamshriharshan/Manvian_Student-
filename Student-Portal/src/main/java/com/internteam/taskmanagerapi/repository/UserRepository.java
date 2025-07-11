package com.internteam.taskmanagerapi.repository;

import com.internteam.taskmanagerapi.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
    Optional<User> findByUsername(String username);
    List<User> findByRolesContaining(String role); // Add this if not auto-derived
}