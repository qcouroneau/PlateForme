package plateforme.back.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import plateforme.back.form.UserForm;
import plateforme.back.object.Role;
import plateforme.back.object.User;
import plateforme.back.repository.RoleRepository;
import plateforme.back.repository.UserRepository;
import plateforme.back.response.MessageResponse;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.validation.Valid;

@Service
public class UserService {

	@Autowired
	PasswordEncoder encoder;

	@Autowired
	UserRepository userRepository;

	@Autowired
	RoleRepository roleRepository;

	public List<User> getAllDTO() {
		return this.userRepository.findAll();
	}

	public ResponseEntity<?> registerUser(@Valid UserForm userForm) {
		if (userRepository.existsByUsername(userForm.getUsername())) {
			return ResponseEntity.badRequest().body(new MessageResponse("Error: Username is already taken!"));
		}
		if (userRepository.existsByEmail(userForm.getEmail())) {
			return ResponseEntity.badRequest().body(new MessageResponse("Error: Email is already in use!"));
		}

		User user = new User(userForm.getUsername(), userForm.getEmail(), encoder.encode(userForm.getPassword()));
		Set<Role> roles = new HashSet<>();
		Role userRole = roleRepository.findByName("ROLE_USER")
				.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
		roles.add(userRole);
		user.setRoles(roles);
		userRepository.save(user);

		return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
	}
}
