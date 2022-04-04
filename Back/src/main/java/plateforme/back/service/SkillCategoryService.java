package plateforme.back.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import plateforme.back.repository.SkillCategoryRepository;

@Service
public class SkillCategoryService {

    private final SkillCategoryRepository repository;

    @Autowired
    public SkillCategoryService(final SkillCategoryRepository repository){
        this.repository = repository;
    }


}
