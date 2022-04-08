package plateforme.back.object;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity()
@Table(name = "skill")
public class Skill implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -9049202098512262851L;

	@Id
    @SequenceGenerator(name = "pk_sequence", sequenceName = "skill_id_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "pk_sequence")
    @Column(unique = true, nullable = false, updatable = false, name = "id")
    private int id;
	
	@Column(name="name")
    private String name;
	
	@OneToMany(cascade = CascadeType.ALL, fetch= FetchType.EAGER)
	@JoinTable(name="task_category", joinColumns = @JoinColumn(name = "id_task", referencedColumnName =  "id"), inverseJoinColumns = @JoinColumn(name = "id_category", referencedColumnName = "id"))
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
	private List<Category> categories = new ArrayList<>();

	public List<Category> getCategories() {
		return categories;
	}

	public void setCategories(List<Category> categories) {
		this.categories = categories;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
}
