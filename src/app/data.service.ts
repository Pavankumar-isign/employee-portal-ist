import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  login = true;
  logout=false;
  getItems: any;
  userRes:any;
  logo = false;
  constructor(private http: HttpClient) { }

  getData(): Observable<any[]> {
    return this.http.get<any[]>('assets/data/data-rohit.json');
  }



 
  
 
// Admin Home  Intigrations
    
  private baseUrl = 'http://localhost:8081'; // Replace with your actual backend URL


    //get all data
  getAllData(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8081/getEmployeeList');
  }


    //It Will get the all employees Ids
    getAllEmployeeIds(): Observable<number> {
      return this.http.get<number>(`${this.baseUrl}/employeeIds`)
    }
    

      //get data only one employee
  getDataEmployeeId(employeeId) : Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:8081/fetchingEmployeeId/${employeeId}`);
  }


    //It will delete data
  deleteResourceById(employeeId): Observable<any> {
    const url = `${this.baseUrl}/deleteEmployeeById/${employeeId}`;  // Assuming your endpoint for deleting a resource is /resources/:id
    return this.http.delete(url);
  }
  
    // It will Update data
  updateEmployee(employeeId: number, updatedData: any): Observable<any> {
    const url = `${this.baseUrl}/updateEmployeeById/${employeeId}`;
    return this.http.put(url, updatedData);
  }



  
}