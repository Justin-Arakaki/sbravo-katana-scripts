import qs from 'qs';
import katanaApiClient from '../../config/katanaApiClient';
import { Product } from '../../types/product';

export default async function getProducts(
  params: Partial<Product>
): Promise<Product[] | []> {
  const queryString = qs.stringify(params, { arrayFormat: 'repeat' });
  const response = await katanaApiClient.get(`/products?${queryString}`);
  const data = response?.data?.data;
  if (!data || !data[0] || !data[0].id) {
    return [];
  }
  return data;
}
