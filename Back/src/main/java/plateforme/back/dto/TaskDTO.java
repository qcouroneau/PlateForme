package plateforme.back.dto;

import java.util.List;

/**
 * Classe permettant de caster une classe java en objet JSON.
 * On transforme une tâche en un objet JSON comportant une ID, un nom, une
 * description. Mais aussi une liste de catégorie elles
 * aussi castées en JSON.
 */
public class TaskDTO {

	private int id;

	private String name;

	private String description;

	private List<CategoryDTO> categories;

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

	public List<CategoryDTO> getCategories() {
		return categories;
	}

	public void setCategories(List<CategoryDTO> categories) {
		this.categories = categories;
	}

}
