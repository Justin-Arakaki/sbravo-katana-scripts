import qs from 'qs';
import katanaApiClient from '../../config/katanaApiClient';
import { Variant } from '../../types/variant';

export default async function getVariants(
  params: Partial<Variant> & { limit?: number; page?: number }
): Promise<Variant[]> {
  const limit = params.limit ?? 250;
  let page = params.page ?? 1;
  let allVariants: Variant[] = [];

  while (true) {
    const queryParams = { ...params, limit, page };
    const queryString = qs.stringify(queryParams, { arrayFormat: 'repeat' });
    const response = await katanaApiClient.get(`/variants?${queryString}`);
    const data = response?.data?.data;

    if (!data || !data.length || !data[0].id) {
      break; // no more valid data
    }

    allVariants = allVariants.concat(data);

    if (data.length < limit) {
      break; // last page reached
    }

    page++;
  }

  return allVariants;
}
