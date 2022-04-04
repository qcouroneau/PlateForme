package plateforme.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import plateforme.back.object.TacheSkill;

@Repository
public interface TacheSkillRepository extends JpaRepository<TacheSkill, Integer> {

}
