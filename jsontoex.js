
//import library
const ExcelJS = require('exceljs');

const file = "C:/New/jsonToXlsx.json";
fs = require('fs') ;


//create new workbook
var workbook = new Excel.Workbook();


//setting properties
workbook.creator = 'kvyshydkevich';
workbook.lastModifiedBy = 'kvyshydkevich';
workbook.created = new Date(2019, 8, 30);
workbook.modified = new Date();
workbook.lastPrinted = new Date(2019, 9, 27);



// write to a file
var workbook = createAndFillWorkbook();
workbook.xlsx.writeFile(filename)
  .then(function() {
    // done
  });
 
// write to a stream
workbook.xlsx.write(stream)
  .then(function() {
    // done
  });
 
// write to a new buffer
workbook.xlsx.writeBuffer()
  .then(function(buffer) {
    // done
  });