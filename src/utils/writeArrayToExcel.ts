import xlsx from 'xlsx';

export default function writeArrayToExcel(
  data: any[][],
  fileName: string,
  sheetName = 'Sheet1'
) {
  const worksheet = xlsx.utils.aoa_to_sheet(data);
  const workbook = xlsx.utils.book_new();
  xlsx.utils.book_append_sheet(workbook, worksheet, sheetName);
  xlsx.writeFile(workbook, fileName);
}
