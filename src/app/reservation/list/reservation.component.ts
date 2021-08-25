import { Component, OnInit } from '@angular/core';
import {ReservationResourceService} from "../../api/services/reservation-resource.service";
import {Reservation} from "../../api/models/reservation";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  reservations?: Reservation[];

  constructor(private reservationResourceService: ReservationResourceService) { }

  ngOnInit(): void {
    this.getReservations()
  }

  getReservations(): void {
    this.reservationResourceService.getAllReservations().subscribe(res => {
      this.reservations = res ?? [];
    })
  }

}
