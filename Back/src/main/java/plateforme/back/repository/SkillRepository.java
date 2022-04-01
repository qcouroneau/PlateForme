package plateforme.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import plateforme.back.dto.ProjectDTO;
import plateforme.back.dto.SkillDTO;
import plateforme.back.object.Skill;

import java.util.List;

@Repository
public interface SkillRepository extends JpaRepository<Skill, Integer> {

    @Query(value = "SELECT s.id AS id, s.name AS name, "
            + "string_agg(c.name,', ') AS nameCategorie "
            + "FROM plateform.skill s "
            + "LEFT JOIN plateform.skill_category sc ON s.id = sc.id_skill "
            + "INNER JOIN plateform.category c ON c.id = sc.id_category "
            + "GROUP BY 1;"
            , nativeQuery = true)
    List<SkillDTO> getAllDTO();;

}
