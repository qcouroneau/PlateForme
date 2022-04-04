package plateforme.back.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import plateforme.back.object.Category;
import plateforme.back.service.CategoryService;

@RestController
@RequestMapping("/category")
public class CategoryController {

	private final CategoryService service;

	public CategoryController(CategoryService service){
		this.service = service;
	}

	@GetMapping("/dto")
	public List<Category> getAllCategories(){
		return this.service.getAllCategories();
	}
}
