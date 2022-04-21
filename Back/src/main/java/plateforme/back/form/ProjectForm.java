package plateforme.back.form;

import com.sun.istack.NotNull;

import java.util.List;

import javax.validation.constraints.NotBlank;

/**
 * Classe permettant de caster l'object JSON en objet java
 * Y est définit le comportement attendu du JSON :
 * il ne sera validé que s'il respecte les annotations sur les variables.
 * NotNull pour les variables obligatoires, NotBlank pour les strings que l'on
 * ne veut pas vides.
 * On transforme ici le JSON en projet. On utilise ce form lors de la création
 * d'un projet.
 */
public class ProjectForm {

    @NotBlank
    private String name;

    @NotNull
    private int budget;

    @NotBlank
    private String description;

    @NotNull
    private List<CategoryForm> categories;

    @NotNull
    private List<TaskForm> tasks;

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

    public void setImagePath(String imagePath) {
        this.imagePath = imagePath;
    }

    public List<TaskForm> getTasks() {
        return tasks;
    }

    public void setTasks(List<TaskForm> tasks) {
        this.tasks = tasks;
    }
}
