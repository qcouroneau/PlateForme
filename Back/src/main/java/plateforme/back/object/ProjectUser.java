package plateforme.back.object;

import java.io.Serializable;

import javax.persistence.*;

@Entity()
@Table(name = "project_user")
public class ProjectUser implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 8379248849030353118L;

	@Id
    @SequenceGenerator(name = "pk_sequence", sequenceName = "project_user_id_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "pk_sequence")
    @Column(unique = true, nullable = false, updatable = false, name = "id")
    private int id;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="id_project")
    private Project project;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="id_user")
    private User user;
	
	@Column(name="is_initiater")
    private Boolean isInitiater;

	public ProjectUser(Project project, User user, boolean isinitiator) {
		this.project = project;
		this.user = user;
		this.isInitiater = isinitiator;
	}

	public ProjectUser() {

	}
}