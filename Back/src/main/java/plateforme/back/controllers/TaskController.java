package plateforme.back.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import plateforme.back.dto.TaskDTO;
import plateforme.back.object.Task;
import plateforme.back.service.TaskService;

import java.util.List;

@RestController
@RequestMapping("/task")
public class TaskController {

    private final TaskService service;

    public TaskController(TaskService service){
        this.service = service;
    }

    @GetMapping("/dto")
    public List<TaskDTO> getAllDTO(){
        return this.service.getAllDTO();
    }
}
