package plateforme.back.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import plateforme.back.form.TaskForm;
import plateforme.back.object.Category;
import plateforme.back.object.Project;
import plateforme.back.object.Task;
import plateforme.back.repository.TaskRepository;

import java.util.List;

@Service
public class TaskService {
	
	private final CategoryService categoryService;

    private final TaskRepository repository;

    @Autowired
    public TaskService(TaskRepository repository, CategoryService categoryService) {
        this.repository = repository;
        this.categoryService = categoryService;
    }

    public List<Task> getAllDTO(){
        return this.repository.findAll();
    }

	public void createTasks(List<TaskForm> tasks, Project project) {
        for(TaskForm task : tasks) {
        	Task createdTask = new Task(task);
            List<Category> categories = this.categoryService.persistCategories(task.getCategories());
            createdTask.setCategories(categories);
        	createdTask.setProject(project);
        	repository.save(createdTask);
        }
	}
}
