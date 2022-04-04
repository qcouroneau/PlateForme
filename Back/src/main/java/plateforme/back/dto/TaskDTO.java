package plateforme.back.dto;

import java.util.List;

public interface TaskDTO {
    int getId();
    String getName();
    String getDescription();
    List<CategoryDTO> getCategories();
}
