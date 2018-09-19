import Task from './task.js';
import Purchase from './purchase.js';

const task1 = new Task('Salir a pasear', 'urgente');
console.log(task1);

task1.show();

const purchase = new Purchase('pasajes concierto', 'alta', 2);
purchase.show();