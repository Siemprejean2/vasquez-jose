// Importamos la función fibonacci del archivo fibonacci.js
import { fibonacci } from './fibo-numb.js';
// Función para mostrar las tarjetas con los números de Fibonacci
  export function displayFibonacciCards(number) {
    const fibonacciNumbers = fibonacci(number);
    const cardsContainer = document.getElementById('fibonacciCards');
    cardsContainer.innerHTML = '';
    fibonacciNumbers.forEach((fibNumber, index) => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `<p>Número: ${index + 1}</p><p>Fibonacci: ${fibNumber}</p>`;
          // Agregar un event listener a cada tarjeta
    card.addEventListener('click', function() {
      // Mostrar una alerta al usuario y pedir confirmación para eliminar la tarjeta
      const confirmation = confirm('¿Desea eliminar esta tarjeta?');
      // Si el usuario confirma, eliminar la tarjeta
      if (confirmation) {
        card.remove(); // Eliminar la tarjeta
      }
    });
    cardsContainer.appendChild(card);
  });
}