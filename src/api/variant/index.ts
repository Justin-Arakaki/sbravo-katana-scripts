import getAllVariants from './getAllVariants';
import getVariants from './getVariants';
import updateVariant from './updateVariant';

export const katanaVariant = {
  get: getVariants,
  getall: getAllVariants,
  update: updateVariant,
};
