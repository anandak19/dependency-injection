import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  empDetails: any[] = [
    { empId: 101, empName: "Arun P V", department: "Human Resources", position: "HR Manager", salary: 60000 },
    { empId: 102, empName: "Mobin Thomas", department: "Marketing", position: "Marketing Specialist", salary: 55000 },
    { empId: 103, empName: "Keerthi Anil", department: "Sales", position: "Sales Representative", salary: 50000 },
    { empId: 104, empName: "Sandra Vinod", department: "Finance", position: "Financial Analyst", salary: 65000 },
    { empId: 105, empName: "Nishad N", department: "Operations", position: "Operations Manager", salary: 70000 },
    { empId: 106, empName: "Hari Govind", department: "Marketing", position: "Marketing Manager", salary: 90000 },
    { empId: 107, empName: "Sanker S", department: "Sales", position: "Sales Manager", salary: 30000 }
  ];

  constructor() { }

  getEmployeeDetails(): string[]{
    return this.empDetails;
  }
}
