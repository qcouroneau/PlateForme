package plateforme.back.form;

import com.sun.istack.NotNull;

public class CategoryForm {
	@NotNull
	private int id;
	
    @NotNull
    private String name;

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
