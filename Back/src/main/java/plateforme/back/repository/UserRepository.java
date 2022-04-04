package plateforme.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import plateforme.back.object.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

}
