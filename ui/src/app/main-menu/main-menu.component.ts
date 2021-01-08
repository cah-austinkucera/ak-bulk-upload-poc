import { Component, Input, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  constructor() { }
  invoice = '123'
  excelFile: any

  ngOnInit(): void {
  }

  upload(){
    console.log("clicked " + this.invoice)
    this.parseFile()
  }

  onFileChange(event: any) {
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(event.target);
    if (target.files.length !== 1) {
      throw new Error('Cannot use multiple files');
    }
    this.excelFile = target.files[0]
  }

  parseFile() {
    console.log(this.excelFile)
    const reader: FileReader = new FileReader();
    reader.readAsBinaryString(this.excelFile);
    reader.onload = (e: any) => {
      /* create workbook */
      const binarystr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(binarystr, { type: 'binary' });

      /* selected the first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      const data = XLSX.utils.sheet_to_json(ws); // to get 2d array pass 2nd parameter as object {header: 1}
      console.log(data); // Data will be logged in array format containing objects
    };
 }

}
