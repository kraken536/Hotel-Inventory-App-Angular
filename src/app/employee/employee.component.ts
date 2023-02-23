import { Component, OnInit, AfterContentInit, Self } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers: [RoomsService],
})
export class EmployeeComponent implements OnInit, AfterContentInit {
  ngOnInit(): void {
    
  }
  ngAfterContentInit(): void {
    
  }

  constructor(@Self() private roomsService: RoomsService){}
  empName: string = "John";

}
