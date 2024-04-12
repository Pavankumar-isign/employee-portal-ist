package com.isigntech.EmployeePortalIst.Service;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.isigntech.EmployeePortalIst.Dao.EmployeeDao;
import com.isigntech.EmployeePortalIst.Dao.EmployeeTaskDao;
import com.isigntech.EmployeePortalIst.Dto.Employee;
import com.isigntech.EmployeePortalIst.Dto.EmployeeTask;
import com.isigntech.EmployeePortalIst.util.ResponceStructure;

@Service
public class EmployeeTaskService {
	@Autowired
	private  EmployeeTaskDao employeeTaskDao;
	@Autowired
	private EmployeeService employeeService;
	@Autowired
	private EmployeeDao employeeDao;
	public ResponseEntity<ResponceStructure<EmployeeTask>> addTaskToEmployee(int employeeId,String additionalMessage,String conditionalMessage, MultipartFile file) throws IOException{
		EmployeeTask newData=new EmployeeTask();
		newData.setAdditionalMessage(additionalMessage);
		newData.setConditionalMessage(conditionalMessage);
		newData.setFileContent(file.getBytes());
		employeeService.saveEmployeeTask(employeeId, newData);
		ResponceStructure<EmployeeTask> structure=new ResponceStructure<EmployeeTask>();
		structure.setData(newData);
		structure.setMessage("Task added to Employee Successfully");
		structure.setStatus(HttpStatus.CREATED.value());
		return new ResponseEntity<ResponceStructure<EmployeeTask>>(structure,HttpStatus.CREATED);		
	}
	public List<EmployeeTask> getEmployeeTaskList(int employeeId){
		Employee employee=employeeDao.fetchEmployee(employeeId);
		return employee.getEmployeeTask();
	}
	

	
}
