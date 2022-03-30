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

	public ProjectCategory(){
		this.nameProjectCategory = "test";
		this.description = "1";
	}

	@Id
    @SequenceGenerator(name = "pk_sequence", sequenceName = "project_category_id_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "pk_sequence")
    @Column(unique = true, nullable = false, updatable = false, name = "id")
    private int id;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNameProjectCategory() {
		return nameProjectCategory;
	}

	public void setNameProjectCategory(String nameProjectCategory) {
		this.nameProjectCategory = nameProjectCategory;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Column(name="name_project_category")
    private String nameProjectCategory;
	
	@Column(name="description")
    private String description;
}
