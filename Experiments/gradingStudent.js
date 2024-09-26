
const distFromFive = n => {                         // Obtain nearest multiple of 5 from n
    if (n % 5 === 0) { return [0, n]; }             // n is already a multiple of 5
    else{
        const rounded = Math.round(n/10) * 10;      // Round to nearest tenth integer
        if (rounded > n) {                          // Was n rounded up?
            return [rounded - n, rounded];          // Closest multiple of 5 is next tenth
        } else if (rounded < n) {                   // Was n rounded down?
            if (rounded+5 - n < n - rounded) {      // Is n closer to midpoint of tenths?
                return [rounded+5 - n, rounded+5];  // Closest multiple of 5 is midpoint
            } else {                                // n is closer to previous tenth
                return [n - rounded, rounded];      // Closest multiple is previous tenth
            }
        }
    }   
}

const nextFiveMultiple = n => {                     // Obtain next multiple of 5
    if (n % 5 === 0) { return n; }                  // n is already a multiple of 5
    else{
        const rounded = Math.round(n/10) * 10;      // Round to nearest tenth intger
        if (rounded < n) { return rounded + 5; }    // n rounded down? Return midpoint of tenth
        else { return rounded; }                    // Otherwise, next tenth is next 5-multiple
    } 
}

function gradingStudents(grades) {
    // Write your code here
    for (let i=0; i < grades.length; i++) {
        const score = nextFiveMultiple(grades[i]);
        if (Math.abs(grades[i] - score) < 3 && score > 39) {
            grades[i] = score;
        }
    }
    return grades;
}


console.log(nextFiveMultiple(57));
console.log(nextFiveMultiple(84));
console.log(nextFiveMultiple(38));
console.log(nextFiveMultiple(45));

console.log(distFromFive(57));
console.log(distFromFive(84));
console.log(distFromFive(38));
console.log(distFromFive(45));

