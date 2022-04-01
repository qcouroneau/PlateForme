package plateforme.back.form;

import com.sun.istack.NotNull;

import java.util.List;

public class ProjectForm {
	
    @NotNull
    private String name;

    @NotNull
    private int budget;

    @NotNull
    private String description;

    @NotNull
    private List<CategoryForm> categories;

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

    public void setCategories(List<CategoryForm> categories) {
        this.categories = categories;
    }

    public List<CategoryForm> getCategories() {
        return categories;
    }

}
