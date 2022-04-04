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
        String uploadDir = "project-photos/";
        ImageUtils.saveFile(uploadDir, image.getOriginalFilename(), image);
		return image.getOriginalFilename();
	}
}
