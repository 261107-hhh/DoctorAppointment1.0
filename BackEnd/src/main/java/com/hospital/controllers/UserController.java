package com.hospital.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hospital.config.JwtTokenUtil;
import com.hospital.entities.User;
import com.hospital.models.AuthResponse;
import com.hospital.models.LoginDTO;

@CrossOrigin
@RestController
@RequestMapping("/api/users")
public class UserController {
	
	private static Logger log = LoggerFactory.getLogger(UserController.class);

	@Autowired AuthenticationManager authManager;
	@Autowired JwtTokenUtil jwtUtil;

	@PostMapping("/validate")
	public ResponseEntity<?> validateUser(@RequestBody LoginDTO dto) {
		try {
			Authentication authentication = authManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            dto.getUserid(), dto.getPwd())
            );
            User user = (User) authentication.getPrincipal();
            String accessToken = jwtUtil.generateAccessToken(user);
            log.info("auth done "+accessToken+" "+user);
            AuthResponse response = new AuthResponse(user.getUserid(), accessToken,user.getRole(),user.getUname(),user.getUid());
             
            return ResponseEntity.ok().body(response);
		}catch(Exception ex) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
		}
	}
}
