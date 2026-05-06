package com.app.repository;

import com.app.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import java.time.LocalDate;
import java.util.List;

public interface TaskRepository extends JpaRepository<Task, Long> {

    //get overdue task
    List<Task> findByDueDateBeforeAndStatus(LocalDate date, String status);

    //get tasks sorted by deadline
    List<Task> findAllByOrderByDueDateAsc();

    //get tasks by priority
    List<Task> findByPriority(String priority);
    
    

}