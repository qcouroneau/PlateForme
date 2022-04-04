package plateforme.back.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import plateforme.back.dto.ProjectDTO;
import plateforme.back.object.Project;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Integer> {

	@Query(value = "SELECT p.id AS id, p.name AS name, p.description AS description, p.image as image, p.budget as budget, "
			+ "string_agg(pc.name,', ') AS nameCategorie "
			+ "FROM plateform.project p "
			+ "LEFT JOIN plateform.project_project_category ppc ON p.id = ppc.id_project "
			+ "INNER JOIN plateform.project_category pc ON pc.id = ppc.id_project_category "
			+ "WHERE p.id = ?1 "
			+ "GROUP BY 1;"
			, nativeQuery = true)
	ProjectDTO getDtoById(int idCampApp);

	@Query(value = "SELECT p.id AS id, p.name AS name, p.description AS description, p.image as image, p.budget as budget, "
			+ "string_agg(pc.name,', ') AS nameCategorie "
			+ "FROM plateform.project p "
			+ "LEFT JOIN plateform.project_project_category ppc ON p.id = ppc.id_project "
			+ "INNER JOIN plateform.project_category pc ON pc.id = ppc.id_project_category "
			+ "GROUP BY 1;"
			, nativeQuery = true)
	List<ProjectDTO> getAllDto();

	@Query(value = "SELECT p.id AS id, p.name AS name, p.description AS description, p.image as image, p.budget as budget, "
			+ "string_agg(pc.name,', ') AS nameCategorie "
			+ "FROM plateform.project p "
			+ "LEFT JOIN plateform.project_project_category ppc ON p.id = ppc.id_project "
			+ "INNER JOIN plateform.project_category pc ON pc.id = ppc.id_project_category "
			+ "WHERE p.name = ?1 "
			+ "GROUP BY 1;"
			, nativeQuery = true)
	ProjectDTO getDtoByName(String name);
}
