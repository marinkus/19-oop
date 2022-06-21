class Parrot {
    constructor (name) {
        this.name = name;
        this.kartai = 0;
    }
    voice () {
            this.kartai += 1;
            return `${this.name} durak, pakartojo kartu - ${this.kartai}`;
        }
    noVoice () {
            return `${this.name} nemoka kalbeti`
        }
}

module.exports = Parrot;