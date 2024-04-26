const api_key= "PLACEHOLDER API";
const apiUrlBase = "https://api.openweathermap.org/data/2.5/weather?q=";

// REPLACE API KEY AS PLACEHOLDER + add directions
// 60cd4256173950775ad26d4bb0272849






// questions: getting random background image according to variables
// also undefined city??
// blur effect??
// what would be a good method to get a random city from different kind of input
// how to do the placeholder thing for api




// user input: 2 numbers / letters? or rating between 1-7 or something
// gets data of 2 numbers multiplied (as number of us state, up to 49)
// check api cloud data from 0% to 100%
// displays a cloud fortune and random cloud picture for the % (0-20, 20-40, etc.)

// " areomancy / nephomancy "

let city;
let numType;
let fortune = document.getElementById("fortune");


let btn = document.querySelector("button") 
btn.addEventListener('click', () => {

    let form = document.getElementById("form");
    city= form.elements[0].value;
    let cityEncoded = encodeURI(city)
    fetchWeatherData(city);


})

async function fetchWeatherData(city){

    let apiUrl = `${apiUrlBase}${city}&appid=${api_key}`
    console.log(apiUrl)



    try{
            const response = await fetch(apiUrl);
            if(!response.ok){
                    throw new Error (`HTTP error. Status: ${response.status}  `)

            }
            const data = await response.json();
            console.log(data)
            displayWeatherData(data)
        }
        catch(error){



    }
}
function randomNum(max) {
    return Math.floor(Math.random() * max); }

function displayWeatherData(data){
    const clouds = data.clouds.all;
    let bgimg = document.getElementsByClassName("backgroundImg");

    let fortuneP1;
    let fortuneP2;
    let RandomNumber = randomNum(5)

    if(clouds <= 20){
        numType = "20"
        fortuneP1 = "is light and clear"
       
        if(RandomNumber == 0){
            fortuneP2 = "you will be more lucky than you were yesterday"
        }
        else if(RandomNumber ==1){
            fortuneP2 = "trying something new will result in good things"
        }
        else if(RandomNumber ==2){
            fortuneP2 = "a rare opportunity will open for you"
        }
        else if(RandomNumber == 3){
            fortuneP2 = "a problem you've been struggling with will be easier today"
        }
        else if(RandomNumber == 4){
            fortuneP2 = "your previous effort and hard work will pay off"
        }

    }
    else if(clouds > 20 && clouds <= 40){
        numType = "40"
        fortuneP1 = "is a little cloudy"
       
        if(RandomNumber == 0){
            fortuneP2 = "reconnect with your goals in mind for the day"
        }
        else if(RandomNumber ==1){
            fortuneP2 = "people will listen to you if you want to open up"
        }
        else if(RandomNumber ==2){
            fortuneP2 = "taking a new route today could lead to something unexpected"
        }
        else if(RandomNumber == 3){
            fortuneP2 = "don't be afraid to ask for help today"
        }
        else if(RandomNumber == 4){
            fortuneP2 = "a break on what you're working on will benefit you greatly"
        }

    }
    else if(clouds > 40 && clouds <= 60){
        numType = "60"
        fortuneP1 = "is very cloudy"
       
        if(RandomNumber == 0){
            fortuneP2 = "be mindful of your time spent today"
        }
        else if(RandomNumber ==1){
            fortuneP2 = "someone near you would appreciate your help"
        }
        else if(RandomNumber ==2){
            fortuneP2 = "some things you may want to do today will be better left undone"
        }
        else if(RandomNumber == 3){
            fortuneP2 = "however, your issues may resolve themselves if you stay calm"
        }
        else if(RandomNumber == 4){
            fortuneP2 = "prepare to adapt to some major changes that may come your way"
        }

    }
    else if(clouds > 60 && clouds <= 80){
        numType = "80"
        fortuneP1 = "is overcast"
       
        if(RandomNumber == 0){
            fortuneP2 = "you may want to reconsider the people you're friends with"
        }
        else if(RandomNumber ==1){
            fortuneP2 = "make sure to take care of your health before there are consequences"
        }
        else if(RandomNumber ==2){
            fortuneP2 = "pay attention to the words you choose to speak to others"
        }
        else if(RandomNumber == 3){
            fortuneP2 = "be careful of your schedule for today and how you organize your time"
        }
        else if(RandomNumber == 4){
            fortuneP2 = "pay attention to the words you choose to speak to others"
        }

    }
    else if(clouds > 80 && clouds <= 100){
        numType = "100"
        fortuneP1 = "is dark and stormy"
       
        if(RandomNumber == 0){
            fortuneP2 = "take caution in choosing your path today"
        }
        else if(RandomNumber ==1){
            fortuneP2 = "stay aware of the moods of the people around you"
        }
        else if(RandomNumber ==2){
            fortuneP2 = "prepare for conflict with someone close to you"
        }
        else if(RandomNumber == 3){
            fortuneP2 = "it would be wise to check if you've forgotten anything important"
        }
        else if(RandomNumber == 4){
            fortuneP2 = "many of your minor problems may snowball into a larger issue"
        }

    }

//numType = ${numType}

    document.getElementById("result").innerHTML = 
    `cloudiness level: ${clouds} %, your lucky number: ${RandomNumber + 1}`
    document.getElementById("fortune").innerHTML = 
    `Your cloud reading for your day is ${fortuneP1}, ${fortuneP2}.`
    // console.log(fortuneP1);
    // console.log(fortuneP2);
    // console.log(numType);


    bgimg[0].style.backgroundImage = `url(\"./clouds/cloud-${numType}-${RandomNumber}.jpeg\")`;


}

const choice = document.getElementById("choice");
choice.addEventListener('keypress', event =>{
    if(event.key === "Enter"){
        event.preventDefault();
        btn.click();
    }
})