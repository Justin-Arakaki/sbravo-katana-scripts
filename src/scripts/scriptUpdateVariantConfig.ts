import '../utils/setupDotenv';
import xlsxSheetToJson from '../utils/xlsxSheetToJson';
import { katanaProduct } from '../api/product';
import { katanaVariant } from '../api/variant';

const productName = 'B1000 Side Frame';

const productList = await katanaProduct.get({ name: productName });
const product = productList[0];
const productId = product.id;
const variantList = product.variants;

const partMasterDetails = xlsxSheetToJson('../data/Parts List.xlsx');
const allDescriptions = partMasterDetails.map((part) => part['Description']);

console.log(partMasterDetails);

await katanaProduct.update(productId, {
  configs: [
    {
      name: 'Description',
      values: allDescriptions,
    },
  ],
});

for (const variant of variantList) {
  const part = partMasterDetails.find(
    (u) => u['Engineering Number'] === variant.sku
  );

  await katanaVariant.update(variant.id, {
    config_attributes: [
      {
        config_name: 'Description',
        config_value: part['Description'],
      },
    ],
  });
}
