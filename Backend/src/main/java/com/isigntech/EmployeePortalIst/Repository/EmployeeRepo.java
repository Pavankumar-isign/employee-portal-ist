package com.isigntech.EmployeePortalIst.Repository;

import org.springframework.data.repository.CrudRepository;

import com.isigntech.EmployeePortalIst.Dto.Employee;

public interface EmployeeRepo extends CrudRepository<Employee, Integer> {
	
}
