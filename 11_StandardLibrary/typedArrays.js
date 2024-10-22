
const typedArray = (() => {
    let bytes = new Uint8Array(1024);       // 1024 bytes
    let matrix = new Float64Array(9);       // A 3x3 matrix
    let point = new Int16Array(3);          // A point in 3D space
    let rgba = new Uint8ClampedArray(4);    // A 4-byte RGBa pixel value
    let sudoku = new Int8Array(81);         // A 9x9 sudoku board
    let white = Uint8ClampedArray.of(       // Clamps out values not in range 0-255
        255, 255, 255, 0);
    
    [bytes, matrix, point, rgba, sudoku, white].forEach(
        v => console.log(v.slice(0,41).toString()));
    
    let ints = Uint32Array.from(white);     // The same 4 numbers, but as ints
    Uint8Array.of(1.23, 2.99, 45000);       // => new Uint8Array([1,2,200])
    console.log(ints.toString());
})();


const arrayBuffers = (() => {
    let buffer = new ArrayBuffer(1024*1024);
    console.log(buffer.byteLength);         // => 1024^2 => 1048576
})();
