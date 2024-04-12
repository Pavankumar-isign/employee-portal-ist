package com.isigntech.EmployeePortalIst.Dto;
import java.util.Arrays;
import java.util.List;
import org.springframework.web.multipart.MultipartFile;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OrderColumn;
import jakarta.persistence.Transient;

@Entity
public class Employee {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int employeeId;
	private String firstName;
	private String lastName;
	private String email;
	private long mobileNumber;
	private String address;
	private String designation;
	private double salary;
	private String password;
	private String dOB;
	private String dOJ;

	@OneToMany(cascade = CascadeType.ALL) 
	@JoinColumn(name="employeeId")
	private List<EmployeeTask> employeeTask;
	
	@Lob
	@Column(name="image",columnDefinition="LONGBLOB")
	private byte[] image;

	public int getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(int employeeId) {
		this.employeeId = employeeId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public long getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(long mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getDesignation() {
		return designation;
	}

	public void setDesignation(String designation) {
		this.designation = designation;
	}

	public double getSalary() {
		return salary;
	}

	public void setSalary(double salary) {
		this.salary = salary;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getdOB() {
		return dOB;
	}

	public void setdOB(String dOB) {
		this.dOB = dOB;
	}

	public String getdOJ() {
		return dOJ;
	}

	public void setdOJ(String dOJ) {
		this.dOJ = dOJ;
	}

	public List<EmployeeTask> getEmployeeTask() {
		return employeeTask;
	}

	public void setEmployeeTask(List<EmployeeTask> employeeTask) {
		this.employeeTask = employeeTask;
	}

	public byte[] getImage() {
		return image;
	}

	public void setImage(byte[] image) {
		this.image = image;
	}

	@Override
	public String toString() {
		return "Employee [employeeId=" + employeeId + ", firstName=" + firstName + ", lastName=" + lastName + ", email="
				+ email + ", mobileNumber=" + mobileNumber + ", address=" + address + ", designation=" + designation
				+ ", salary=" + salary + ", password=" + password + ", dOB=" + dOB + ", dOJ=" + dOJ + ", employeeTask="
				+ employeeTask + ", image=" + Arrays.toString(image) + "]";
	}

	public Employee(int employeeId, String firstName, String lastName, String email, long mobileNumber, String address,
			String designation, double salary, String password, String dOB, String dOJ, List<EmployeeTask> employeeTask,
			byte[] image) {
		super();
		this.employeeId = employeeId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.mobileNumber = mobileNumber;
		this.address = address;
		this.designation = designation;
		this.salary = salary;
		this.password = password;
		this.dOB = dOB;
		this.dOJ = dOJ;
		this.employeeTask = employeeTask;
		this.image = image;
	}

	public Employee() {
		super();
		// TODO Auto-generated constructor stub
	}
}
