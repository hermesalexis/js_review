// //default params in functions

const activityPerson = function(name = 'Walter', activity = 'developer'){
    console.log(`Person ${name} is doing ${activity}`);
}

activityPerson('Hermes', 'Learning Javascript');
activityPerson('Pedro', 'Creating a web site');
activityPerson('Antonio');
