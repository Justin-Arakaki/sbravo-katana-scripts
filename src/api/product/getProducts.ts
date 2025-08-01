import qs from 'qs';
import katanaApiClient from '../../config/katanaApiClient';
import { apiErrorResponse } from '../../types/apiError';
import { Product } from '../../types/product';

export default async function getProducts(
  params: Partial<Product>
): Promise<Product[] | []> {
  const queryString = qs.stringify(params, { arrayFormat: 'repeat' });

  try {
    const response = await katanaApiClient.get(`/products?${queryString}`);
    const data = response?.data?.data;
    if (!data || !data[0] || !data[0].id) {
      console.log(response);
      return [];
    }
    return data;
  } catch (err) {
    const apiError = err as apiErrorResponse;
    console.dir(apiError.response.data.error, { depth: null, colors: true });
    return [];
  }
}
