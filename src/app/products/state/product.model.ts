import { ID } from "@datorama/akita";

export interface Product {
  id: ID;
  title: string;
  description: string;
  price: number;
}

export function createProduct(params: Partial<Product>) {
  return {
    ...params
  } as Product;
}
