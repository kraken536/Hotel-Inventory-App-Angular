import { Component, ViewChild, ViewContainerRef, OnInit, AfterViewInit, ElementRef, Optional, Inject } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LoggerService } from './logger.service';
import { localStorageToken } from './localstorage.token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {

  constructor(@Optional() private loggerService: LoggerService,
  @Inject(localStorageToken) private localStorage: Storage){

  }
  

  title = 'hotelInventoryApp';

  /* @ViewChild('user', {read: ViewContainerRef}) vcr!: ViewContainerRef;
  
  ngAfterViewInit(): void {
    const componentRef = this.vcr.createComponent(RoomsComponent);
    componentRef.instance.numberOfRooms = 65;
  } */

  @ViewChild('name') name!: ElementRef;

  ngOnInit(): void{  
    this.loggerService?.log('AppComponent.ngOnInit()');  
    this.localStorage.setItem('name', 'Hilton Hotel');
  }

  ngAfterViewInit(): void {
    //this.name.nativeElement.textContent = "Aboudou Abdel";
  }

}
