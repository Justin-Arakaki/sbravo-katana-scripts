import xlsx from 'xlsx';

export default function xlsxSheetToArr(path: string): string[] {
  const workbook = xlsx.readFile(path);
  const firstSheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[firstSheetName];
  const data: any[][] = xlsx.utils.sheet_to_json(sheet, { header: 1 });
  return data.map((row) => row[0]).filter((v) => v != null && v !== '');
}
