package com.app.service;

import com.app.model.Task;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

@Service
public interface TaskService {

	Task saveTask(Task task);

    List<Task> getAllTasks();

    void deleteTask(Long id);

    List<Task> getOverdueTasks();

    String getSmartSuggestion();

    Map<String, Object> getAnalytics();
    
    Task updateTask(Long id, Task task);
}
