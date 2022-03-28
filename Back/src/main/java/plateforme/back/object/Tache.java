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
@Table(name = "tache")
public class Tache implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -7768287230870691285L;

	@Id
    @SequenceGenerator(name = "pk_sequence", sequenceName = "tache_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "pk_sequence")
    @Column(unique = true, nullable = false, updatable = false, name = "id")
    private int id;
	
	@Column(name="name_tache")
    private String nameTac;
	
	@Column(name="description")
    private String description;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "id_project_category", nullable = false)
    private ProjectCategory projectCategory;
}
