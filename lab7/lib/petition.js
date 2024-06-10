const Bun = require("bun");
const generateFibonacci = require("./fibonacci.js");

const server = Bun.serve({
    port: 3000,
    fetch(req) {
        const url = new URL(req.url);
        const n = parseInt(url.searchParams.get("n"));

        if (isNaN(n) || n <= 0) {
            return new Response(
                JSON.stringify({ error: "Invalid number" }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }

        const fibSeries = generateFibonacci(n);

        return new Response(
            JSON.stringify(fibSeries),
            { headers: { "Content-Type": "application/json" } }
        );
    }
});

console.log("Server is running on http://localhost:3000");
