import Task from './task.js'

export default class Purchase extends Task {
    constructor(name, priority, quantity) {
        super(name, priority);
        this.quantity = quantity;
    }

    show() {
        super.show();
        console.log(`y la cantidad de ${this.quantity}`);
    }
}