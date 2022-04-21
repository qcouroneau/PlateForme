package plateforme.back.dto;

import java.util.List;

/**
 * Classe permettant de caster une classe java en objet JSON.
 * On transforme un projet en un objet JSON. Ce JSON ne contient que les
 * informations "simples" du projet : le nom, la description, l'image et le
 * budget. Ce format est utilisé pour affiché les pré rendus des projets sur la
 * page principale.
 */
public class SimpleProjectDTO {

	private String name;

	private String description;

	private String imagePath;

	private int budget;

	private List<CategoryDTO> categories;

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
}
