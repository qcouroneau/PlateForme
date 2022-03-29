package plateforme.back.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import plateforme.back.dto.ProjectDTO;
import plateforme.back.object.Project;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Integer> {

	@Query(value = "SELECT p.id AS id, p.name_project AS nameProject, p.description AS description, p.image_projet as imageProjet, pc.name_project_category AS nameCategorie "
			+ "FROM plateform.project p "
			+ "INNER JOIN plateform.project_category pc ON p.id_project_category = pc.id "
			+ "WHERE p.id = ?1"
			, nativeQuery = true)
	ProjectDTO getDtoById(int idCampApp);

	@Query(value = "SELECT p.id AS id, p.name_project AS nameProject, p.description AS description, p.image_projet as imageProjet, pc.name_project_category AS nameCategorie "
			+ "FROM plateform.project p "
			+ "INNER JOIN plateform.project_category pc ON p.id_project_category = pc.id"
			, nativeQuery = true)
	List<ProjectDTO> getAllDto();

	@Query(value = "SELECT p.id AS id, p.name_project AS nameProject, p.description AS description, p.image_projet as imageProjet, pc.name_project_category AS nameCategorie "
			+ "FROM plateform.project p "
			+ "INNER JOIN plateform.project_category pc ON p.id_project_category = pc.id "
			+ "WHERE p.name_project = ?1"
			, nativeQuery = true)
	ProjectDTO getDtoByName(String name);
}
