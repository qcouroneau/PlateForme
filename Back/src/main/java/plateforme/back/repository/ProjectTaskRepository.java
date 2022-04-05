package plateforme.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import plateforme.back.object.ProjectTask;

@Repository
public interface ProjectTaskRepository extends JpaRepository<ProjectTask, Integer> {

}
