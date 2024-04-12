package com.isigntech.EmployeePortalIst.Dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.isigntech.EmployeePortalIst.Dto.Admin;
import com.isigntech.EmployeePortalIst.Repository.AdminRepo;
@Repository
public class AdminDao {
	@Autowired
	private AdminRepo adminRepo;


	public Admin fetchAdmin(int adminId) {
		Optional<Admin> db=adminRepo.findById(adminId);
		if(db.isPresent()) {
			return db.get();
		}
		else {
			return null;
		}
	}
	public Admin saveAdmin(Admin admin) {
		return adminRepo.save(admin);
	}

	public Admin updateAdmin(Admin admin) {
		return adminRepo.save(admin);
	}
	public void deleteAdmin(Admin admin) {
		adminRepo.delete(admin);
	}
	public Admin getEmail(String  email) {
		List<Admin> admin=(List<Admin>) adminRepo.findAll();
		for (Admin employee : admin) {
			if(employee.getEmail().equals(email)) {
				return employee;
			}
		}
		return null;
	}
}
