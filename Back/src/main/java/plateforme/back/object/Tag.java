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
@Table(name = "tag")
public class Tag implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -4376834247875722456L;

	@Id
    @SequenceGenerator(name = "pk_sequence", sequenceName = "tag_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "pk_sequence")
    @Column(unique = true, nullable = false, updatable = false, name = "id")
    private int id;
	
	@Column(name="name_tag")
    private String nameTag;
}
