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
@Table(name = "project_task")
public class ProjectTache implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -8389053555524564314L;

	@Id
    @SequenceGenerator(name = "pk_sequence", sequenceName = "project_task_id_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "pk_sequence")
    @Column(unique = true, nullable = false, updatable = false, name = "id")
    private int id;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "id_project", nullable = false)
    private Project project;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "id_task", nullable = false)
    private Task tache;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "id_user", nullable = false)
    private User user;
}
