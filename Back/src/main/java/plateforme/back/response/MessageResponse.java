package plateforme.back.response;

/*
 * Classe de réponse permettant de renvoyer un message texte côté client.
 */
public class MessageResponse {
	
    private String message;

	public void setMessage(String message) {
		this.message = message;
	}
	
    public MessageResponse(String s) { 
        this.setMessage(s);
     }

 	public String getMessage() {
 		return message;
 	}
}
