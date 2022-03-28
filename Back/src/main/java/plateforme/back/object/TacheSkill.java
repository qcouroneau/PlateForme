package plateforme.back.object;

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
@Table(name = "tache_skill")
public class TacheSkill {

	@Id
    @SequenceGenerator(name = "pk_sequence", sequenceName = "tache_skill_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "pk_sequence")
    @Column(unique = true, nullable = false, updatable = false, name = "id")
    private int id;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "id_tache", nullable = false)
    private Tache tache;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "id_skill", nullable = false)
    private Skill skill;
}
