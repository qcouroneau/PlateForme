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
@Table(name = "skill")
public class Skill implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -9049202098512262851L;

	@Id
    @SequenceGenerator(name = "pk_sequence", sequenceName = "skill_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "pk_sequence")
    @Column(unique = true, nullable = false, updatable = false, name = "id")
    private int id;
	
	@Column(name="name_skill")
    private String nameSkill;
	
	@Column(name="description")
    private String description;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "id_project_category", nullable = false)
    private SkillCategory skillCategory;
}
