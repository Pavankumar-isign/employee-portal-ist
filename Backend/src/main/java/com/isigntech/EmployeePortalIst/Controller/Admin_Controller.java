package com.isigntech.EmployeePortalIst.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.isigntech.EmployeePortalIst.Dto.Admin;
import com.isigntech.EmployeePortalIst.Dto.Employee;
import com.isigntech.EmployeePortalIst.Dto.EmployeeTask;
import com.isigntech.EmployeePortalIst.Service.AdminService;
import com.isigntech.EmployeePortalIst.Service.EmployeeService;
import com.isigntech.EmployeePortalIst.Service.EmployeeTaskService;
import com.isigntech.EmployeePortalIst.util.ResponceStructure;


@RestController
@CrossOrigin(origins = "/*")
public class Admin_Controller {
	
	@Autowired
	private AdminService adminService;
	@Autowired
	private EmployeeTaskService employeeTaskService;
	
	@PostMapping("/saveAdmin")
	public ResponseEntity<ResponceStructure<Admin>> saveAdmin(@RequestBody Admin admin) {
		return adminService.saveAdmin(admin);
	}

	@GetMapping("/fetchingAdminId/{adminId}")
	public ResponseEntity<ResponceStructure<Admin>> fetchAdmin(@PathVariable int adminId) {
	    return adminService.fetchAdmin(adminId);
	}


	@PutMapping("/updateAdmin")
	public ResponseEntity<ResponceStructure<Admin>> updateAdmin(@RequestBody Admin admin){
		return adminService.updateAdmin(admin);
	}

//	@DeleteMapping("/deleteAdmin{adminId}")
//	public ResponseEntity<ResponceStructure<Admin>> deleteAdmin(@PathVariable int adminId){
//		return adminService.deleteAdmin(adminId);
//	}
	
	 @PostMapping("/adminLogin")
	    public ResponseEntity<ResponceStructure<Admin>> adminLogin(@RequestBody Employee employee) {
	        return adminService.adminLogin(employee.getEmail(), employee.getPassword());
	    }
}
