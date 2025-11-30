const utils = require('./utils');
let value = utils.excelReader('../testData/Testdata.xlsx');
let database = require('./databaseAccess.js');
let users;
/*
//Method 1
 setTimeout(function() {//regulare call to async excelReader() with response wait due to timeout -- returns promise object only
    console.log(value);
  },1000)

//Method 2 (preferred)  
const printUsers = async () => {//async call with await -- returns 2D array instead of promise object
    users = await utils.excelReader('../testData/Testdata.xlsx');
    console.table(users);
    console.log(users);
    console.log(users[1][1])
  }

  printUsers(); //calling the function expression defined in Method 2  
  */
/* let dates = ['2022-10-1', '2022-10-20']
  console.log(utils.dateComparison(dates, '2022-10-1', '2022-10-5'));

  let records = ['Sans sarif', 'verdena', 'calibri', 'times new roman'];
  console.log(utils.recordExists(records, 'VERDENa'));
*/

//database.testQuery();
//database.testSp();
let param = [877, 1855120,   2983748,    77725,   1,      true];

    database.verifySubscriberInvoicePerPackage(param);