package plateforme.back.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import plateforme.back.dto.ProjectDTO;
import plateforme.back.form.ProjectForm;
import plateforme.back.object.Project;
import plateforme.back.object.ProjectCategory;
import plateforme.back.repository.ProjectCategoryRepository;
import plateforme.back.repository.ProjectRepository;

import java.util.List;

@Service
public class ProjectCategoryService {

    private final ProjectCategoryRepository repository;

    @Autowired
    public ProjectCategoryService(final ProjectCategoryRepository repository){
        this.repository = repository;
    }

    public ProjectCategory createProjectCategory(){
        ProjectCategory projectCategory = new ProjectCategory();
        repository.save(projectCategory);
        return projectCategory;
    }
}
