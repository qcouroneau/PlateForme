package plateforme.back.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import plateforme.back.form.UserEditForm;
import plateforme.back.form.UserRegistrationForm;
import plateforme.back.object.Role;
import plateforme.back.object.User;
import plateforme.back.repository.RoleRepository;
import plateforme.back.repository.UserRepository;
import plateforme.back.response.MessageResponse;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
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

	public ResponseEntity<?> registerUser(@Valid UserRegistrationForm userForm) {
		if (userRepository.existsByUsername(userForm.getUsername())) {
			return ResponseEntity.badRequest().body(new MessageResponse("username"));
		}
		if (userRepository.existsByEmail(userForm.getEmail())) {
			return ResponseEntity.badRequest().body(new MessageResponse("email"));
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

	public Optional<User> findUser(){
		return  this.userRepository.findByUsername(this.getUser().getUsername());
	}

	private UserDetails getUser(){
		return (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
	}

	public ResponseEntity<?> editUser(@Valid UserEditForm userForm) {
		if (userRepository.existsByUsername(userForm.getNewUsername())) {
			return ResponseEntity.badRequest().body(new MessageResponse("username"));
		}
		if (userRepository.existsByEmail(userForm.getEmail())) {
			return ResponseEntity.badRequest().body(new MessageResponse("email"));
		}
		User user = findUser().get();
		user.setUsername(userForm.getNewUsername());
		user.setEmail(userForm.getEmail());
		user.setPassword(encoder.encode(userForm.getNewPassword()));
		userRepository.save(user);
		return ResponseEntity.ok(new MessageResponse("User edited successfully!"));
	}
}
