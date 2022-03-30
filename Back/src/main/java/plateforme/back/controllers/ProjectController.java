package plateforme.back.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import plateforme.back.dto.ProjectDTO;
import plateforme.back.form.ProjectForm;
import plateforme.back.service.ProjectService;

@RestController
@RequestMapping("/project")
public class ProjectController {

	private final ProjectService service;

	public ProjectController(ProjectService service){
		this.service = service;
	}

	@GetMapping("/dto")
	public List<ProjectDTO> getAllProjectDTO(){
		return this.service.getAllProjectDTO();
	}

	@RequestMapping(value="/create", method = RequestMethod.POST)
	public int createProject(@RequestBody ProjectForm project) { return this.service.createProject(project); }
}
