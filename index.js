//// Luciano

class Persona {
    constructor(nombre) {
        this.nombre = nombre
    }

    saludar() {
        return "Hola, soy"+ this.nombre
    }
}

const Ethan = new Persona('Ethan')
Ethan.saludar()