const { fromEuroToDollar,fromDollarToYen,fromYenToPound } = require('./app.js');


test("One euro should be 3,745 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    
    const dollars = fromEuroToDollar(3.5);

    const expected = 3.5 * 1.07;

    expect(fromEuroToDollar(3.5)).toBeCloseTo(expected, 2);
    })
    
    test("One dollar should be 511,9158878504672897196261682243 yens", function() {
    const { fromDollarToYen } = require('./app.js');
    
    const dollars = fromDollarToYen(3.5);
    
    const expected = (3.5 /1.07) * 156.5;
    
    expect(fromDollarToYen(3.5)).toBeCloseTo(expected, 2);
    })

    test("One yen should be 0.01945686900958466453674121405751 british pound", function() {

        const { fromYenToPound } = require('./app.js');
        
        const dollars = fromYenToPound(3.5);
  
        const expected = (3.5 /156.5) * 0.87;

        expect(fromYenToPound(3.5)).toBeCloseTo(expected, 2);
    })