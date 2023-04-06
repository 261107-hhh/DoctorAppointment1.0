package com.hospital.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.hospital.daos.UsersRepository;
import com.hospital.entities.User;

@Service
public class UserService {

	@Autowired private UsersRepository repo;
	@Autowired private PasswordEncoder passwordEncoder;
	
	public void registerUser(User user) {
		System.out.println("Password "+user.getPassword());
		String pwd=passwordEncoder.encode(user.getPassword());
		user.setPassword(pwd);
		repo.save(user);
	}
	
	public Optional<User> findByUserid(String userid) {
		return repo.findById(userid);
	}
	
	public void deleteUser(int id,String role) {
		User u=repo.findByUidAndRole(id,role);
		repo.delete(u);
	}
	
}
