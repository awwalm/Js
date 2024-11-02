const { performance } = require("perf_hooks");

/**
 * The first argument to setTimeout() is a function,
 * and the second argument is a number that specifies
 * how many milliseconds should elapse before the function
 * is invoked. After the specified amount of time
 * (and maybe a little longer if the system is busy),
 * the function will be invoked with no arguments.
 * Here, for example, are three setTimeout() calls
 * that print console messages after one second,
 * two seconds, and three seconds:
 */
(() => {
  let timedOps = [];

  timedOps.push(
    setTimeout(() => {
      const t1 = performance.now();
      console.log(
        `Ready...${Math.abs(t1 - performance.now()).toExponential(2)} ms`
      );
    }, 1000)
  );

  timedOps.push(
    setTimeout(() => {
      const t1 = performance.now();
      console.log(
        `Set...${Math.abs(t1 - performance.now()).toExponential(2)} ms`
      );
    }, 2000)
  );

  timedOps.push(
    setTimeout(() => {
      const t1 = performance.now();
      console.log(
        `Go! ${Math.abs(t1 - performance.now()).toExponential(2)} ms`
      );
    }, 3000)
  );

  for (let t = 0; t < timedOps.length; t++) {
    console.log(timedOps[t]);
  }
})();


// Once a second: clear the console and print the current time
let clock = setInterval(() => {
    console.clear();
    console.log(new Date().toLocaleTimeString());
}, 1000);

// After 10 seconds: stop the repeating code above.
setTimeout(() => {
    clearInterval(clock);
}, 10000);
