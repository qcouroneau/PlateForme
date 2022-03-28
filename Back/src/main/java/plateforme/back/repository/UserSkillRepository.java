package plateforme.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import plateforme.back.object.UserSkill;

@Repository
public interface UserSkillRepository extends JpaRepository<UserSkill, Integer> {

}
