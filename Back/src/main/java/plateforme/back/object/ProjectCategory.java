package plateforme.back.object;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity()
@Table(name = "project_category")
public class ProjectCategory implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -5835538932185908182L;

	@Id
    @SequenceGenerator(name = "pk_sequence", sequenceName = "project_category_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "pk_sequence")
    @Column(unique = true, nullable = false, updatable = false, name = "id")
    private int id;
	
	@Column(name="name_project_category")
    private String nameProjectCategory;
	
	@Column(name="description")
    private String description;
}
