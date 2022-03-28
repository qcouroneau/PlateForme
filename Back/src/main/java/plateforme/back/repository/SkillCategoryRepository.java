package plateforme.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import plateforme.back.object.SkillCategory;

@Repository
public interface SkillCategoryRepository extends JpaRepository<SkillCategory, Integer> {

}
