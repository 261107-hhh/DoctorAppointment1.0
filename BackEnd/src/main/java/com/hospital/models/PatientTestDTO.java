package com.hospital.models;

import java.time.LocalDate;

public class PatientTestDTO {
	private String testname;
	private String result;
	private String remarks;
	private int patientid;
	private String status;
	private LocalDate testdate;
	
	public String getTestname() {
		return testname;
	}
	public void setTestname(String testname) {
		this.testname = testname;
	}
	public String getResult() {
		return result;
	}
	public void setResult(String result) {
		this.result = result;
	}
	public String getRemarks() {
		return remarks;
	}
	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}
	public int getPatientid() {
		return patientid;
	}
	public void setPatientid(int patientid) {
		this.patientid = patientid;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public LocalDate getTestdate() {
		return testdate;
	}
	public void setTestdate(LocalDate testdate) {
		this.testdate = testdate;
	}
	
	
}
