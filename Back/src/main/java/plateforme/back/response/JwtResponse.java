package plateforme.back.response;

import java.util.List;

public class JwtResponse {

	private String jwt;
	private int id;
	private String username;
	private String email;
	List<String> roles;
	
	public JwtResponse(String jwt, int id, String username, String email, List<String> roles) {
		super();
		this.jwt = jwt;
		this.id = id;
		this.username = username;
		this.email = email;
		this.roles = roles;
	}

	public String getJwt() {
		return jwt;
	}

	public int getId() {
		return id;
	}

	public String getUsername() {
		return username;
	}

	public String getEmail() {
		return email;
	}

	public List<String> getRoles() {
		return roles;
	}
}
