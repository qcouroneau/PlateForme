package plateforme.back.form;

import java.util.List;

import com.sun.istack.NotNull;

/**
 * Classe permettant de caster l'object JSON en objet java
 * Y est définit le comportement attendu du JSON :
 * il ne sera validé que s'il respecte les annotations sur les variables.
 * NotNull pour les variables obligatoires, NotBlank pour les strings que l'on
 * ne veut pas vides.
 * On transforme ici le JSON en tâche. 
 */
public class TaskForm {
    @NotNull
    private int id;

    @NotNull
    private String name;

    @NotNull
    private String description;

    @NotNull
    private List<CategoryForm> categories;

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

    public List<CategoryForm> getCategories() {
        return categories;
    }

    public void setCategories(List<CategoryForm> categories) {
        this.categories = categories;
    }
}
