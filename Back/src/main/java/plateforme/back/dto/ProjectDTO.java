package plateforme.back.dto;

import java.util.List;

/**
 * Classe permettant de caster une classe java en objet JSON.
 * On transforme un projet en un objet JSON comportant une ID, un nom, une
 * description, une image, un budget. Mais aussi une liste de catégorie elles
 * aussi castées en JSON, plus une liste de tâche castées en JSON.
 */
public class ProjectDTO {

	private int id;

	private String name;

	private String description;

	private String imagePath;

	private int budget;

	private List<CategoryDTO> categories;

	private List<TaskDTO> tasks;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getImagePath() {
		return imagePath;
	}

	public void setImagePath(String imagePath) {
		this.imagePath = imagePath;
	}

	public int getBudget() {
		return budget;
	}

	public void setBudget(int budget) {
		this.budget = budget;
	}

	public List<CategoryDTO> getCategories() {
		return categories;
	}

	public void setCategories(List<CategoryDTO> categories) {
		this.categories = categories;
	}

	public List<TaskDTO> getTasks() {
		return tasks;
	}

	public void setTasks(List<TaskDTO> tasks) {
		this.tasks = tasks;
	}

}
