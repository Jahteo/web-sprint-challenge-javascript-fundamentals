// ==== Closures ====

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation:

console.log("Functions can always reach outside of themselves to pull information in. nested function is an example of that, where it first looks for the `internal` variable inside itself, and then looks in to the next outer layer (myFunction in this case) to find the needed variable. This is an example of block scope.")

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation (param) {
  let sum = 0;
  for (i = 1 ; i <= param ; i++) {
    sum = sum + i;
  }
  console.log("Counter sum: ", sum)
  return sum
}

summation(4)