 // Importamos la función displayFibonacciCards del archivo displayFibonacciCards.js
import { displayFibonacciCards } from './fibo-cards.js';
 // Evento de envío del formulario
 document.getElementById('fibonacciForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const numberInput = parseInt(document.getElementById('numberInput').value);
    if (!isNaN(numberInput) && numberInput > 0) {
      displayFibonacciCards(numberInput);
    } else {
      alert('Por favor ingresa un número entero positivo.');
    }
  });