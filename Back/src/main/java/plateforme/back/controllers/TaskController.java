package plateforme.back.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import plateforme.back.object.Task;
import plateforme.back.service.TaskService;

@RestController
@RequestMapping("/task")
public class TaskController {

    private final TaskService service;

    public TaskController(TaskService service){
        this.service = service;
    }

    @GetMapping("/dto")
    public List<Task> getAllDTO(){
        return this.service.getAllDTO();
    }
}
