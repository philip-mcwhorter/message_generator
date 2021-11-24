const bodyOne = "bald"
const bodyTwo = "hairy"
const bodyThree = "slimy"
const colorOne = "green"
const colorTwo = "blue"
const colorThree = "purple"
const colorFour = "yellow"
const colorFive = "pink"
const moodOne = "mean"
const moodTwo = 'happy'
const moodThree = 'sleepy'
const moodFour = 'sad'

const bodyArr = [bodyOne, bodyTwo, bodyThree];
const colorArr = [colorOne, colorTwo, colorThree, colorFour, colorFive];
const moodArr = [moodOne, moodTwo, moodThree, moodFour];

function generator (arr1, arr2, arr3) {
    let newBody = arrayRandomizer(arr1)
    let newColor = arrayRandomizer(arr2)
    let newMood = arrayRandomizer(arr3)

    console.log(`Your monster is ${newBody}, ${newColor}, and ${newMood}!`);
}

function arrayNumberRandomizer(array) {
    return Math.floor((Math.random() * array.length));
}

function arrayRandomizer(array) {
    return array[arrayNumberRandomizer(array)]
}

generator(bodyArr, colorArr, moodArr);