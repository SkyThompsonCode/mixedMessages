// function to get random number
function genRandNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
}

// object of arrays for madLib words
const madLibs = {
    noun: ['dog', 'pencil', 'car', 'jacket', 'sword', 'lamp', 'swimming pool'],
    verb: ['digs', 'throws', 'runs', 'audits', 'smells', 'farts', 'tackles', 'remembers'],
    adjective: ['sleepy', 'smelly', 'stupid', 'trustworthy', 'dark', 'angular', 'small', 'quiet'],
    adverb: ['quickly', 'haphazardly', 'intelligently', 'slowly', 'abnormally', 'anxiously', 'ultimately']
}

// array to store user mad lib
let userMadLib = [];

// loop to determine word choices
for (let word in madLibs) {

}
