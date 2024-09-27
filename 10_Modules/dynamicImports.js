
/**
 * Dynamic Imports with `import()`:
 * 
 * You pass a module specifier to `import()` and it returns 
 * a **Promise** object that represents the asynchronous process 
 * of loading and running the specified module. 
 * When the dynamic import is complete, the Promise is “fulfilled”
 * (see Chapter 13 - Asynchronous Programming) and produces an object 
 * like the one you would get with the `import * as` form 
 * of the static import statement. 
 * So instead of importing the `“./stats.js”` module statically, like this:
 * 
 * ```
 * import * as stats from "./stats.js";
 * ```
 * We might import is as follows:
 * 
 * ```
 * import(".stats.js").then(stats => {
    let average = stats.mean(data);
})
 * ```
 */
const dynamicImports = () => {  };

/**
 * Or, in an `async` function, we can simplify the code with `await`:
 */
async function analyzeData(data) {
    let stats = await import("./stats.js");
    return {
        average: stats.mean(data),
        stddev: stats.stddev(data)
    }
}