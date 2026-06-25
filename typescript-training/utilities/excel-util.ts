import fs from 'fs';
import xlsx from 'xlsx';

export class ExcelUtil{

    static readExcel(filepath:string, sheetname:string):object {

        if(!fs.existsSync(filepath)){
            throw new Error(`File Not Found- ${filepath}`);
        }
        const workbook= xlsx.readFile(filepath);
        const sheet=workbook.Sheets[sheetname];

        if(!sheet){
            throw new Error(`SheetName NOt Found- ${sheet}`);
        }

        return xlsx.utils.sheet_to_json(sheet);
    }

}

const jsonObject=ExcelUtil.readExcel("./testdata/TestData.xlsx","Sheet1");
console.log(jsonObject);