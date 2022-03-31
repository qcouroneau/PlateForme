package plateforme.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import plateforme.back.object.ProjectProjectCategory;

@Repository
public interface ProjectProjectCategoryRepository extends JpaRepository<ProjectProjectCategory, Integer> {

}
