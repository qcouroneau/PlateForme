package plateforme.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import plateforme.back.object.TaskSkill;

@Repository
public interface TaskSkillRepository extends JpaRepository<TaskSkill, Integer> {

}
