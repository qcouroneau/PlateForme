package plateforme.back.object;

import javax.persistence.*;
import java.io.Serializable;

@Entity()
@Table(name = "project_project_category")
public class ProjectProjectCategory implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -8389053555524564314L;

	@Id
    @SequenceGenerator(name = "pk_sequence", sequenceName = "project_project_category_id_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "pk_sequence")
    @Column(unique = true, nullable = false, updatable = false, name = "id")
    private int id;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "id_project", nullable = false)
    private Project project;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "id_project_category", nullable = false)
    private ProjectCategory projectCategory;

	public ProjectProjectCategory(Project project, ProjectCategory projectCategory) {
		this.project = project;
		this.projectCategory = projectCategory;
	}
}
