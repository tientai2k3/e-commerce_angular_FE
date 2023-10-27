export interface IProduct {
  id?: number;
  product_Code?: string;
  product_Name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  categoryId: number;
  colorId?: number;
  image?: File;
}
