// const Dog = require('./js/Dog.js')
const Parrot = require('./js/Parrot.js')
/* 

OOP - object oriented programming
parametrai - ka zinau, koks as (informacija)
metodai - ka galiu (funkionalumas)

*/
// console.clear();

// const rex = new Dog('Rex', 'taksas');
// const brisius = new Dog('Brisius', 'Lietuvos lenciuginis');

// console.log(rex.voice());
// console.log(brisius.voice());

// console.log(rex.getBone());
// console.log(brisius.getBone());
// console.log(rex.getBone());
// console.log(brisius.getBone());
// console.log(rex.getBone());
// console.log(brisius.getBone());
// console.log(rex.getBone());
// console.log(brisius.getBone());
// console.log(rex.getBone());
// console.log(brisius.getBone());


// console.log(rex.intro());
// console.log(rex.changeName('Reksas'));

const kesha = new Parrot('Kiesha');
const zvirblis = new Parrot('Zhvirblis');
const pterodaptelis = new Parrot('Pterodaptelis');
const gandras = new Parrot('Gandras');

function paukstis(name) {
    if (name === kesha) {
        console.log(name.voice());
        console.log(name.voice());
        console.log(name.voice());
        console.log(name.voice());
    } else {
        console.log(name.noVoice());
    }
}

console.log(paukstis(gandras));

