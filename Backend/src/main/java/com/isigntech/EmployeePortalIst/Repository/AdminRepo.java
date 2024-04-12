package com.isigntech.EmployeePortalIst.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import com.isigntech.EmployeePortalIst.Dto.Admin;

public interface AdminRepo extends CrudRepository<Admin, Integer> {

}
