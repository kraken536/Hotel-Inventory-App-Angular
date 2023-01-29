import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})

export class RoomsComponent implements OnInit {
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
  
  constructor() {};

  ngOnInit(): void {
    this.roomList = [
      {
        roomNumber: 1,
        roomType: "Deluxe Room",
        amenities: "Free Wi-Fi, TV, Bathroom, Kitchen",
        price: 500,
        photos: "",
        checkInTime: new Date('11-Nov-2021'),
        checkOutTime: new Date('12-Nov-2021'),
      },
      {
        roomNumber: 2,
        roomType: "Private Suit",
        amenities: "Free Wi-Fi, TV, Bathroom, Kitchen",
        price: 1000,
        photos: "",
        checkInTime: new Date('14-Nov-2021'),
        checkOutTime: new Date('17-Nov-2021'),
      },
      {
        roomNumber: 3,
        roomType: "Luxurious Room",
        amenities: "Free Wi-Fi, TV, Bathroom, Kitchen",
        price: 5000,
        photos: "",
        checkInTime: new Date('14-Nov-2021'),
        checkOutTime: new Date('17-Nov-2021'),
      }
    ];
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "Room List";
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
