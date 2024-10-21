let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let object = [{num: 1}, {num: 2}, {num: 3}, {num: 4}, {num: 5}, {num: 6}, {num: 7}, {num: 8}, {num: 9}];

function filterReduce()
{
    console.log(array.filter((num) => {return !(num%2)}).reduce((result, num) => result + num, 0));

    console.log(object.filter((num) => {return num.num%2}).reduce((result, num) => result + num.num, 0));
}