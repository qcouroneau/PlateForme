package plateforme.back.controllers;

import java.io.IOException;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import plateforme.back.response.ImageResponse;
import plateforme.back.service.ImageService;

@RestController
@RequestMapping("/image")
public class ImageController {
	
	private ImageService service;
	
	public ImageController(ImageService service){
		this.service = service;
	}


	@PostMapping(value="/create", produces = MediaType.APPLICATION_JSON_VALUE)
	public ImageResponse saveFile(@RequestBody MultipartFile image) throws IOException {
		return new ImageResponse(this.service.createImage(image));
	}
}
