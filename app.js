let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}


const fromDollarToYen = (dolars) => {

    let oneDolar = dolars / oneEuroIs.USD;
    return oneDolar * oneEuroIs.JPY;
}


const fromEuroToDollar = (euro) => {
    return euro*oneEuroIs.USD;
}
    
    
const fromYenToPound = (yen) => {
    let oneYen= yen/oneEuroIs.JPY;
    return oneYen * oneEuroIs.GBP;
}
        

module.exports = {fromDollarToYen,fromEuroToDollar,fromYenToPound};
        
        // const sum = (a,b) => {
        //     return a + b
        //     }
        

        // console.log(sum(7,3))
        
        // //Exportar la dunción a otro archivo para que se pueda utilizar en otro archivo