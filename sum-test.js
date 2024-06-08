// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
/*
1-Parametro es un String
2-Es una función y allí hay que hacer lo que necesitamos hacer
*/
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});