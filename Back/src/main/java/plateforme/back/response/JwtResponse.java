package plateforme.back.response;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;

public class JwtResponse {

	private String jwt;
	private int id;
	private String username;
	private String email;
	private Collection<? extends GrantedAuthority> authorities;

	public JwtResponse(String jwt, int id, String username, String email,
			Collection<? extends GrantedAuthority> authorities) {
		super();
		this.jwt = jwt;
		this.id = id;
		this.username = username;
		this.email = email;
		this.authorities = authorities;
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

	public Collection<? extends GrantedAuthority> getAuthorities() {
		return authorities;
	}
}
