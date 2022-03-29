package plateforme.back.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import plateforme.back.dto.ProjectDTO;
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
}
