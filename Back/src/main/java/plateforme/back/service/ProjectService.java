package plateforme.back.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import org.springframework.validation.annotation.Validated;
import plateforme.back.dto.ProjectDTO;
import plateforme.back.form.ProjectForm;
import plateforme.back.object.Project;
import plateforme.back.object.ProjectCategory;
import plateforme.back.repository.ProjectRepository;

@Service
public class ProjectService {

	private final ProjectRepository repository;

    private final ProjectCategoryService projectCategoryService;

    @Autowired
    public ProjectService(final ProjectRepository repository, ProjectCategoryService projectCategoryService){
        this.repository = repository;
        this.projectCategoryService = projectCategoryService;
    }

	public List<ProjectDTO> getAllProjectDTO() {
		return this.repository.getAllDto();
	}

	public ProjectDTO getProjectDTOById(final int id) {
		return this.repository.getDtoById(id);
	}

	public ProjectDTO getProjectDTOByName(String name) {
		return this.repository.getDtoByName(name);
	}

    public int createProject(@Validated ProjectForm project){
        ProjectCategory projectCategory = this.projectCategoryService.createProjectCategory();
        Project createdProject = new Project(project);
        createdProject.setProjectCategory(projectCategory);
        repository.save(createdProject);
        return createdProject.getId();
    }
}
