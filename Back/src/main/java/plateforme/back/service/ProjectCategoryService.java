package plateforme.back.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import plateforme.back.object.Category;
import plateforme.back.object.Project;
import plateforme.back.object.ProjectCategory;
import plateforme.back.repository.ProjectCategoryRepository;

@Service
public class ProjectCategoryService {
    private final ProjectCategoryRepository repository;

    @Autowired
    public ProjectCategoryService(final ProjectCategoryRepository repository){
        this.repository = repository;
    }

    public void createAssociation(Project project, Category category) {
        ProjectCategory createdProjectCategory = new ProjectCategory(project, category);
        repository.save(createdProjectCategory);
    }
}
