import katanaApiClient from '../../config/katanaApiClient';
import { Product } from '../../types/product';

export default async function updateProduct(
  id: number,
  params: Partial<Product>
): Promise<Product[] | []> {
  const response = await katanaApiClient.patch(`/products/${id}`, params);
  const data = response?.data?.data;
  if (!data || !data[0] || !data[0].id) {
    return [];
  }
  return data;
}
