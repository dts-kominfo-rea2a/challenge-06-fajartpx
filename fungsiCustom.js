// TODO: import module bila dibutuhkan di sini
const fs = require("fs");
// ! JANGAN DIMODIFIKASI
let file1 = './data1.json';
let file2 = './data2.json';
let file3 = './data3.json';

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallback) => {
  arrHasil = [];
  fs.readFile(file1, { encoding: "utf-8" }, (err, data) => {
    if (err) {
      return fnCallback(err, null);
    }

    const jsonData1 = JSON.parse(data).message.split(' ');
  
    arrHasil.push(jsonData1[1]);

    //call dataJson 2
    fs.readFile(file2, { encoding: "utf-8" }, (err, data) => {
      if (err) {
        return fnCallback(err, null);
      }

      const jsonData2 = JSON.parse(data);
      arrHasil.push(jsonData2[0].message.split('halo ').join(' '));

      //call dataJson 3
      fs.readFile(file3, { encoding: "utf-8" }, (err, data) => {
        if (err) {
          return fnCallback(err, null);
        }
        const jsonData3 = JSON.parse(data);
        arrHasil.push(jsonData3[0]['data'].message.split('halo ').join(' '));
        fnCallback(null, arrHasil);
      });
    });
  });
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};