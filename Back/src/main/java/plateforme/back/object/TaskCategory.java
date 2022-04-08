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
@Table(name = "task_category")
public class TaskCategory implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -5835538932185908182L;

	public TaskCategory(Task task, Category category){
		this.task = task;
		this.category = category;
	}

	@Id
    @SequenceGenerator(name = "pk_sequence", sequenceName = "task_category_id_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "pk_sequence")
    @Column(unique = true, nullable = false, updatable = false, name = "id")
    private int id;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "id_task", nullable = false)
    private Task task;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "id_category", nullable = false)
    private Category category;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
}
