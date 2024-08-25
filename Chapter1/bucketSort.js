
/**
 * Sorts a sequence effeciently in quasi-linear time.
 * @param{number[]} A - An array of numbers.
 * @returns{number[]} The sorted array of `A`'s elements.
*/
function bucketSort(A) {
    // lowest, highest = min(A), max(A)
    const [lowest, highest] = [Math.min(...A), Math.max(...A)];
    if (lowest == highest) return A;

    const n = A.length;
    const num_buckets = Math.ceil(Math.sqrt(n));
    // buckets = [[] for _ in range(num_buckets)]
    const buckets = Array.from({length: num_buckets}, () => []);

    for (let i = 0; i < n; i++) {
        var bucket_index = Math.ceil(
            (A[i] - lowest) / (highest - lowest) * (num_buckets - 1));
        buckets[bucket_index].push(A[i]);
    }

    var k = 0;
    for (let b of buckets) {
        b.sort((x,y) => y-x)
        while (b.length > 0){
            A[k] = b.pop();
            k++;
        }
    }
    
    return A;
}


// Test-driver
let seq = new Array();
for (let index = 0; index < 10; index++) {
    seq.push(Math.floor(Math.random() * (1 + 10)) - 1);
}

console.log(seq.toLocaleString());
bucketSort(seq);
console.log(seq.toString());
