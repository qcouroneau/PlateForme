package plateforme.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import plateforme.back.object.Skill;

@Repository
public interface SkillRepository extends JpaRepository<Skill, Integer> {

}
