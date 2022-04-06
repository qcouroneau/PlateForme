package plateforme.back.object;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import plateforme.back.form.TaskForm;

@Entity()
@Table(name = "task")
public class Task implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -7768287230870691285L;
	
	public Task() { }
	
	public Task(TaskForm task) {
		this.name = task.getName();
		this.description = task.getName();
	}


	@Id
    @SequenceGenerator(name = "pk_sequence", sequenceName = "task_id_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "pk_sequence")
    @Column(unique = true, nullable = false, updatable = false, name = "id")
    private int id;
	
	@Column(name="name")
    private String name;
	
	@Column(name="description")
    private String description;
	
	@JsonIgnore
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "id_project", nullable = false)
    private Project project;
	
	@LazyCollection(LazyCollectionOption.FALSE)
	@OneToMany(cascade = CascadeType.ALL)
	@JoinTable(name="task_category", joinColumns = @JoinColumn(name = "id_task", referencedColumnName =  "id"), inverseJoinColumns = @JoinColumn(name = "id_category", referencedColumnName = "id"))
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
	private List<Category> categories = new ArrayList<>();
	
	@LazyCollection(LazyCollectionOption.FALSE)
	@OneToMany(cascade = CascadeType.ALL)
	@JoinTable(name="task_skill", joinColumns = @JoinColumn(name = "id_task", referencedColumnName =  "id"), inverseJoinColumns = @JoinColumn(name = "id_skill", referencedColumnName = "id"))
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
	private List<Skill> skills = new ArrayList<>();

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

	public Project getProject() {
		return project;
	}

	public void setProject(Project project) {
		this.project = project;
	}

	public List<Category> getCategories() {
		return categories;
	}

	public void setCategories(List<Category> categories) {
		this.categories = categories;
	}

	public List<Skill> getSkills() {
		return skills;
	}

	public void setSkills(List<Skill> skills) {
		this.skills = skills;
	}
	
}
