const Vertaliot = require('./Vova.js');

console.clear();

const mama = new Vertaliot('Mama');
const papa = new Vertaliot('Papa');
const lena = new Vertaliot('Lena');
const ded = new Vertaliot('Ded');
const baba = new Vertaliot('Baba');
const vova = new Vertaliot('Vova');

function seima(narys) {
    switch (narys) {
        case mama:
            return narys.mama() + '---- ir Parodo spyga';
            break;
        case papa:
            return narys.papa() + '---- ir Parodo spyga';
            break;
        case lena:
            return narys.lena();
            break;
        case ded:
            return narys.ded() + '---- ir Parodo spyga';
            break;
        case baba:
            return narys.baba();
            break;
        case vova:
            return narys.vova();
            break;
        default:
            return 'Vova gauna per ausi ir eina miegoti';
            break;
    }
}
console.log(seima(vova));