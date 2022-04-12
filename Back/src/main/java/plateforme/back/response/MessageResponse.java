package plateforme.back.response;

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
