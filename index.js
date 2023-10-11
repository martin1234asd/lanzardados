// Función para lanzar un dado y devolver un número aleatorio del 1 al 6
function lanzarDado() {
    return Math.floor(Math.random() * 6) + 1;
  }
  
  // Función para simular el lanzamiento de dos dados y sumar los resultados
  function lanzarDados() {
    const numLanzamientos = parseInt(prompt("Ingrese la cantidad de lanzamientos:"));
  
    // Crear un array de objetos para almacenar los resultados
    const resultados = Array(numLanzamientos).fill(0).map(() => {
      const dado1 = lanzarDado();
      const dado2 = lanzarDado();
      return { suma: dado1 + dado2, dado1, dado2 };
    });
  
    // Mostrar los resultados en forma de tabla
    console.table(resultados);
  
    // Calcular la cantidad de apariciones de cada suma y mostrarlo
    const apariciones = resultados.reduce((acc, resultado) => {
      const suma = resultado.suma;
      acc[suma] = (acc[suma] || 0) + 1;
      return acc;
    }, {});
  
    console.log("Cantidad de apariciones de cada suma:");
    console.table(apariciones);
  }
  
  // Invocar la función principal
  lanzarDados();