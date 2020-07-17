// assignment-1 -feetToMile

function feetToMile(feet){
    if (feet<=0){
        console.log('Put valid number')
    }
    else{
        {
            var mile = feet / 5280;
            return mile;
        }
    }
}

var output = feetToMile(5646);
output = output.toFixed(2);
console.log(output);


// assignment-2 -woodCalculator

function woodCalculator(chair, table, bed){
    var volume = chair*1+ table*3 + bed*5;
    return volume;
}
var output = woodCalculator(2, 2, 2);
console.log(output);



// assignment-3-brickCalculator


function brickCalculator(floorNos) {

    if (floorNos <= 10) {
        var brick = 1000 * 15 * floorNos;
    }
    else if (floorNos <= 20) {
        var brick = 1000 * 15 * 10 + 1000 * 12 * (floorNos - 10);
    }
    else if (floorNos > 20) {
        var brick = 1000 * 15 * 10 + 1000 * 12 * 10 + 1000 * 10 * (floorNos - 20);
    }
    return brick;
}
var output = brickCalculator(20); 
console.log(output);


// assignment-4-tinyFriend


function tinyFriend(arr) {
    let shortest = '';

    if (arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] === 'string') {
                if (shortest.length == 0) {
                    shortest = arr[i]; continue;
                }

                if (arr[i].length < shortest.length) {
                    shortest = arr[i];
                }

            }
        }
    }
    return shortest;
}
var output = tinyFriend(['kamal', 'jui', 'ka', 'jamal', 'jay']);
console.log(output);