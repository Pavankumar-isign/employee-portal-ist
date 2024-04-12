package com.isigntech.EmployeePortalIst.Exception;


public class AdminNotFound extends RuntimeException {
	private String message="admin id is not found";

	public AdminNotFound(String message) {
		super();
		this.message = message;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
	
	
}
