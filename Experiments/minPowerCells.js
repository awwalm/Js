
function minPowerCells2(cells) {
    // Have to sort first
    cells = cells.sort((a,b) => a-b);
    console.log(cells);
    let [cells0, cells1, cells2] = [0,0,0];

    // Case 1: Singleton array
    if (cells.length === 1){
        // console.log("Case 1 detected");
        cells0 = cells[0];
        return cells0;
    } 
    // Case 2: Duple array
    else if (cells.length === 2) {
        // console.log("Case 2 detected");
        [cells0, cells1] = [cells[0], cells[1]];
        return cells0 + cells1;
    } 
    // Case 3: Triplet array
    else if (cells.length === 3) {
        // console.log("Case 3 detected");
        [cells0, cells1, cells2] = [cells[0], cells[1], cells[2]];
        return ((cells0 + cells1) * 2) + cells2;
    }
    // Case n: Array size > 3
    else {
        console.log("Case n > 3 detected");
        let power = ((cells[0] + cells[1]) * 2) + cells[2];
        for (let i=3; i < cells.length; i++) {
            power = (power * 2) + cells[i];
        }
        return power;
    }
}


/**Can be improved by using Heaps. */
function minPowerCells(cells) {
    console.log(cells);
    let power = 0;
    while(cells.length > 1) {
        cells.sort((a,b) => a-b);
        let [n, m] = [cells.shift(), cells.shift()];
        power += n + m;
        cells.push(n + m);
    }
    return power;
}



if (require.main === module) {
    console.log(minPowerCells([30,10,20]));
    console.log(minPowerCells([20,40,30]));
    console.log(minPowerCells([10,20,30,40,50,60,70]));
    console.log(minPowerCells([1, 2, 3, 4, 5]));
    console.log(minPowerCells([100,50,75]));
    console.log(minPowerCells([10,10,10,10]));
    console.log(minPowerCells([9,5,1,3,7,3,1,1,1,4,1,5,1,2,1,1]));
}
