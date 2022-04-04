package plateforme.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import plateforme.back.dto.SkillDTO;
import plateforme.back.dto.UserDTO;
import plateforme.back.object.User;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    @Query(value = "SELECT u.id AS id, u.login AS login, u.password AS password, "
            + " u.mail as mail, u.name as name "
            + "FROM plateform.plateform_user u "
            + "GROUP BY 1;"
            , nativeQuery = true)
    List<UserDTO> getAllDTO();

}
