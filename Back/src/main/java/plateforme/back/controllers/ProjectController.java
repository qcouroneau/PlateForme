package plateforme.back.controllers;

import java.io.IOException;
import java.util.List;

import javax.validation.Valid;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import plateforme.back.dto.ProjectDTO;
import plateforme.back.form.ProjectForm;
import plateforme.back.object.Project;
import plateforme.back.service.ProjectService;

@RestController
@RequestMapping("/project")
public class ProjectController {

	private final ProjectService service;

	public ProjectController(ProjectService service){
		this.service = service;
	}

	@GetMapping("/dto")
	public List<Project> getAllProjectDTO(){
		return this.service.getAllProjectDTO();
	}

	@GetMapping("/dto/getById/{id}")
	public ProjectDTO getProjectDTOById(@PathVariable("id") final int id){
		return this.service.getProjectDTOById(id);
	}

	@GetMapping("/dto/getByName/{name}")
	public ProjectDTO getProjectDTOByName(@PathVariable("name") final String name){
		return this.service.getProjectDTOByName(name);
	}

	@PostMapping(value="/create")
	public Project createProject(@Valid @RequestBody ProjectForm project) throws IOException {
		return this.service.createProject(project);
	}
}
