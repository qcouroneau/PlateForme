package plateforme.back.form;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

public class UserEditForm {

	@NotBlank
	private String username;
	
	@NotBlank
	private String newUsername;

	@NotBlank
	private String password;
	
	@NotBlank
	private String newPassword;

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

	public String getNewPassword() {
		return newPassword;
	}

	public void setNewPassword(String newPassword) {
		this.newPassword = newPassword;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getNewUsername() {
		return newUsername;
	}

	public void setNewUsername(String newUsername) {
		this.newUsername = newUsername;
	}
	
}
