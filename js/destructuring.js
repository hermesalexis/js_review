// Object Destructuring
const learningJS = {
    version: {
        new_v : 'ES6',
        earlier : 'ES5'
    },
    frameworks: ['React', 'VueJS', 'AngularJS']
}

// Destructuring is extract values from a object

console.log(learningJS);

// Earlier version
// let version = learningJS.version.new;
// let frameworks = learningJS.frameworks;
// console.log(frameworks); 

// Destructuring new form
let {earlier, new_v} = learningJS.version;
console.log(earlier);
console.log(new_v);