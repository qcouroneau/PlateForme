package plateforme.back.repository;

import java.util.List;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import plateforme.back.dto.CategoryDTO;
import plateforme.back.object.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer> {

	public CategoryDTO getByName(String name);

	public List<Category> findByIdIn(Set<Integer> ids);
}
