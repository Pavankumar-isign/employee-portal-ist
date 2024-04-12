package com.isigntech.EmployeePortalIst.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.isigntech.EmployeePortalIst.Dao.EmployeeDao;
import com.isigntech.EmployeePortalIst.Dto.Admin;
import com.isigntech.EmployeePortalIst.Dto.Employee;
import com.isigntech.EmployeePortalIst.Dto.EmployeeTask;
import com.isigntech.EmployeePortalIst.Exception.AdminNotFound;
import com.isigntech.EmployeePortalIst.Exception.EmployeeNotFound;
import com.isigntech.EmployeePortalIst.Repository.EmployeeRepo;
import com.isigntech.EmployeePortalIst.util.ResponceStructure;

@Service
public class EmployeeService {
	@Autowired
	private EmployeeDao employeeDao;

	public ResponseEntity<ResponceStructure<Employee>> saveEmployee(Employee employee){
		Employee employeeDb=employeeDao.saveEmployee(employee);
		ResponceStructure<Employee> structure=new ResponceStructure<Employee>();
		structure.setData(employeeDb);
		structure.setMessage("Employee saved Successfully");
		structure.setStatus(HttpStatus.CREATED.value());
		return new ResponseEntity<ResponceStructure<Employee>>(structure,HttpStatus.CREATED);
	}

	public ResponseEntity<ResponceStructure<Employee>> fetchEmployee(int employeeId){
		Employee employeeDb=employeeDao.fetchEmployee(employeeId);
		employeeDb.setEmployeeTask(null);
		if(employeeDb!=null) {
			ResponceStructure<Employee> structure=new ResponceStructure<Employee>();
			structure.setData(employeeDb);
			structure.setMessage("Employee fetched Successfully");
			structure.setStatus(HttpStatus.FOUND.value());
			return new ResponseEntity<ResponceStructure<Employee>>(structure,HttpStatus.FOUND);
		}
		else {
			throw new EmployeeNotFound(employeeId+" Employee is not found...");
		}
	}

	public ResponseEntity<ResponceStructure<Employee>> updateEmployee(Employee employee){
		    Employee updateDetails=new Employee();
			ResponceStructure<Employee> structure=new ResponceStructure<Employee>();		
			updateDetails.setEmployeeId(employee.getEmployeeId());
			updateDetails.setFirstName(employee.getFirstName());	
			updateDetails.setLastName(employee.getLastName());
			updateDetails.setPassword(employee.getPassword());
			updateDetails.setAddress(employee.getAddress());
			updateDetails.setEmail(employee.getEmail());
			updateDetails.setMobileNumber(employee.getMobileNumber());
			updateDetails.setDesignation(employee.getDesignation());
			updateDetails.setSalary(employee.getSalary());
			employeeDao.updateEmployee(updateDetails);
			structure.setData(updateDetails);
			structure.setMessage("Employee has been Updated");
			structure.setStatus(HttpStatus.OK.value());
			return new ResponseEntity<ResponceStructure<Employee>>(structure,HttpStatus.OK);		
	}

	public ResponseEntity<ResponceStructure<Employee>> employeeLogin(String email, String password){
		Employee dbEmployee =employeeDao.getEmail(email);
		if(dbEmployee!=null) {
			if(dbEmployee.getPassword().equals(password)){
				ResponceStructure<Employee> structure=new ResponceStructure<Employee>();
				structure.setData(dbEmployee);
				structure.setMessage("Login True");
				structure.setStatus(HttpStatus.OK.value());
				return new ResponseEntity<ResponceStructure<Employee>>(structure,HttpStatus.OK);
			}else {
				throw new AdminNotFound(password+" Login False due to Password");
			}

		}
		else {
			throw new AdminNotFound(email+" employee is not found");
		}
	}
	public ResponseEntity<ResponceStructure<Employee>> deleteEmployeeByAdmin( int employeeId){
		Employee dbEmployee=employeeDao.fetchEmployee(employeeId);
		if(dbEmployee!=null) {
			ResponceStructure<Employee> structure=new ResponceStructure<Employee>();
			structure.setData(dbEmployee);
			structure.setMessage(dbEmployee.getEmployeeId()+" has been deleted");
			structure.setStatus(HttpStatus.OK.value());
			employeeDao.deleteEmployee(dbEmployee);
			return new ResponseEntity<ResponceStructure<Employee>>(structure,HttpStatus.OK);
		}else {
			throw new EmployeeNotFound(employeeId+" Employee is not found");
		}
	}
	public ResponseEntity<ResponceStructure<Employee>> updateEmployeeByAdmin(Employee employee){
		Employee existingDetails=employeeDao.fetchEmployee(employee.getEmployeeId());
		if(existingDetails!=null) {
			ResponceStructure<Employee> structure=new ResponceStructure<Employee>();
			existingDetails.setEmployeeId(employee.getEmployeeId());
			existingDetails.setFirstName(employee.getFirstName());	
			existingDetails.setLastName(employee.getLastName());
			existingDetails.setPassword(employee.getPassword());
			existingDetails.setAddress(employee.getAddress());
			existingDetails.setEmail(employee.getEmail());
			existingDetails.setMobileNumber(employee.getMobileNumber());
			existingDetails.setDesignation(employee.getDesignation());
			existingDetails.setSalary(employee.getSalary());
			employeeDao.updateEmployee(existingDetails);
			structure.setData(existingDetails);
			structure.setMessage(employee.getEmployeeId()+" has been updated");
			structure.setStatus(HttpStatus.OK.value());
			return new ResponseEntity<ResponceStructure<Employee>>(structure,HttpStatus.OK);
		}else {
			throw new EmployeeNotFound(employee.getEmployeeId()+" Employee is not found");
		}
	}
	public void saveEmployeeTask(int employeeId, EmployeeTask employeeTask) {
		Employee employee=employeeDao.fetchEmployee(employeeId);
		employee.getEmployeeTask().add(employeeTask);
		employeeDao.saveEmployee(employee);
	}
}


