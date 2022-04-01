package plateforme.back.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import org.springframework.validation.annotation.Validated;
import plateforme.back.dto.ProjectDTO;
import plateforme.back.form.ProjectForm;
import plateforme.back.object.Project;
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
		return this.repository.findByName(name);
	}

    public Project createProject(@Validated ProjectForm project){
        if (!isProjectNameUnique(project.getName())){
            return null;
        }
        Project createdProject = new Project(project);
        repository.save(createdProject);
        this.projectCategoryService.createAssociation(createdProject, project.getCategories());
        return createdProject;
    }

    private boolean isProjectNameUnique(String name){
        return this.repository.findByName(name) == null;
    }
}
