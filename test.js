const { fromEuroToDollar,fromDollarToYen,fromYenToPound } = require('./app.js');


test("One euro should be 3,745 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');
    
    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);
    
    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;
    
    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
    })
    
    test("One dollar should be 586,0925 yens", function() {
        // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');
    
    // Uso la función como debe ser usada
    const dollars = fromDollarToYen(3.5);
    
    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = (3.5 *1.07) * 156.5;
    
    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(3.5)).toBe(586.0925); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
    })
    test("One yen should be 476.5425 british pound", function() {
        // Importo la funcion desde app.js
        const { fromYenToPound } = require('./app.js');
        
        // Uso la función como debe ser usada
        const dollars = fromYenToPound(3.5);
        
        // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
        const expected = (3.5 *156.5) * 0.87;
        
        // Hago mi comparación (la prueba)
        expect(fromYenToPound(3.5)).toBe(476.5425); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
    })
        // // Importar la función sum del archivo app.js
        // const { sum } = require('./app.js');
        
        // // Comienza tu primera prueba
        // /*
        // 1-Parametro es un String
        // 2-Es una función y allí hay que hacer lo que necesitamos hacer
        // */
        // test('adds 14 + 9 to equal 23', () => {
        //     // Dentro de la prueba llamamos a nuestra función sum con 2 números
        //     let total = sum(14, 9);
        
        //     // Esperamos que la suma de esos 2 números sea 23
        //     expect(total).toBe(23);
        // });
        