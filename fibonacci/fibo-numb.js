//fibo-numb.js
// Función para calcular la serie de Fibonacci
export function fibonacci(n) {
    let fibArray = [0, 1];
    for (let i = 2; i < n; i++) {
      fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
    }
    return fibArray;
  }
  