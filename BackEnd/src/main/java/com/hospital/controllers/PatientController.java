package com.hospital.controllers;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hospital.entities.Patient;
import com.hospital.entities.User;
import com.hospital.models.PatientDTO;
import com.hospital.models.Response;
import com.hospital.services.PatientService;
import com.hospital.services.UserService;

@CrossOrigin
@RestController
@RequestMapping("/api/patients")
public class PatientController {

	@Autowired PatientService pservice;
	@Autowired UserService uservice;

	@GetMapping
	public ResponseEntity<?> findAllDoctors() {
		List<Patient> result = pservice.allPatients();
		return Response.success(result);
	}
	
	@GetMapping("generateid")
	public ResponseEntity<?> generateDoctorId(){
		return Response.success(pservice.generateId());
	}
	
	@PostMapping("register")
	public ResponseEntity<?> save(@RequestBody PatientDTO dto) {
		Patient patient=new Patient();
		BeanUtils.copyProperties(dto, patient);
		int id=pservice.savePatient(patient);
		User user=new User();
		user.setUname(dto.getName());
		user.setPassword(dto.getPwd());
		user.setRole("Patient");
		user.setUid(id);
		user.setUserid(dto.getUserid());
		uservice.registerUser(user);
		return Response.success(patient);
	}
	
	@GetMapping("{id}")
	public ResponseEntity<?> findPatientDetails(@PathVariable("id")int id) {
		Patient result = pservice.findByPatientId(id);
		return Response.success(result);
	}
		
}
