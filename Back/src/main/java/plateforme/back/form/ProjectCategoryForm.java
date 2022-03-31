package plateforme.back.form;

import com.sun.istack.NotNull;

public class ProjectCategoryForm {
    @NotNull
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
