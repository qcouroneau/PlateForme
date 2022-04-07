package plateforme.back.form;

import com.sun.istack.NotNull;

import java.util.List;

import javax.validation.constraints.NotBlank;

public class ProjectForm {
	
    @NotBlank
    private String name;

    @NotNull
    private int budget;

    @NotBlank
    private String description;

    @NotNull
    private List<CategoryForm> categories;
    
    private String imagePath;

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

	public String getImagePath() {
		return imagePath;
	}

	public void setImage(String imagePath) {
		this.imagePath = imagePath;
	}
}
