package plateforme.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import plateforme.back.object.Tag;

@Repository
public interface TagRepository extends JpaRepository<Tag, Integer> {

}
