package com.isigntech.EmployeePortalIst.Dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.isigntech.EmployeePortalIst.Dto.Employee;
import com.isigntech.EmployeePortalIst.Dto.EmployeeTask;
import com.isigntech.EmployeePortalIst.Repository.EmployeeTaskRepo;
@Repository
public class EmployeeTaskDao {

	@Autowired
	private EmployeeTaskRepo employeeTaskRepo;
	@Autowired
	private EmployeeDao employeeDao;
	
//	public com.isigntech.EmployeePortalIst.Dto.EmployeeTask saveTask(com.isigntech.EmployeePortalIst.Dto.EmployeeTask employeeTask) {
//		return employeeTaskRepo.save(employeeTask);
//	}
	
	
	
}
