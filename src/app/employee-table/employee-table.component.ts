import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-employee-table',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './employee-table.component.html',
  styleUrl: './employee-table.component.scss'
})
export class EmployeeTableComponent implements OnInit{

  employeeDetails: any [] = [];

  constructor(private empService: EmployeesService){ }

  ngOnInit(): void {
    this.employeeDetails = this.empService?.getEmployeeDetails();
  }

}
