package plateforme.back.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
	public int createProject(@RequestBody ProjectForm project) {
		return this.service.createProject(project);
	}

	@GetMapping("/dto/getById/{id}")
	public ProjectDTO getProjectDTOById(@PathVariable("id") final int id){
		return this.service.getProjectDTOById(id);
	}

	@GetMapping("/dto/getByName/{name}")
	public ProjectDTO getProjectDTOByName(@PathVariable("name") final String name){
		return this.service.getProjectDTOByName(name);
	}
}
