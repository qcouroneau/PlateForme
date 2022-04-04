package plateforme.back.dto;

import java.util.List;

public interface SkillDTO {
    int getId();
    String getName();
    List<CategoryDTO> getCategories();
}
