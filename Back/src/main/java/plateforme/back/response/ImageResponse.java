package plateforme.back.response;

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
