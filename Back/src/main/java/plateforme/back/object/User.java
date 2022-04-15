package plateforme.back.object;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;

@Entity()
@Table(name = "plateform_user")
public class User implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 584607093328770211L;
	
	@Id
    @SequenceGenerator(name = "pk_sequence", sequenceName = "plateform_user_id_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "pk_sequence")
    @Column(unique = true, nullable = false, updatable = false, name = "id")
    private int id;
	
	@Column(name="username")
    private String username;
	
	@Column(name="email")
    private String email;
	
	@Column(name="password")
    private String password;
	
	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(	name = "user_role", 
				joinColumns = @JoinColumn(name = "id_user"), 
				inverseJoinColumns = @JoinColumn(name = "id_role"))
	private Set<Role> roles = new HashSet<>();

	@ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinTable(name = "project_user", 
            joinColumns = { @JoinColumn(name = "id_user")}, 
            inverseJoinColumns = { @JoinColumn(name = "id_project")})
	private Set<Project> projects = new HashSet<>();

	public User() { }

	public User(String username, String email, String encode) {
		this.username = username;
		this.email = email;
		this.password = encode;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String login) {
		this.username = login;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String mail) {
		this.email = mail;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Set<Role> getRoles() {
		return roles;
	}

	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}

	public Set<Project> getProjects() {
		return projects;
	}

	public void setProjects(Set<Project> projects) {
		this.projects = projects;
	}
}
