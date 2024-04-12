package com.isigntech.EmployeePortalIst.Controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.isigntech.EmployeePortalIst.Dao.EmployeeTaskDao;
import com.isigntech.EmployeePortalIst.Dto.Admin;
import com.isigntech.EmployeePortalIst.Dto.Employee;
import com.isigntech.EmployeePortalIst.Dto.EmployeeTask;
import com.isigntech.EmployeePortalIst.Service.EmployeeTaskService;
import com.isigntech.EmployeePortalIst.util.ResponceStructure;

@RestController
@CrossOrigin(origins ="/*")
public class EmployeeTaskController {
	@Autowired
	EmployeeTaskService employeeTaskService;
	@Autowired
	EmployeeTaskDao employeeTaskDao;
	@PostMapping("/addTaskToEmployee")
	public ResponseEntity<ResponceStructure<EmployeeTask>> addTaskToEmployee( @RequestParam("file") MultipartFile file, @RequestParam("employeeId") int employeeId,@RequestParam("employeeTask") String employeeTask) throws IOException{
		EmployeeTask employeeTaskDb=new ObjectMapper().readValue(employeeTask, EmployeeTask.class);
		return employeeTaskService.addTaskToEmployee(employeeId, employeeTaskDb.getAdditionalMessage(), employeeTaskDb.getConditionalMessage(), file);
	}
	
	@GetMapping("/getEmployeeTaskList{employeeId}")
	public List<EmployeeTask> getEmployeeTaskList(@PathVariable int employeeId){
		return employeeTaskService.getEmployeeTaskList(employeeId); 
	}
	
	
}
