class Dog {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
        this.bones = 0;
    }
    voice() {
        return `${this.name}: Au au!`;
    }
    intro () {
        return `Hello, my name is ${this.name} and my breed is ${this.breed}`
    }
    getBone() {
        this.bones += 1;
        return `${this.name}: ${this.bones} bone/-s`
    }
    changeName(newName) {
        const oldName = this.name
        this.name = newName;
        return `${oldName} -> ${newName}`
    }
}

module.exports = Dog;