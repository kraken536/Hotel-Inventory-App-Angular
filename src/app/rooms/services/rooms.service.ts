import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { environment } from '../../../environments/environment';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { AppConfig } from '../../AppConfig/appconfig.interface';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  
  roomList: RoomList[] = [
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

  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig) { 
    console.log("Rooms Service initialized...");
    console.log(this.config.apiEndpoint);
  }

  getRooms(){
    return this.roomList;
  }
}
