package plateforme.back.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import plateforme.back.dto.SkillDTO;
import plateforme.back.object.SkillCategory;
import plateforme.back.repository.SkillRepository;

import java.util.List;

@Service
public class SkillService {

    private final SkillRepository repository;

    private final SkillCategoryService skillCategoryService;

    @Autowired
    public SkillService(final SkillRepository repository, SkillCategoryService service){
        this.repository = repository;
        this.skillCategoryService = service;
    }

    public List<SkillDTO> getAllDTO(){
        return this.repository.getAllDTO();
    }
}
