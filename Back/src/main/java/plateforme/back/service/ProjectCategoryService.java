package plateforme.back.service;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import plateforme.back.object.Category;
import plateforme.back.form.CategoryForm;
import plateforme.back.object.Project;
import plateforme.back.object.ProjectCategory;
import plateforme.back.repository.ProjectCategoryRepository;

@Service
public class ProjectCategoryService {
    private final ProjectCategoryRepository repository;
    
    @PersistenceContext
	private EntityManager entityManager;

    @Autowired
    public ProjectCategoryService(final ProjectCategoryRepository repository){
        this.repository = repository;
    }

    public void createAssociation(Project project, List<CategoryForm> categories) {
    	for(CategoryForm category : categories) {
    		Category fetchedCategory = entityManager.getReference(Category.class, category.getId());
            ProjectCategory createdProjectCategory = new ProjectCategory(project, fetchedCategory);
            repository.save(createdProjectCategory);    		
    	}
    }
}
