package plateforme.back.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import plateforme.back.object.Role;

public interface RoleRepository extends JpaRepository<Role, Integer> {

	Optional<Role> findByName(String name);
}
