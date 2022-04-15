package plateforme.back.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import plateforme.back.form.UserConnectionForm;
import plateforme.back.form.UserRegistrationForm;
import plateforme.back.impl.UserDetailsImpl;
import plateforme.back.object.Project;
import plateforme.back.object.User;
import plateforme.back.response.JwtResponse;
import plateforme.back.service.UserService;
import plateforme.back.utils.JwtUtils;

import java.util.List;
import java.util.Set;

import javax.validation.Valid;

@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtUtils jwtUtils;

	private final UserService service;

	public UserController(UserService service) {
		this.service = service;
	}

	@GetMapping("/dto")
	public List<User> getAllDTO() {
		return this.service.getAllDTO();
	}

	@PostMapping("/signin")
	public ResponseEntity<?> authenticateUser(@Valid @RequestBody UserConnectionForm userForm) {
		Authentication authentication = authenticationManager
				.authenticate(new UsernamePasswordAuthenticationToken(userForm.getUsername(), userForm.getPassword()));

		SecurityContextHolder.getContext().setAuthentication(authentication);

		String jwt = jwtUtils.generateJwtToken(authentication);

		UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
		return ResponseEntity.ok(new JwtResponse(jwt, userDetails.getId(), userDetails.getUsername(),
				userDetails.getEmail(), userDetails.getAuthorities()));
	}

	@PostMapping("/signup")
	public ResponseEntity<?> registerUser(@Valid @RequestBody UserRegistrationForm userForm) {
		return this.service.registerUser(userForm);
	}
	
	@GetMapping("/getProjectsByUsername/{username}")
	public Set<Project> getProjectsByUsername(@PathVariable("username") final String username) {
		return this.service.getProjectsByUsername(username);
	}
}
