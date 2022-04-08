package plateforme.back.dto;

import java.util.List;

public interface TaskDTO {
    int getId();
    String getName();
    String getDescription();
    boolean getDone();
    List<CategoryDTO> getCategories();
}
