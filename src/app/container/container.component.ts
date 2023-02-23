import { AfterContentInit, Component, ContentChild, Host, OnInit, ViewChild } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  providers: [RoomsService],
})
export class ContainerComponent implements OnInit, AfterContentInit {
  
  constructor(@Host() private roomsService: RoomsService){}
  
  @ContentChild(EmployeeComponent) employeeComponent!: EmployeeComponent;
  ngOnInit(): void {
    
  }
  ngAfterContentInit(): void {
    this.employeeComponent.empName = "Merhaba Brolar";
  }

}
