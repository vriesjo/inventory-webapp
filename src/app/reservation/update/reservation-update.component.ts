import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute} from "@angular/router";
import {ReservationResourceService} from "../../api/services/reservation-resource.service";
import {Reservation, ReservationImpl} from "../../api/models/reservation";

@Component({
  selector: 'app-reservation-insert',
  templateUrl: './reservation-update.component.html',
  styleUrls: ['./reservation-update.component.css']
})
export class ReservationUpdateComponent implements OnInit {

  isSaving: boolean = false;
  isError: boolean = false;
  isSaved: boolean = false;

  errorKey?: String;

  editForm = this.fb.group({
    sessionId: [null],
    supplierId: [null],
    productId: [null],
    quantity: [null],
  });

  constructor(protected route: ActivatedRoute,
              protected fb: FormBuilder,
              protected reservationResourceService: ReservationResourceService) {
  }

  ngOnInit(): void {
    this.updateForm(new ReservationImpl())
    // this.route.paramMap.subscribe(params => {
    //   const id = params.get('id');
    //   this.reservationResourceService.getReservation({"id": 1}).subscribe(res => {
    //     this.updateForm(res)
    //   })
    // });
  }

  updateForm(reservation: Reservation): void {
    this.editForm.patchValue({
      sessionId: reservation.sessionId,
      supplierId: reservation.supplierId,
      productId: reservation.productId,
      quantity: reservation.quantity,
    });
  }

  save(): void {
    const reservation = this.createFromForm()
    this.createReservation(reservation);
  }

  protected createFromForm(): Reservation {
    return {
      ...new ReservationImpl(),
      sessionId: this.editForm.get(['sessionId'])!.value,
      supplierId: this.editForm.get(['supplierId'])!.value,
      productId: this.editForm.get(['productId'])!.value,
      quantity: this.editForm.get(['quantity'])!.value,
    };
  }

  createReservation(reservation: Reservation) {
    this.reservationResourceService.createReservation({"body": reservation}).subscribe(
      res => {
        this.updateForm(res)
        this.isError = false
        this.isSaved = true
      },
      err => {
        this.isError = true
        this.isSaved = false
        this.errorKey = err.error.errorKey || err.error.error
      }
    )
  }

}
