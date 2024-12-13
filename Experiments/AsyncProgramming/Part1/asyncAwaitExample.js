
// Promises :: Async-Await

const preHeatOven = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const preHeatOven = true;
            if(preHeatOven) {
                resolve("Preheat oven to 180 degrees");
            } else {
                reject("Failed Task"); 
            }
        }, 1000);
    })
};


const addSugarAndChocoChips = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const addChoco = true;
            if(addChoco) {
                resolve("Place butter and chocolate chips, stir until buttery");
            } else {
                reject("Failed Task"); 
            }
        }, 1000);
    })
};


const addFlourCocoaAndSalt = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
        }, 3100);
    });
}


const bakeMixture = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
        }, 1);
    });
}


const bakeChocoBrownies = async() => {
    try {
        const taskOne = await preHeatOven();
        console.log(taskOne);

        const taskTwo = await addSugarAndChocoChips();
        console.log(task)
    }
    catch (error) {
        console.log(error)
    }
}

