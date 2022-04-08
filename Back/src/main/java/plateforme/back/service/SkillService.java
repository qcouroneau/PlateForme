package plateforme.back.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import plateforme.back.object.Skill;
import plateforme.back.repository.SkillRepository;

import java.util.List;

@Service
public class SkillService {

    private final SkillRepository repository;

    @Autowired
    public SkillService(final SkillRepository repository){
        this.repository = repository;
    }

    public List<Skill> getAllDTO(){
        return this.repository.findAll();
    }
}
