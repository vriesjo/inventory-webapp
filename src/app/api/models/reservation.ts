import {Supplier} from "./supplier";
import {Category} from "./category";
import {Product} from "./product";

export interface Reservation {
  sessionId?: string;
  productId?: number;
  supplierId?: number;
  quantity?: string;
}

export class ReservationImpl implements Reservation {
  constructor(
    public sessionId?: string,
    public productId?: number,
    public supplierId?: number,
    public quantity?: string
  ) {}

}
