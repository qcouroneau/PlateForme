package plateforme.back.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import plateforme.back.object.Category;
import plateforme.back.repository.CategoryRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CategoryService {

    private final CategoryRepository repository;
    
    @Autowired
    public CategoryService(final CategoryRepository repository, ProjectCategoryService projectCategoryService){
        this.repository = repository;
    }

	public List<Category> getAllCategories() {
		return repository.findAll().stream().map(Category.class::cast).collect(Collectors.toList());
	}
	
	public Category getByName(String name) {
		return repository.getByName(name);
	}
}