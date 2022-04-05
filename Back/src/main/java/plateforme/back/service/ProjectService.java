package plateforme.back.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import plateforme.back.dto.ProjectDTO;
import plateforme.back.form.CategoryForm;
import plateforme.back.form.ProjectForm;
import plateforme.back.object.Category;
import plateforme.back.object.Project;
import plateforme.back.repository.ProjectRepository;

@Service
public class ProjectService {
	
    @PersistenceContext
	private EntityManager entityManager;

	private final ProjectRepository repository;

	@Autowired
    public ProjectService(final ProjectRepository repository, ImageService imageService){
        this.repository = repository;
    }

	public List<Project> getAllProjectDTO() {
		return this.repository.findAll().stream().map(Project.class::cast).collect(Collectors.toList());
	}

	public ProjectDTO getProjectDTOById(final int id) {
		return this.repository.findById(id);
	}

	public ProjectDTO getProjectDTOByName(String name) {
		return this.repository.findByName(name);
	}

    public Project createProject(ProjectForm project) throws IOException{
        if (!isProjectNameUnique(project.getName()) || project.getBudget() < 0){
            return null;
        }
        Project createdProject = new Project(project);
        List<Category> categories = new ArrayList<>();
        for(CategoryForm category : project.getCategories()) {
        	Category fetchedCategory = entityManager.getReference(Category.class, category.getId());
        	categories.add(fetchedCategory);
        }
        createdProject.setCategories(categories);
        repository.save(createdProject);
        return createdProject;
    }

    private boolean isProjectNameUnique(String name){
        return this.repository.findByName(name) == null;
    }
}
