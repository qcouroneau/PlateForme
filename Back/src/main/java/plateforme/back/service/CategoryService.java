package plateforme.back.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import plateforme.back.dto.CategoryDTO;
import plateforme.back.form.CategoryForm;
import plateforme.back.object.Category;
import plateforme.back.repository.CategoryRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Service
public class CategoryService {
	
    @PersistenceContext
	private EntityManager entityManager;

    private final CategoryRepository repository;
    
    @Autowired
    public CategoryService(final CategoryRepository repository){
        this.repository = repository;
    }

	public List<Category> getAllCategories() {
		return repository.findAll().stream().map(Category.class::cast).collect(Collectors.toList());
	}
	
	public CategoryDTO getByName(String name) {
		return repository.getByName(name);
	}

	public List<Category> persistCategories(List<CategoryForm> categories) {
		List<Category> persistedCategories = new ArrayList<>();
        for(CategoryForm category : categories) {
        	Category fetchedCategory = entityManager.getReference(Category.class, category.getId());
        	persistedCategories.add(fetchedCategory);
        }
        return persistedCategories;
	}
}
