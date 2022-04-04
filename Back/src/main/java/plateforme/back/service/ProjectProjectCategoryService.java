package plateforme.back.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import plateforme.back.object.Project;
import plateforme.back.object.ProjectCategory;
import plateforme.back.object.ProjectProjectCategory;
import plateforme.back.repository.ProjectProjectCategoryRepository;

@Service
public class ProjectProjectCategoryService {
    private final ProjectProjectCategoryRepository repository;

    @Autowired
    public ProjectProjectCategoryService(final ProjectProjectCategoryRepository repository){
        this.repository = repository;
    }

    public void createAssociation(Project project, ProjectCategory projectCategory) {
        ProjectProjectCategory createdProjectProjectCategory = new ProjectProjectCategory(project, projectCategory);
        repository.save(createdProjectProjectCategory);
    }
}
