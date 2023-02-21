import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';

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

  roomList: RoomList[] = [];
  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent) headerComponents!: QueryList<HeaderComponent>;

  
  
  constructor(private roomsService: RoomsService) {}
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterViewInit(): void {
    this.headerComponent.title = "Rooms View";
    console.log(this.headerComponents);
  }

  ngAfterViewChecked(){
    
  }
  
  ngDoCheck(): void {
    console.log("Do Check is called.");
  }

  ngOnInit(): void {
    console.log(this.headerComponent);
    this.roomList = this.roomsService.getRooms();
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
