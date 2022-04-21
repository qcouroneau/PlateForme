package plateforme.back.form;

import java.util.List;

import javax.validation.constraints.NotBlank;

import com.sun.istack.NotNull;

/**
 * Classe permettant de caster l'object JSON en objet java
 * Y est définit le comportement attendu du JSON :
 * il ne sera validé que s'il respecte les annotations sur les variables.
 * NotNull pour les variables obligatoires, NotBlank pour les strings que l'on
 * ne veut pas vides.
 * On transforme ici le JSON en projet d'édition. Ce qui signifie que l'on
 * modifie un projet existant. Avec un id déjà présent
 */
public class ProjectEditForm {

    @NotNull
    private int id;

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
