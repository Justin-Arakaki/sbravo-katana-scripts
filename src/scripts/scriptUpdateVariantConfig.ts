import '../utils/setupDotenv';
import xlsxSheetToJson from '../utils/xlsxSheetToJson';
import { katanaProduct } from '../api/product';
import { katanaVariant } from '../api/variant';

type ItemRow = {
  Description: string;
  'Engineering Number': string;
  'Alternate Number': string;
  Location: string;
  PDF: string;
  Notes: string;
};

// EDIT THESE
const productName = 'BK Valve Bracket Bar Sub-Assembly, Unfinished';
const configName = 'Description';

// configName has to match spreadsheet

const productList = await katanaProduct.get({ name: productName });
const product = productList[0];
const productId = product.id;
const variantList = product.variants;
const variantSkus = variantList.map((variant) => variant.sku);

const firstVariantConfigs = variantList[0].config_attributes;
const hasOnlyDescription =
  firstVariantConfigs.length === 0 ||
  (firstVariantConfigs.length === 1 &&
    firstVariantConfigs[0].config_name === 'Description');

if (!hasOnlyDescription) {
  console.log('Avoiding travesty');
  process.exit();
}

const partMasterDetails = xlsxSheetToJson(
  '../data/Parts List.csv'
) as ItemRow[];

const allDescriptions = partMasterDetails
  .filter((part) => variantSkus.includes(part['Engineering Number']))
  .map((part) => part[configName]);

await katanaProduct.update(productId, {
  configs: [
    {
      name: configName,
      values: allDescriptions,
    },
  ],
});

for (const variant of variantList) {
  const part = partMasterDetails.find(
    (u) => u['Engineering Number'] === variant.sku
  );

  if (typeof part === 'undefined') {
    continue;
  }

  await katanaVariant.update(variant.id, {
    config_attributes: [
      {
        config_name: configName,
        config_value: part[configName],
      },
    ],
  });
}
