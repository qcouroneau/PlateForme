package plateforme.back.controllers;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import plateforme.back.dto.ProjectDTO;
import plateforme.back.dto.SimpleProjectDTO;
import plateforme.back.form.ProjectForm;
import plateforme.back.object.Project;
import plateforme.back.service.ProjectService;

@RestController
@RequestMapping("/project")
public class ProjectController {

	private final ProjectService service;

	private ModelMapper modelMapper;

	public ProjectController(ProjectService service) {
		this.service = service;
		this.modelMapper = new ModelMapper();
	}

	@GetMapping("/dto")
	public List<SimpleProjectDTO> getAllProjectDTO() {
		return convertListToSimpleProjectDto(this.service.getAllProjectDTO());
	}

	@GetMapping("/dto/getById/{id}")
	public ProjectDTO getProjectDTOById(@PathVariable("id") final int id) {
		return convertToProjectDto(this.service.getProjectDTOById(id));
	}

	@GetMapping("/dto/getByName/{name}")
	public Project getProjectDTOByName(@PathVariable("name") final String name) {
		return this.service.getProjectDTOByName(name);
	}

	@PostMapping(value = "/create")
	public Project createProject(@Valid @RequestBody ProjectForm project) throws IOException {
		return this.service.createProject(project);
	}

	private ProjectDTO convertToProjectDto(Project project) {
		ProjectDTO projectDTO = modelMapper.map(project, ProjectDTO.class);
		return projectDTO;
	}

	private List<SimpleProjectDTO> convertListToSimpleProjectDto(List<Project> projects) {
		List<SimpleProjectDTO> convertedDTOs = new ArrayList<>();
		for (Project project : projects) {
			convertedDTOs.add(modelMapper.map(project, SimpleProjectDTO.class));
		}
		return convertedDTOs;
	}
}
