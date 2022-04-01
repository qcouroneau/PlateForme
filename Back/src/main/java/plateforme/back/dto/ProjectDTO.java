package plateforme.back.dto;

import java.util.List;

public interface ProjectDTO {
	int getId();
	String getName();
	String getDescription();
	String getImage();
	int getBudget();
	List<CategoryDTO> getCategories();
}
