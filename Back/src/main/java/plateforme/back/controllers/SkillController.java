package plateforme.back.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import plateforme.back.dto.SkillDTO;
import plateforme.back.service.SkillService;

import java.util.List;


@RestController
@RequestMapping("/skill")
public class SkillController {

    private SkillService service;

    public SkillController(SkillService service ) { this.service=service ; }

    @GetMapping("/dto")
    public List<SkillDTO> getAllSkillDTO() { return this.service.getAllDTO(); }
}
