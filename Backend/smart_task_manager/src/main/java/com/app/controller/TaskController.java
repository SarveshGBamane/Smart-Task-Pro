package com.app.controller;

import com.app.model.Task;
import com.app.service.TaskService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/tasks")
@CrossOrigin(origins = "http://localhost:4200")
public class TaskController {

    @Autowired
    private TaskService service;

    @PostMapping
    public Task createTask(@RequestBody Task task) {
        return service.saveTask(task);
    }

    @GetMapping
    public List<Task> getAllTasks() {
        return service.getAllTasks();
    }

    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable Long id) {
        service.deleteTask(id);
    }

    @GetMapping("/overdue")
    public List<Task> getOverdueTasks() {
        return service.getOverdueTasks();
    }

    @GetMapping("/suggestion")
    public String getSuggestion() {
        return service.getSmartSuggestion();
    }

    @GetMapping("/analytics")
    public Map<String, Object> getAnalytics() {
        return service.getAnalytics();
    }
    
    @PutMapping("/{id}")
    public Task update(@PathVariable Long id, @RequestBody Task task) {
        return service.updateTask(id, task);
    }
}