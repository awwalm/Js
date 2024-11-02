const { performance } = require("perf_hooks");

const t1 = performance.now();
console.log(`t1 = ${t1} ms`);
const t2 = performance.now();
console.log(`t2 = ${t2} ms`);
console.log(`t2 - t1 = ${Math.abs(t1-t2)} ms`);

(() => {
    // The current time
    let now = new Date();
    console.log(now);

    // Midnight, January 1st, 1970, GMT
    let epoch = new Date(0);

    // A specific date and time
    let century = new Date(
        2100,           // Year 2100
        0,              // January
        1,              // 1st
        2, 3, 4, 5      // 02:03:04.005; local time
    )

    // An ISO format date
    century = new Date("2100-01T00:00:00Z");

    let d = new Date();
    console.log(d);
    d.setFullYear(d.getFullYear() + 1);
    console.log(d);

    // Formatting and parsing of Date Strings
    d = new Date(2020, 0, 1, 17, 10, 30); // 5:10:30pm on NYE
    console.table({
        STRING: d.toString(), // => "Wed Jan 01 2020 17:10:30 GMT-0800 (PST)"
        UTC: d.toUTCString(),
        LOCALE_STRING: d.toLocaleString(),
        LOCALE_DATE_STRING: d.toLocaleDateString(),
        LOCALE_TIME_STRING: d.toLocaleTimeString(d.getTime())
    })
})();

