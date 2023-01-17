const containerRef = document.getElementById('container');
const btnRef = document.getElementById('btn');
const btnRef1 = document.getElementById('btn1');
const btnRef2 = document.getElementById('btn2');

let nameRef= document.getElementById('name');
let flagRef= document.getElementById('flag');
let capitalRef= document.getElementById('capital');
let populationRef= document.getElementById('population');
let nativeLanguageRef= document.getElementById('native-language');
let regionRef= document.getElementById('region');
let subRegionRef= document.getElementById('sub-region');
let dogImgRef= document.getElementById('dogImage');



// const request = new XMLHttpRequest();

// request.open('GET',"https://icanhazdadjoke.com");

// request.send();

// // btn = document.getElementsByTagName('button')[0];

// request.addEventListener('load', function(){
//     console.log(this.responseText);

//     const[data] = JSON.parse(this.responseText);
//     console.log(data);
// })

const generateJokes = ()=> {

    const SetHeader = {
        headers : {
            Accept: "application/json"
        }
    }

    fetch("https://icanhazdadjoke.com",SetHeader)
    .then((res)=>res.json())
    .then((data)=> {
        containerRef.innerHTML = data.joke;
    })
    .catch((err)=>{console.log(err)})
}

btnRef.addEventListener('click', generateJokes);


const countryData = ()=> {
    fetch("https://restcountries.com/v3.1/name/india")
    .then((res)=>res.json())
    // .then((data)=>console.log(data))
    .then((data)=>{
        console.log(data);
        nameRef.innerHTML= data[0].name.common;
        flagRef.src= "https://flagcdn.com/w320/in.png";
        capitalRef.innerHTML= data[0].capital;
        populationRef.innerHTML= data[0].population;
        nativeLanguageRef.innerHTML= data[0].languages.hin;
        regionRef.innerHTML= data[0].region;
        subRegionRef.innerHTML= data[0].subregion;
    })
    .catch((err)=>{console.log(err)})
}
btnRef1.addEventListener('click', countryData);

const dogImg = ()=> {
     fetch("https://dog.ceo/api/breeds/image/random")
     .then((res)=>res.json())
     .then((data)=>{
        console.log(data);
dogImgRef.src = data.message;
     })
     .catch((err)=>{console.log(err)})
}
btnRef2.addEventListener('click',dogImg);


