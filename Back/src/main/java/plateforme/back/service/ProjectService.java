package plateforme.back.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import plateforme.back.dto.ProjectDTO;
import plateforme.back.object.Project;
import plateforme.back.repository.ProjectRepository;

@Service
public class ProjectService {

	private final ProjectRepository repository;
	
    @Autowired
    public ProjectService(final ProjectRepository repository){
        this.repository = repository;
    }

	public List<ProjectDTO> getAllProjectDTO() {
		// TODO Auto-generated method stub
		return null;
	}

	public ProjectDTO getProjectDTOById(final int id) {
		return this.repository.getDtoById(id);
	}
}
