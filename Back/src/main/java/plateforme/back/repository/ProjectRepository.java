package plateforme.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import plateforme.back.object.Project;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Integer> {

	Project findById(int id);
		
	Project findByName(String name);
}
