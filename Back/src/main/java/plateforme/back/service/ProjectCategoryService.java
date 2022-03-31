package plateforme.back.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import plateforme.back.form.ProjectCategoryForm;
import plateforme.back.object.Project;
import plateforme.back.object.ProjectCategory;
import plateforme.back.repository.ProjectCategoryRepository;

import java.util.List;

@Service
public class ProjectCategoryService {

    private final ProjectCategoryRepository repository;
    private final ProjectProjectCategoryService projectProjectCategoryService;

    @Autowired
    public ProjectCategoryService(final ProjectCategoryRepository repository, ProjectProjectCategoryService projectProjectCategoryService){
        this.repository = repository;
        this.projectProjectCategoryService = projectProjectCategoryService;
    }

    public void createProjectCategory(List<ProjectCategoryForm> categories, Project createdProject){
        for (ProjectCategoryForm category : categories) {
            ProjectCategory createdProjectCategory = new ProjectCategory(category);
            repository.save(createdProjectCategory);
            this.projectProjectCategoryService.createAssociation(createdProject, createdProjectCategory);
        }
    }
}
