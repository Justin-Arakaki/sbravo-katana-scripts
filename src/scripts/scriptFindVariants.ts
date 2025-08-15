import '../utils/setupDotenv';
import writeArrayToExcel from '../utils/writeArrayToExcel';
import xlsxSheetToArr from '../utils/xlsxSheetToArr';
import { katanaProduct } from '../api/product';
import { katanaVariant } from '../api/variant';

// configName has to match spreadsheet
const variantList = xlsxSheetToArr('../data/Variant Search List.csv');

const katanaVariantList = await katanaVariant.get({ sku: 'FRPSHELS-900001' });
const katanaProductList = await katanaProduct.get({ name: 'B1000 Box' });

console.log(katanaProductList[0].configs);
const existingSkuSet = new Set(katanaVariantList.map((item) => item.sku));
const missingSkus = variantList.filter((sku) => !existingSkuSet.has(sku));
const excelData = [['sku'], ...missingSkus.map((sku) => [sku])];
writeArrayToExcel(excelData, '../data/missing_skus.csv', 'MissingSKUs');
