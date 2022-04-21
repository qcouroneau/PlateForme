package plateforme.back.response;

/*
 * Classe de réponse permettant de renvoyer le chemin de l'image enregistrée sur le serveur.
 */
public class ImageResponse {
    private String path;

	public void setPath(String path) {
		this.path = path;
	}
	
    public ImageResponse(String s) { 
        this.setPath(s);
     }

 	public String getPath() {
 		return path;
 	}
}
