package plateforme.back.repository;

import java.util.Optional;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import plateforme.back.object.Project;
import plateforme.back.object.User;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Integer> {

	Project findById(int id);
		
	Project findByName(String name);

	Set<Project> findByUsers(Optional<User> findByUsername);
}