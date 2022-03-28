package plateforme.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import plateforme.back.object.ProjectTache;

@Repository
public interface ProjectTacheRepository extends JpaRepository<ProjectTache, Integer> {

}
