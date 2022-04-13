package plateforme.back.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import plateforme.back.object.Project;
import plateforme.back.object.ProjectUser;
import plateforme.back.object.User;
import plateforme.back.repository.ProjectUserRepository;

@Service
public class ProjectUserService {
    @Autowired
    private ProjectUserRepository repository;

    public void createAssociation(Project project, User user, boolean isinitiator ) {
        ProjectUser createdProjectUser = new ProjectUser(project, user, isinitiator);
        repository.save(createdProjectUser);
    }
}
