const bodyOne = "bald";
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

const bodyArr = [bodyOne,bodyTwo,bodyThree];
const colorArr = [colorOne,colorTwo,colorThree,colorFour,colorFive];
const moodArr = [moodOne, moodTwo, moodThree, moodFour];

function generator (arr1,arr2,arr3) {
    
    let ran1 = Math.floor((Math.random() * arr1.length));
    let ran2 = Math.floor((Math.random() * arr2.length));
    let ran3 = Math.floor((Math.random() * arr3.length));

    let newBody = bodyArr[ran1]
    let newColor = colorArr[ran2]
    let newMood = moodArr[ran3]

    console.log(
        `Your monster is ${newBody}, ${newColor}, and ${newMood}!`
    );
};

generator(bodyArr,colorArr,moodArr);