package plateforme.back.form;

import com.sun.istack.NotNull;

/**
 * Classe permettant de caster l'object JSON en objet java.
 * Y est définit le comportement attendu du JSON :
 * il ne sera validé que s'il respecte les annotations sur les variables.
 * NotNull pour les variables obligatoires, NotBlank pour les strings que l'on
 * ne veut pas vides.
 * On transforme ici le JSON en catégorie (catégorie déjà existante, car présence de l'id)
 */
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
