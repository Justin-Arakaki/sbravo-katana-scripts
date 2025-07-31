import '../utils/setupDotenv';
import xlsxSheetToJson from '../utils/xlsxSheetToJson';

const product = 'B1000 Side Frame';
const stuff = xlsxSheetToJson('../data/Parts List.xlsx');
console.log(stuff);
