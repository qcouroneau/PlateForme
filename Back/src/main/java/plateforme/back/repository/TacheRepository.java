package plateforme.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import plateforme.back.object.Tache;

@Repository
public interface TacheRepository extends JpaRepository<Tache, Integer> {

}
