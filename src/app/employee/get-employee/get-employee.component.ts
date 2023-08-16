import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-get-employee',
  templateUrl: './get-employee.component.html',
  styleUrls: ['./get-employee.component.scss']
})
export class GetEmployeeComponent implements OnInit, OnDestroy {
  employees: Employee[] = [];
  sub$?: Subscription;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.sub$ = this.employeeService.getAll().subscribe({
      next: data => { this.employees = data },
      error: err => { console.error(err) }
    })
  }

  ngOnDestroy(): void {
    this.sub$?.unsubscribe();
  }


}
