import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit, QueryList, SkipSelf, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { fromEvent, Observable } from 'rxjs';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})

export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked, OnDestroy {
  hotelName = "Hilton Hotel";
  numberOfRooms = 10;
  color = "color: green";
  texte = "font-weight: bold";
  hideRooms = false;
  title!: string;

  rooms: Room = {
    totalRooms: 200,
    availableRooms: 17,
  }
  
  selectedRoom!: RoomList;  
  stream = new Observable(observer => {
    observer.next('user1'); //Stream Starts
    observer.next('user2');
    observer.next('user3');
    observer.complete(); // Stream finishes
    //observer.error("Error");
  }) 
  roomList: RoomList[] = [];
  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent) headerComponents!: QueryList<HeaderComponent>;

  
  
  constructor(@SkipSelf() private roomsService: RoomsService) {}
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterViewInit(): void {
    this.headerComponent.title = "Rooms View";
    this.headerComponents.last.title = "Last Last Last"
    console.log(this.headerComponents);
  }

  ngAfterViewChecked(){
    //fromEvent(document, 'Click').subscribe(() =>(console.log('RxJS usage')));
  }
  
  ngDoCheck(): void {
    console.log("Do Check is called.");
  }

  ngOnInit(): void {
    console.log(this.roomsService.getRooms().subscribe(rooms => {
      this.roomList = rooms;
    }) );
    this.stream.subscribe(data => console.log(data));
    this.stream.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('complete'),
      error: (err) => console.log(err)
    });
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "Rooms List";
  }

  selectRoom(room: RoomList){
    this.selectedRoom = room;
  }

  addRoom(){
    const room: RoomList = {
      roomNumber: 52,
      roomType: "Luxurious Room",
      amenities: "Hot Water, TV, Free Wi-Fi",
      price: 500,
      photos: "",
      checkInTime: new Date('11-Nov-2021'),
      checkOutTime: new Date('14-Nov-2021'),
    };

    //this.roomList.push(room);
    this.roomList = [...this.roomList, room];
  }
}


/* 
Push based: getData -> addData -> getData again
Pull based: getData -> continuous stream of data -> addData,
 */