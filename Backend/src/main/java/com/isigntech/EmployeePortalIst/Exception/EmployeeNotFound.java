package com.isigntech.EmployeePortalIst.Exception;

public class EmployeeNotFound extends RuntimeException {
	private String message="Employee id is not found";


	public EmployeeNotFound(String message) {
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
