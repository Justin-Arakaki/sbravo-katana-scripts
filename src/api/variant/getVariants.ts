import qs from 'qs';
import katanaApiClient from '../../config/katanaApiClient';
import { Variant } from '../../types/variant';

export default async function getVariants(
  params: Partial<Variant>
): Promise<Variant[] | []> {
  const queryString = qs.stringify(params, { arrayFormat: 'repeat' });
  const response = await katanaApiClient.get(`/variants?${queryString}`);
  const data = response?.data?.data;
  if (!data || !data[0] || !data[0].id) {
    return [];
  }
  return data;
}
