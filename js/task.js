export default class Task{
    constructor(name, priority){
        this.name = name;
        this.priority = priority;
    }

    show(){
        console.log(`${this.name} tiene una prioridad de ${this.priority}`);
    }
}
