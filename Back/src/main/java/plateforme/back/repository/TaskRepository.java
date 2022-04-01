package plateforme.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import plateforme.back.dto.SkillDTO;
import plateforme.back.dto.TaskDTO;
import plateforme.back.object.Task;

import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository<Task, Integer> {

    @Query(value = "SELECT t.id AS id, t.name AS name, "
            + "string_agg(c.name,', ') AS nameCategorie "
            + "FROM plateform.task t "
            + "LEFT JOIN plateform.task_category tc ON t.id = tc.id_task "
            + "INNER JOIN plateform.category c ON c.id = tc.id_category "
            + "GROUP BY 1;"
            , nativeQuery = true)
    List<TaskDTO> getAllDTO();;

}
