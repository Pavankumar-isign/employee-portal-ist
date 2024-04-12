package com.isigntech.EmployeePortalIst.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.isigntech.EmployeePortalIst.Dao.AdminDao;
import com.isigntech.EmployeePortalIst.Dao.EmployeeDao;
import com.isigntech.EmployeePortalIst.Dto.Admin;
import com.isigntech.EmployeePortalIst.Dto.Employee;
import com.isigntech.EmployeePortalIst.Exception.AdminNotFound;
import com.isigntech.EmployeePortalIst.Exception.EmployeeNotFound;
import com.isigntech.EmployeePortalIst.util.ResponceStructure;

@Service
public class AdminService {

	@Autowired
	private AdminDao adminDao;
	

	public ResponseEntity<ResponceStructure<Admin>> saveAdmin(Admin admin) {
		Admin dbAdmin=adminDao.saveAdmin(admin);
		ResponceStructure<Admin> structure=new ResponceStructure<Admin>();
		structure.setData(dbAdmin);
		structure.setMessage("admin saved successfully");
		structure.setStatus(HttpStatus.CREATED.value());
		return new ResponseEntity<ResponceStructure<Admin>>(structure,HttpStatus.CREATED);
	}

	public ResponseEntity<ResponceStructure<Admin>> fetchAdmin(int adminId) {
		Admin dbAdmin=adminDao.fetchAdmin(adminId);
		if(dbAdmin!=null) {
			ResponceStructure<Admin> structure=new ResponceStructure<Admin>();
			structure.setData(dbAdmin);
			structure.setMessage("admin fetched successfully");
			structure.setStatus(HttpStatus.FOUND.value());
			return new ResponseEntity<ResponceStructure<Admin>>(structure,HttpStatus.FOUND);
		}
		else {
			throw new AdminNotFound(adminId+"admin id is not found");
		}
	}
	public ResponseEntity<ResponceStructure<Admin>> updateAdmin(Admin admin){
		Admin existingDetails=adminDao.fetchAdmin(admin.getEmployeeId());
		ResponceStructure<Admin> structure=new ResponceStructure<Admin>();
		existingDetails.setEmployeeId(admin.getEmployeeId());
		existingDetails.setFirstName(admin.getFirstName());	
		existingDetails.setLastName(admin.getLastName());
		existingDetails.setPassword(admin.getPassword());
		existingDetails.setAddress(admin.getAddress());
		existingDetails.setEmail(admin.getEmail());
		existingDetails.setMobileNumber(admin.getMobileNumber());
		existingDetails.setDesignation(admin.getDesignation());
		existingDetails.setSalary(admin.getSalary());
		adminDao.updateAdmin(existingDetails);
		structure.setData(existingDetails);
		structure.setMessage("Admin has been Updated");
		structure.setStatus(HttpStatus.OK.value());
		return new ResponseEntity<ResponceStructure<Admin>>(structure,HttpStatus.OK);		
	}
	public ResponseEntity<ResponceStructure<Admin>> deleteAdmin(int adminId){
		Admin dbAdmin =adminDao.fetchAdmin(adminId);
		if(dbAdmin!=null) {
			adminDao.deleteAdmin(dbAdmin);
			ResponceStructure<Admin> structure=new ResponceStructure<Admin>();
			structure.setData(dbAdmin);
			structure.setMessage("Admin has been Deleted");
			structure.setStatus(HttpStatus.OK.value());
			return new ResponseEntity<ResponceStructure<Admin>>(structure,HttpStatus.OK);
		}
		else {
			throw new AdminNotFound(adminId+" admin is not found");
		}
	}
	public ResponseEntity<ResponceStructure<Admin>> adminLogin(String email, String password){
		Admin dbAdmin =adminDao.getEmail(email);
		if(dbAdmin!=null) {
			if(dbAdmin.getPassword().equals(password)){
				ResponceStructure<Admin> structure=new ResponceStructure<Admin>();
				structure.setData(dbAdmin);
				structure.setMessage("Login True");
				structure.setStatus(HttpStatus.OK.value());
				return new ResponseEntity<ResponceStructure<Admin>>(structure,HttpStatus.OK);
			}else {
				throw new AdminNotFound(password+" admin Password is wrong");
			}

		}
		else {
			throw new AdminNotFound(email+" admin is not found");
		}
	}
	
}
