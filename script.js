//your JS code here. If required.
console.log("Aliens have arrived on Earth!");

// Macrotask - Simulating a large task
setTimeout(() => {
    console.log("Processing macrotask (large task)...");

    // Microtask 1
    Promise.resolve().then(() => {
        console.log("Processing microtask 1 in the macrotask...");
    });

    // Microtask 2
    Promise.resolve().then(() => {
        console.log("Processing microtask 2 in the macrotask...");
    });
}, 0);

// Microtask outside of the macrotask
Promise.resolve().then(() => {
    console.log("Processing microtask outside of the macrotask...");
});

console.log("End of script.");

// Output:
// Aliens have arrived on Earth!
// End of script.
// Processing microtask outside of the macrotask...
// Processing macrotask (large task)...
// Processing microtask 1 in the macrotask...
// Processing microtask 2 in the macrotask...

