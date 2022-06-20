const Dog = require('./js/Dog.js')

/* 

OOP - object oriented programming
parametrai - ka zinau, koks as (informacija)
metodai - ka galiu (funkionalumas)

*/
console.clear();

const rex = new Dog('Rex', 'taksas');
const brisius = new Dog('Brisius', 'Lietuvos lenciuginis');

console.log(rex.voice());
console.log(brisius.voice());

console.log(rex.getBone());
console.log(brisius.getBone());
console.log(rex.getBone());
console.log(brisius.getBone());
console.log(rex.getBone());
console.log(brisius.getBone());
console.log(rex.getBone());
console.log(brisius.getBone());
console.log(rex.getBone());
console.log(brisius.getBone());


console.log(rex.intro());
console.log(rex.changeName('Reksas'));

