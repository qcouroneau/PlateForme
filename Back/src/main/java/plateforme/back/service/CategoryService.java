package plateforme.back.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import plateforme.back.form.CategoryForm;
import plateforme.back.object.Category;
import plateforme.back.object.Project;
import plateforme.back.repository.CategoryRepository;

import java.util.List;

@Service
public class CategoryService {

    private final CategoryRepository repository;
    private final ProjectCategoryService projectCategoryService;

    @Autowired
    public CategoryService(final CategoryRepository repository, ProjectCategoryService projectCategoryService){
        this.repository = repository;
        this.projectCategoryService = projectCategoryService;
    }

    public void createProjectCategory(List<CategoryForm> categories, Project createdProject){
        for (CategoryForm category : categories) {
        	Category createdCategory = new Category(category);
            repository.save(createdCategory);
            this.projectCategoryService.createAssociation(createdProject, createdCategory);
        }
    }
}
