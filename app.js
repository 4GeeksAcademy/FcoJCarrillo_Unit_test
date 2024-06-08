let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}


const fromDollarToYen = (num) => {
    let euroToDolar= num*oneEuroIs.USD;
    return euroToDolar * oneEuroIs.JPY;
}


const fromEuroToDollar = (num) => {
    return num*oneEuroIs.USD;
}
    
    
const fromYenToPound = (num) => {
    let euroToYen= num*oneEuroIs.JPY;
    return euroToYen * oneEuroIs.GBP;
}
        

module.exports = {fromDollarToYen,fromEuroToDollar,fromYenToPound};
        
        // const sum = (a,b) => {
        //     return a + b
        //     }
        

        // console.log(sum(7,3))
        
        // //Exportar la dunción a otro archivo para que se pueda utilizar en otro archivo