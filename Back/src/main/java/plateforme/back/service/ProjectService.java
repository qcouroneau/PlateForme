package plateforme.back.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import plateforme.back.form.ProjectForm;
import plateforme.back.object.Category;
import plateforme.back.object.Project;
import plateforme.back.object.User;
import plateforme.back.repository.ProjectRepository;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProjectService {
    
	@Autowired
    private CategoryService categoryService;
    
	@Autowired
    private TaskService taskService;

	@Autowired
	private ProjectRepository repository;

    @Autowired
    private UserService userService;

    @Autowired
    private  ProjectUserService projectUserService;

	@Autowired
    public ProjectService(final ProjectRepository repository, ImageService imageService, CategoryService categoryService,
    		TaskService taskService){
		this.repository = repository;
		this.categoryService = categoryService;
		this.taskService = taskService;
    }

	public List<Project> getAllProjectDTO() {
		return this.repository.findAll().stream().map(Project.class::cast).collect(Collectors.toList());
	}

	public Project getProjectDTOById(final int id) {
		return this.repository.findById(id);
	}

	public Project getProjectDTOByName(String name) {
		return this.repository.findByName(name);
	}

    public Project createProject(ProjectForm project) throws IOException{
        if (!isProjectNameUnique(project.getName()) || project.getBudget() < 0){
            return null;
        }
        Project createdProject = new Project(project);
        List<Category> categories = this.categoryService.persistCategories(project.getCategories());
        createdProject.setCategories(categories);
        repository.save(createdProject);
        User user = this.userService.findUser().get();
        this.projectUserService.createAssociation(createdProject,user,true);
        this.taskService.createTasks(project.getTasks(), createdProject);
        return createdProject;
    }

    private boolean isProjectNameUnique(String name){
        return this.repository.findByName(name) == null;
    }
}
