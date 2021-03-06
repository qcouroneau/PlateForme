package plateforme.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import plateforme.back.dto.CategoryDTO;
import plateforme.back.object.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer> {

	public CategoryDTO getByName(String name);
}
