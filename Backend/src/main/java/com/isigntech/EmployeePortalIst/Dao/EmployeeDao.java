package com.isigntech.EmployeePortalIst.Dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.isigntech.EmployeePortalIst.Dto.Admin;
import com.isigntech.EmployeePortalIst.Dto.Employee;
import com.isigntech.EmployeePortalIst.Dto.EmployeeTask;
import com.isigntech.EmployeePortalIst.Repository.EmployeeRepo;

@Repository
public class EmployeeDao {
	@Autowired
	private EmployeeRepo employeeRepo;

	public Employee fetchEmployee(int employeeId) {
		Optional<Employee> db=employeeRepo.findById(employeeId);
		if(db.isPresent()) {
			return db.get();
		}
		else {
			return null;
		}
	}
	public Employee saveEmployee(Employee employee) {
		return employeeRepo.save(employee);
	}
	public Employee updateEmployee(Employee employee) {
		return employeeRepo.save(employee);
	}


	public void deleteEmployee(Employee employee) {
		employeeRepo.delete(employee);
	}

	public Iterable<Employee> getEmployeeList(){
		return employeeRepo.findAll();	
	}
	public Employee getEmail(String  email) {
		List<Employee> employeeList=(List<Employee>) employeeRepo.findAll();
		for (Employee employee : employeeList) {
			if(employee.getEmail().equals(email)) {
				return employee;
			}
		}
		return null;
	}

}
