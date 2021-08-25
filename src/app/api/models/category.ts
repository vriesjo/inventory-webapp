/* tslint:disable */
/* eslint-disable */
import {Product} from "./product";

export interface Category {
  id?: number;
  name?: string;
  description?: string;
}

export class CategoryImpl implements Product {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string
  ) {}

}
