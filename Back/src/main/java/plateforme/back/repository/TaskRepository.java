package plateforme.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import plateforme.back.object.Task;

@Repository
public interface TaskRepository extends JpaRepository<Task, Integer> {

}
