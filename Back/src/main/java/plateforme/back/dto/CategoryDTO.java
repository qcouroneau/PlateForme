package plateforme.back.dto;

/**
 * Classe permettant de caster une classe java en objet JSON.
 * On transforme une catégorie en un objet JSON comportant une ID et un nom
 */
public class CategoryDTO {

	private int id;

	private String name;

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

}