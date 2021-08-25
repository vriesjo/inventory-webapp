/* tslint:disable */
/* eslint-disable */
import { Category } from './category';
import { Supplier } from './supplier';
export interface Product {
  id?: number;
  code?: string;
  name?: string;
  description?: string;
  unit?: string;
  price?: string;
  quantity?: number;
  status?: string;
  supplier?: Supplier | null;
  category?: Category | null;
}

export class ProductImpl implements Product {
  constructor(
    public id?: number,
    public code?: string,
    public name?: string,
    public description?: string,
    public unit?: string,
    public price?: string,
    public quantity?: number,
    public status?: string,
    public supplier?: Supplier | null,
    public category?: Category | null
  ) {}

}
