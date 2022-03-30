package plateforme.back.form;

import com.sun.istack.NotNull;
import plateforme.back.object.Project;

public class ProjectForm {
    @NotNull
    private String name;
    @NotNull
    private String description;
    @NotNull
    private int budget;

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
}
