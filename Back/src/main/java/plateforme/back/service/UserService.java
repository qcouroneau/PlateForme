package plateforme.back.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import plateforme.back.dto.UserDTO;
import plateforme.back.repository.UserRepository;

import java.util.List;

@Service
public class UserService {

    private final UserRepository repository;

    @Autowired
    public UserService(UserRepository repository){
        this.repository = repository;
    }

    public List<UserDTO> getAllDTO() { return this.repository.getAllDTO(); }
}
