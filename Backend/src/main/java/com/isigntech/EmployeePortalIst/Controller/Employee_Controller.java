package com.isigntech.EmployeePortalIst.Controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.isigntech.EmployeePortalIst.Dao.EmployeeDao;
import com.isigntech.EmployeePortalIst.Dto.Admin;
import com.isigntech.EmployeePortalIst.Dto.Employee;
import com.isigntech.EmployeePortalIst.Service.EmployeeService;
import com.isigntech.EmployeePortalIst.util.ResponceStructure;

@RestController
@CrossOrigin(origins ="/*")
public class Employee_Controller {

	@Autowired
	EmployeeService employeeService;
	@Autowired
	private EmployeeDao employeeDao;
	
	@PostMapping("/saveEmployee")
	public ResponseEntity<ResponceStructure<Employee>> saveEmployee(@RequestParam("employeeData") String employee,@RequestParam("image") MultipartFile image) throws IOException{
		Employee employeeDb=new ObjectMapper().readValue(employee, Employee.class);
		employeeDb.setImage(image.getBytes());
		return employeeService.saveEmployee(employeeDb);
	}
	
	@GetMapping("/fetchingEmployeeId{employeeId}")
	public ResponseEntity<ResponceStructure<Employee>> fetchEmployee(@PathVariable int employeeId){
		return employeeService.fetchEmployee(employeeId);
	}
	@PutMapping("/updateEmployee{employeeId}")
	public ResponseEntity<ResponceStructure<Employee>> updateEmployee(@RequestBody Employee employee){
		return employeeService.updateEmployee(employee);
	}
	
	@PostMapping("/employeeLogin")
	public ResponseEntity<ResponceStructure<Employee>> employeeLogin(@RequestBody Employee employee){
		return employeeService.employeeLogin(employee.getEmail(),employee.getPassword());
	}
	@DeleteMapping("/deleteEmployeeByAdmin{employeeId}")
	public ResponseEntity<ResponceStructure<Employee>> deleteEmployeeByAdmin(@PathVariable int employeeId){
		return employeeService.deleteEmployeeByAdmin(employeeId);
	}
	@PutMapping("/updateEmployeeByAdmin")
	public ResponseEntity<ResponceStructure<Employee>> updateEmployeeByAdmin(@RequestBody Employee employee){
		return employeeService.updateEmployeeByAdmin(employee);
	}
	@GetMapping("/getEmployeeList")
	public Iterable<Employee> getEmployeeList(){
		return employeeDao.getEmployeeList();
	}
}
