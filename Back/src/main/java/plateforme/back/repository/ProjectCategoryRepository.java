package plateforme.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import plateforme.back.object.ProjectCategory;

@Repository
public interface ProjectCategoryRepository extends JpaRepository<ProjectCategory, Integer> {

}
