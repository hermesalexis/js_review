// Objects

// Object literal
const person = {
    name: 'Hermes',
    position: 'Developer',
    age: 30
}

//console.log(person.name);

// Object constructor
function Task(name, priority){
    this.name = name;
    this.priority = priority;
}

//Add prototype to task
Task.prototype.showInfoTask = function(){
    return `Task ${this.task} has a priority of ${this.priority}` 
 }
 
// create task object
const task1 = new Task('Learn JS and React', 'Urgent');
const task2 = new Task('walk with dog', 'medium');
console.log(task1.showInfoTask());
console.log(task2.showInfoTask());
// const showInfo = showInfoTask(task1.name, task1.priority);
// console.log(showInfo);