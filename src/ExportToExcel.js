import React from 'react'
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import { Button } from 'primereact/button';

export const ExportToExcel = ({ apiData, apiNewData, fileName, finalDataSend }) => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const exportToCSV = () => {
      let obj = {Sheets:{},SheetNames:[]}
     finalDataSend.map((item,index) => {
        item['JSON'] = XLSX.utils.json_to_sheet(item.data);
      })
      let obj_upd = {
        Sheets:{},
        SheetNames:[]
      }
      finalDataSend.map((item,index)=>{
        obj_upd.Sheets[item.fileName] = item.JSON
        obj_upd.SheetNames.push(item.fileName)
      })
      const test = {...obj_upd}
      const excelBuffer = XLSX.write(test, { bookType: "xlsx", type: "array" });
      const data = new Blob([excelBuffer], { type: fileType });
      FileSaver.saveAs(data, fileName + fileExtension);
  };

  return (
    <Button className="p-button-success" icon="pi pi-check" style={{padding:'10px 30px', backgroundColor:'#6366F1', color:'#fff'}} onClick={(e) => exportToCSV(apiData, fileName)} label="Export"/>
  );
};