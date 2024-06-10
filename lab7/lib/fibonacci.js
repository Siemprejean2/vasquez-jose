function generateFibonacci(n) {
    if (n <= 0) return [];

    const fibSeries = [0, 1];

    while (fibSeries.length < n) {
        const nextFib = fibSeries[fibSeries.length - 1] + fibSeries[fibSeries.length - 2];
        fibSeries.push(nextFib);
    }

    return fibSeries.slice(0, n);
}

module.exports = generateFibonacci;
