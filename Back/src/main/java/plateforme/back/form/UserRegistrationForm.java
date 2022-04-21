package plateforme.back.form;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

/**
 * Classe permettant de caster l'object JSON en objet java
 * Y est définit le comportement attendu du JSON :
 * il ne sera validé que s'il respecte les annotations sur les variables.
 * NotNull pour les variables obligatoires, NotBlank pour les strings que l'on
 * ne veut pas vides.
 * On transforme ici le JSON credential de création de compte. On retrouve le login,
 * le password et le mail qui vont servir pour identifier le nouvel utilisateur.
 */
public class UserRegistrationForm {

	@NotBlank
	private String username;

	@NotBlank
	private String password;

	@NotBlank
	@Email
	@Pattern(regexp = ".+@.+\\..+")
	private String email;

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

	public String getEmail() {
		return this.email;
	}
}
