document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('getFibonacci').addEventListener('click', async () => {
        const count = document.getElementById('n').value;
        
        try {
            const response = await fetch(`http://localhost:3000/fibonacci?n=${count}`);
            const data = await response.json();
            const resultDiv = document.getElementById('result');

            if (data.error) {
                resultDiv.innerHTML = `<p style="color: red;">${data.error}</p>`;
            } else {
                resultDiv.innerHTML = `<p>${data.fibonacci.join(', ')}</p>`;
            }
        } catch (error) {
            console.error('Error fetching Fibonacci series:', error);
            resultDiv.innerHTML = `<p style="color: red;">Failed to fetch Fibonacci series.</p>`;
        }
    });
});
