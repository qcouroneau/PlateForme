package plateforme.back.service;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import plateforme.back.utils.ImageUtils;

@Service
public class ImageService {
    
    @Autowired
    public ImageService(){
    }

	public String createImage(MultipartFile image) throws IOException {
        if(isImageValid(image)) {
            String name = ImageUtils.generateRandomName(image.getOriginalFilename());
            String uploadDir = "project-photos/";
            ImageUtils.saveFile(uploadDir, name, image);
            return name;
        } else {
            return "invalid image format";
        }
    }

	private boolean isImageValid(MultipartFile image) {
        if(!image.getContentType().matches("image/jpg|image/jpeg|image/png")){
            return false;
        }
        return true;
    }
}
