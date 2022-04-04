package plateforme.back.dto;

import java.util.List;

public interface TaskDTO {
    int getId();
    String getName();
    List<CategoryDTO> getCategories();
    String getDescription();
}
