package plateforme.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import plateforme.back.object.ProjectTag;

@Repository
public interface ProjectTagRepository extends JpaRepository<ProjectTag, Integer> {

}
