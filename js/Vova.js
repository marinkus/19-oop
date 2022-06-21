class Vertaliot {
    constructor(name) {
        this.name = name;
    }
    mama () {
        return `Moja ${this.name} vertaliot, vsem dajot, a pape vot`
    }
    papa () {
        return `Moj ${this.name} vertaliot, vsex jebiot, a mame vot`
    }
    lena () {
        return `${this.name} tozhe vertaliot - kurit, pjot i vrot beriot`
    }
    ded () {
        return `${this.name} tozhe vertaliot, xuj vesit a tolku vot`
    }
    baba () {
        return `${this.name} tozhe vertaliot, atjebalas - smerti zhdiot`
    }
    vova () {
        return `${this.name} tozhe vertaliot, napizdelsia - spat' idiot`
    }
}


module.exports = Vertaliot;