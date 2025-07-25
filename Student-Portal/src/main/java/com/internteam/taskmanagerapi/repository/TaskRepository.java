package com.internteam.taskmanagerapi.repository;

import com.internteam.taskmanagerapi.model.Task;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface TaskRepository extends MongoRepository<Task, String> {
    List<Task> findByTitleContainingIgnoreCase(String title);
}