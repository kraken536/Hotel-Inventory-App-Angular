import { Component, OnInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit, AfterContentInit {
  ngOnInit(): void {
    
  }
  ngAfterContentInit(): void {
    
  }

  constructor(){}
  empName: string = "John";

}
