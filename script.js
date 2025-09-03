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
};

// store random word selections
let madNoun = madLibs.noun[genRandNumber(madLibs.noun.length)];
let madVerb = madLibs.verb[genRandNumber(madLibs.verb.length)];
let madAdj = madLibs.adjective[genRandNumber(madLibs.adjective.length)];
let madAdv = madLibs.adverb[genRandNumber(madLibs.adverb.length)];

// object of arrays for random story template
const madStories = {
    story1: [`There once was a ${madNoun} that could sail all day. But one day, the ${madNoun} had an accident. It ${madAdv} went to the harbor doctor to assess the damage. The doctor ${madVerb} through his notes and says, "I'm sorry, but you are ${madAdj}". The ${madNoun} went home.`],
    story2: [`One day, a ${madAdj} ${madNoun} took a stroll down a nature trail. It started raining ${madAdv}. The ${madNoun} had to think quick to get to safety. The ${madNoun} ${madVerb} up to a tree and hangs on for dear life.`],
    story3: [`Deep in the jungle, a ${madNoun} stirs. As the wildlife dances, the ${madNoun} ${madVerb} with a certain lively energy. A lizard, nearby, looks ${madAdv} at the ${madNoun}. Such is the cycle of life.`]
};

// function to get random story from madStories
function getRandomStory() {
    const keys = Object.keys(madStories);
    const randomKey = keys[genRandNumber(keys.length)];
    const storyArray = madStories[randomKey];
    return storyArray[genRandNumber(storyArray.length)];
}

// output random mad lib story!
console.log(getRandomStory());