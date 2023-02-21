import { Component, ViewChild, ViewContainerRef, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  title = 'hotelInventoryApp';

  /* @ViewChild('user', {read: ViewContainerRef}) vcr!: ViewContainerRef;
  
  ngAfterViewInit(): void {
    const componentRef = this.vcr.createComponent(RoomsComponent);
    componentRef.instance.numberOfRooms = 65;
  } */

  @ViewChild('name') name!: ElementRef;

  ngOnInit(): void{     
  }

  ngAfterViewInit(): void {
    this.name.nativeElement.textContent = "Aboudou Abdel";
  }

}
