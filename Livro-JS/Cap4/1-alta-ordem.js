const number = [1,2,3,4,5];

//arrow function
const square = number.map( x => x * x )

/**     Function Tradicional
        const square = number.map( function (x) { return x * x })
 */

console.log(square);