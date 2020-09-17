import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  private baseUrl = 'http://localhost:3000/employees'

  saveEmployee(employee) {
    return this.http.post<any>(this.baseUrl, employee);
  }
 
  getAllEmployees(): any {
    return this.http.get(this.baseUrl + "/");
  }

  deleteEmployeeById(id: any): any {
    return this.http.delete(this.baseUrl + "/" + id);
  }

  getEmployeeById(id: any) {
    return this.http.get(this.baseUrl + "/" + id);
  }

}

