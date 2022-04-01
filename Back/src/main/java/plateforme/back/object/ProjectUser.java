package plateforme.back.object;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

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
	@JoinColumn(name = "id_project", nullable = false)
    private Project project;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "id_user", nullable = false)
    private User user;
	
	@Column(name="is_initiater")
    private Boolean isInitiater;
}
