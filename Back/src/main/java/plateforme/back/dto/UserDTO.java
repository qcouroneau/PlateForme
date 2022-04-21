package plateforme.back.dto;

/**
 * Classe permettant de caster une classe java en objet JSON.
 * On transforme une utilisateur en un objet JSON comportant une ID, un login,
 * un mot de passe et un mail. Mais aussi une liste de catégorie elles
 * aussi castées en JSON.
 */
public interface UserDTO {
    int getId();

    String getLogin();

    String getPassword();

    String getMail();
}
