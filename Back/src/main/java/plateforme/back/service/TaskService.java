package plateforme.back.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import plateforme.back.dto.TaskDTO;
import plateforme.back.repository.TaskRepository;

import java.util.List;

@Service
public class TaskService {

    private final TaskRepository repository;
    private TaskCategoryService taskCategoryService;

    @Autowired
    public TaskService(TaskRepository repository, TaskCategoryService taskCategoryService) {
        this.repository = repository;
        this.taskCategoryService = taskCategoryService;
    }

    public List<TaskDTO> getAllDTO(){
        return this.repository.getAllDTO();
    }
}
