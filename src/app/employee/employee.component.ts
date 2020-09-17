import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from './../api.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  // employee: Employee = new Employee();
  employeFormGroup: FormGroup;
  employeeList: any = [];

  constructor(public service: ApiService, private fb: FormBuilder) { }

  ngOnInit() {

    this.getAllEmployee()
    this.employeFormGroup = this.fb.group({
      _id: [''],
      name: [''],
      position: [''],
      office: [''],
      salary: ['']
    })
  }


  saveEmployee():any {
    // console.log(this.employeFormGroup.value)

    this.service.saveEmployee(this.employeFormGroup.value).subscribe(res => {
      this.getAllEmployee()
      this.employeFormGroup.reset();
    }, error => {
      console.log(error.error.message)
    })

  }

  getAllEmployee(){
    this.service.getAllEmployees().subscribe(res => {
      console.log(res)
      this.employeeList = res
    })
  }

  deleteEmployee(id: any) {
    this.service.deleteEmployeeById(id).subscribe(res => {
      this.getAllEmployee();
      console.log(res);
    },
      error => {
        console.log(error.error.message)
      });
  }
  updateEmployee(data:any){
    this.employeFormGroup.patchValue(data);

  }
}
