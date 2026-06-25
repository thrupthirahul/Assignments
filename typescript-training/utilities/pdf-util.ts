import fs from 'fs';
import {PDFParse} from 'pdf-parse';

export class PDFUtil{

    static async readPDF(filepath:string):Promise<string>{
        
        if (!fs.existsSync(filepath)) {
            throw new Error(`File Not Found - ${filepath}`);
        }

        const dataBuffer = fs.readFileSync(filepath);
        //console.log(fs.readFileSync(filepath,"utf-8"))
        const uint8Array = new Uint8Array(dataBuffer);
        const pdfData = new PDFParse(uint8Array);
        const pdfText = await pdfData.getText();
        return pdfText.text;      
    }
}

const data:string=await PDFUtil.readPDF("./testdata/Data.pdf");
console.log(data);