import katanaApiClient from '../../config/katanaApiClient';
import { apiErrorResponse } from '../../types/apiError';
import { Variant } from '../../types/variant';

export default async function updateVariant(
  id: number,
  params: Partial<Variant>
): Promise<Variant[] | []> {
  try {
    const response = await katanaApiClient.patch(`/variants/${id}`, params);
    const data = response?.data?.data;
    if (!data || !data[0] || !data[0].id) {
      return [];
    }
    return data;
  } catch (err) {
    const apiError = err as apiErrorResponse;
    console.dir(apiError.response.data.error, { depth: null, colors: true });
    return [];
  }
}
