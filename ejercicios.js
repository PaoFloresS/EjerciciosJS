// Perfil de usuario
function perfilUsuario() {
    const nombreUsuario = prompt("Ingrese su nombre de usuario:");
    const edad = prompt("Ingrese su edad:");
    const peliculasFavoritas = prompt("Ingrese una lista de sus películas favoritas separadas por comas:");
  
    const arrayPeliculas = peliculasFavoritas.split(',').map(pelicula => pelicula.trim());
  
    console.log(`Nombre de usuario: ${nombreUsuario}`);
    console.log(`Edad: ${edad}`);
    arrayPeliculas.forEach(pelicula => console.log(`La película ${pelicula} es una de mis favoritas`));
  }
  
  // Número más alto
  function numeroMasAlto() {
    let numeros = [];
    for (let i = 0; i < 10; i++) {
      numeros.push(parseFloat(prompt(`Ingrese el número ${i + 1}:`)));
    }
  
    const numeroMayor = Math.max(...numeros);
    console.log(`El número más alto es: ${numeroMayor}`);
  }
  
  // Alarma
  function alarma() {
    const segundos = parseInt(prompt("Ingrese la cantidad de segundos para la alarma:"));
    const mensaje = prompt("Ingrese el mensaje para mostrar cuando suene la alarma:");
  
    setTimeout(() => {
      console.log(`Hora de dormir después de ${segundos} segundos`);
      console.log(mensaje);
    }, segundos * 1000);
  }
  
  // Palíndromo
  function palindromo() {
    const entrada = prompt("Ingrese una palabra o frase:");
    const entradaLimpia = entrada.toLowerCase().replace(/[^a-z0-9]/g, '');
    const esPalindromo = entradaLimpia === entradaLimpia.split('').reverse().join('');
  
    console.log(`La entrada "${entrada}" ${esPalindromo ? 'es' : 'no es'} un palíndromo.`);
  }
  
  // Factorial
  function factorial() {
    function calcularFactorial(n) {
      if (n === 1) {
        return 1;
      }
      return n * calcularFactorial(n - 1);
    }
  
    const numero = parseInt(prompt("Ingrese un número entero mayor o igual a 1:"));
    console.log(`El factorial de ${numero} es ${calcularFactorial(numero)}`);
  }
  
  // Arreglo plano
  function arregloPlano() {
    let multiDimension = [1, [2, 3, [4, 5, [6]]]];
  
    function aplanarArreglo(arr) {
      return arr.reduce((plano, aAplanar) => {
        return plano.concat(Array.isArray(aAplanar) ? aplanarArreglo(aAplanar) : aAplanar);
      }, []);
    }
  
    const arregloAplanado = aplanarArreglo(multiDimension);
    console.log(arregloAplanado);
  }
  
  // Llamadas a las funciones para demostrar su funcionalidad
  perfilUsuario();
  numeroMasAlto();
  alarma();
  palindromo();
  factorial();
  arregloPlano();