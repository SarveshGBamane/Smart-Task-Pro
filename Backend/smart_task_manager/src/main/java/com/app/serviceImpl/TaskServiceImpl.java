package com.app.serviceImpl;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.model.Task;
import com.app.repository.TaskRepository;
import com.app.service.TaskService;

@Service
public class TaskServiceImpl implements TaskService{
	
	@Autowired
    private TaskRepository repo;

    
    public Task saveTask(Task task) {
        return repo.save(task);
    }

   
    public List<Task> getAllTasks() {
        return repo.findAll();
    }

  
    public void deleteTask(Long id) {
        repo.deleteById(id);
    }

   
    public List<Task> getOverdueTasks() {
        return repo.findByDueDateBeforeAndStatus(LocalDate.now(), "PENDING");
    }

  
    public String getSmartSuggestion() {

        
        List<Task> sortedTasks = repo.findAllByOrderByDueDateAsc();
        List<Task> highTasks = repo.findByPriority("HIGH");

        // rule 1: Too many high priority tasks
        if (highTasks.size() > 5) {
            return "You have too many high priority tasks!";
        }

        // rule 2: Check nearest deadline
        for (Task t : sortedTasks) {
            if (t.getStatus().equals("PENDING")) {
                return "Complete this first: " + t.getTitle();
            }
        }

        // Default
        return "You're on track. Keep going!";
    }

    public Map<String, Object> getAnalytics() {

        List<Task> tasks = repo.findAll();

        long total = tasks.size();

        long completed = tasks.stream()
                .filter(t -> t.getStatus().equals("COMPLETED"))
                .count();

        long pending = total - completed;

        Map<String, Object> map = new HashMap<>();
        map.put("total", total);
        map.put("completed", completed);
        map.put("pending", pending);

        return map;
    }
    
    @Override
    public Task updateTask(Long id, Task task) {

        Task existing = repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Task not found"));

        existing.setTitle(task.getTitle());
        existing.setDescription(task.getDescription());
        existing.setPriority(task.getPriority());
        existing.setStatus(task.getStatus());
        existing.setCategory(task.getCategory());
        existing.setDueDate(task.getDueDate());

        return repo.save(existing);
    }
}