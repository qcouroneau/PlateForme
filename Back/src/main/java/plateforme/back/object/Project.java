package plateforme.back.object;

import plateforme.back.form.ProjectForm;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity()
@Table(name = "project")
public class Project implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 2527428440912842930L;

	public Project(ProjectForm projectForm) {
		this.name = projectForm.getName();
		this.description = projectForm.getDescription();
		this.budget = projectForm.getBudget();
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
}
