package plateforme.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import plateforme.back.object.ProjectUser;

@Repository
public interface ProjectUserRepository extends JpaRepository<ProjectUser, Integer> {

}
