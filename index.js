const ExcelJS = require('exceljs');

const workbook = new ExcelJS.Workbook();

workbook.creator = 'ME';
workbook.lastModifiedBy = 'ME';
workbook.modified = new Date();
workbook.lastPrinted = new Date(2016, 9, 27);

workbook.views = [
    {
        x: 0, y: 0, width:10000, height: 20000,
        firstSheet: 0, activeTab: 1, visibility: 'visible'
    }
]

const sheet = workbook.addWorksheet('My Sheet');
