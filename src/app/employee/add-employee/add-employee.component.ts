import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit, OnDestroy {
  employeeForm!: FormGroup;
  submitted: boolean = false;
  sub$?: Subscription;

  constructor(private empService: EmployeeService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      city: ['', Validators.required],
      email: ['', Validators.required],
      mobileNo: ['', Validators.required]
    });
  }

  get f(): { [controlName: string]: AbstractControl } {
    return this.employeeForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.employeeForm.valid) {
      //creating initial data
      const emp = {
        name: this.employeeForm.get("name")?.value,
        city: this.employeeForm.get("city")?.value,
        email: this.employeeForm.get("email")?.value,
        mobileNo: this.employeeForm.get("mobileNo")?.value,
      }

      //calling the service method
      this.sub$ = this.empService.create(emp).subscribe({
        next: (data) => { console.log(data); },
        error: (e) => { console.error(e) }
      });
    }
    else {
      console.log("Form is invalid");
    }
  }

  clearText() {
    this.submitted = false;
  }

  ngOnDestroy(): void {
    this.sub$?.unsubscribe();
  }

}
