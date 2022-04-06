package plateforme.back.object;

import plateforme.back.form.ProjectForm;

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
import javax.persistence.JoinTable;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity()
@Table(name = "project")
public class Project implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 2527428440912842930L;

	public Project() { }
	
	public Project(ProjectForm projectForm) {
		this.name = projectForm.getName();
		this.description = projectForm.getDescription();
		this.budget = projectForm.getBudget();
		this.imagePath = projectForm.getImagePath();
	}

	@Id
    @SequenceGenerator(name = "pk_sequence", sequenceName = "project_id_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "pk_sequence")
    @Column(unique = true, nullable = false, updatable = false, name = "id")
    private int id;
	
	@Column(name="name")
    private String name;
	
	@Column(name="description")
    private String description;

	@Column(name="budget")
	private int budget;
	
	@OneToMany(cascade = CascadeType.ALL, fetch= FetchType.EAGER)
	@Fetch(value = FetchMode.SUBSELECT)
	@JoinTable(name="project_category", joinColumns = @JoinColumn(name = "id_project", referencedColumnName =  "id"), inverseJoinColumns = @JoinColumn(name = "id_category", referencedColumnName = "id"))
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
	private List<Category> categories = new ArrayList<>();
	
	@OneToMany(mappedBy = "project")
	@Fetch(value = FetchMode.SUBSELECT)
	private List<Task> tasks = new ArrayList<>();

	@Column(name="image_path")
	private String imagePath;
	
	public String getImagePath() {
		return imagePath;
	}

	public void setImagePath(String imagePath) {
		this.imagePath = imagePath;
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

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getBudget() {
		return budget;
	}

	public void setBudget(int budget) {
		this.budget = budget;
	}
	
	public List<Category> getCategories() {
		return categories;
	}

	public void setCategories(List<Category> categories) {
		this.categories = categories;
	}

	public List<Task> getTasks() {
		return tasks;
	}

	public void setTasks(List<Task> tasks) {
		this.tasks = tasks;
	}
}
