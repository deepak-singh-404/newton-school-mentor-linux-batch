function register() {
    let data = { "name": "User103", "email": "user103@gmail.com", "password": "user", "phoneNumber": 1234568880 }
    saveData().then((responseData) => {
        console.log("Promise fulfilled===>", responseData)
    }).catch((error) => {
        console.log("Promise unfullfiled==>", error.message)
    })
    //alert("Its working man")
}


//Generic function which return promise
//promise will get fulfilled =>  Data has been saved successfully in the database. ==> resolved
//promise will not get fulfilled => Date failed to save in database    ==> rejected 
function saveData() {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch("https://dev-servimate-admin.herokuapp.com/dev/api/v1/config/referAndEarn", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMzVlZWUxZjUyMmFhY2ZhNThkYmQ1YyIsIm5hbWUiOiJBZG1pbiAxMDEiLCJlbWFpbCI6ImFkbWluMTAxQGdtYWlsLmNvbSIsImlhdCI6MTY2NTExOTA0MSwiZXhwIjoxNjY1MTI2MjQxfQ._kv_dSzb8OSSkLOt06QgdWA6Z15t8IwdvC2rl2qt124'
                },
                body: JSON.stringify({
                    "startDate": "2022-10-04",
                    "endDate": "2022-10-06",
                    "discountType": "PERCENTAGE"
                })
            })
            resolve(response);
        }
        catch (error) {
            console.log("IN A CATCH BLOCK==========>", error)
            reject(error)
        }
    })
}

function download(filename, text) {
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);
    pom.click()
    // if (document.createEvent) {
    //     var event = document.createEvent('MouseEvents');
    //     event.initEvent('click', true, true);
    //     pom.dispatchEvent(event);
    // }
    // else {
    //     pom.click();
    // }
}

function downloadData1() {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch("https://omsapi.moglix.com/inventory/ledger/report/download", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "warehouseId": "1", "startDate": "2020-01-01", "supplierId": ["58105"], "productMsn": ["MSN153V02OY7K3", "MSN2QGT6G01HIP"] })
            })
            resolve(response);
        }
        catch (error) {
            reject(error)
        }
    })

}



function downloadData() {
    downloadData1().then((res) => {
        download("data.csv", `MSN,Inventory ID,Transation ID,Transaction Type,Stock Credit,Debit,Consumable Balance,Non Consumable Credit,Non Consumable Debit,Non Consumable Balance,Item ID,Remark,Date Time,Warehouse Name,Supplier Id,Supplier Name,Product Name,STN,type
        MSN2QGT6G01HIP, 23347, 128136, INWARD, 26,, 26,,, 0, 0, Supplier Vmi Inventory added, 2022 - 02 - 21 22: 30: 43, "Delhi ", 58105, Mukul Enterprises, "Kirloskar Jalraj-1 Ultra 1HP Centrifugal Pump with 1 Year Warranty, Total Head: 100 ft", null, 1
        MSN2QGT6G01HIP, 23363, 128155, SUPPLIER_RETURN, 26,, 52,,, 0, 0, Supplier Vmi Inventory deducted Remark, 2022 - 02 - 21 22: 37: 59, "Delhi ", 58105, Mukul Enterprises, "Kirloskar Jalraj-1 Ultra 1HP Centrifugal Pump with 1 Year Warranty, Total Head: 100 ft", null, 0
        MSN2QGT6G01HIP, 23347, 128156, ORDER_PLACED,, 26, 26,,, 0, 23363, Vmi inventory deducted, 2022 - 02 - 21 22: 37: 59, "Delhi ", 58105, Mukul Enterprises, "Kirloskar Jalraj-1 Ultra 1HP Centrifugal Pump with 1 Year Warranty, Total Head: 100 ft", null, 0`)
        console.log("DATA DOWNLOADED==>", res)

    }).catch((err) => {
        console.log("ERROR OCCURED", err.message)
    })
}




//promise take function as an argument
/*
function might be sync or async
but in 99 % function will be async.

above function will take two arg resolve, reject
1- fullfil
2- not fulfill
*/


/*
setTimeout
setInterval
clearInterval
fetch

*/