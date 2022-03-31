package plateforme.back.object;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity()
@Table(name = "project")
public class Project implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 2527428440912842930L;

	@Id
    @SequenceGenerator(name = "pk_sequence", sequenceName = "project_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "pk_sequence")
    @Column(unique = true, nullable = false, updatable = false, name = "id")
    private int id;
	
	@Column(name="name_project")
    private String nameProject;
	
	@Column(name="description")
    private String description;
	
	@Lob
	@Column(name="image_project")
	private String imageProject;
	
	@Column(name="budget")
	private int budget;

}
