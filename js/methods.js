// métodos o funciones de un objeto

const person = {
    name: 'Hermes',
    lastname: 'Galvis',
    age: 30,
    music: 'Metal',
    single: true,
    showInfo: function(){
        console.log(`${this.name} has ${this.age} years`)
    }
}

person.showInfo();