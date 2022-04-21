package plateforme.back.form;

import javax.validation.constraints.NotBlank;

/**
 * Classe permettant de caster l'object JSON en objet java
 * Y est définit le comportement attendu du JSON :
 * il ne sera validé que s'il respecte les annotations sur les variables.
 * NotNull pour les variables obligatoires, NotBlank pour les strings que l'on
 * ne veut pas vides.
 * On transforme ici le JSON credential de connection. On retrouve le login et
 * le password qui vont être utilisés pour valider ou non la connection de
 * l'utilisateur.
 */
public class UserConnectionForm {

	@NotBlank
	private String username;

	@NotBlank
	private String password;

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}
