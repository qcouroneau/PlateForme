package plateforme.back.object;

import plateforme.back.form.ProjectForm;

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
@Table(name = "project")
public class Project implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 2527428440912842930L;

	public Project(ProjectForm projectForm) {
		this.nameProject = projectForm.getName();
		this.description = projectForm.getDescription();
		this.projectCategory = new ProjectCategory();
	}

	@Id
    @SequenceGenerator(name = "pk_sequence", sequenceName = "project_id_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "pk_sequence")
    @Column(unique = true, nullable = false, updatable = false, name = "id")
    private int id;
	
	@Column(name="name_project")
    private String nameProject;
	
	@Column(name="description")
    private String description;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "id_project_category", nullable = false)
    private ProjectCategory projectCategory;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNameProject() {
		return nameProject;
	}

	public void setNameProject(String nameProject) {
		this.nameProject = nameProject;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public ProjectCategory getProjectCategory() {
		return projectCategory;
	}

	public void setProjectCategory(ProjectCategory projectCategory) {
		this.projectCategory = projectCategory;
	}
}
