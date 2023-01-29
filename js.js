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

let astronomyRef= document.getElementById('astronomy_container');
let astronomyDateRef= document.getElementById('astronomy_date');
let astronomyRefTitle= document.getElementById('astronomy_title');
let astronomyRefExplaination= document.getElementById('astronomy_explaination');
let astronomyRefImg= document.getElementById('astronomy_image');
let astronomyRefImg1= document.getElementById('astronomy_image_hd');



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
        nameRef.innerHTML= `Country: ${data[0].name.common}`;
        flagRef.src= "https://flagcdn.com/w320/in.png";
        capitalRef.innerHTML= `Capital: ${data[0].capital}`;
        populationRef.innerHTML= `Population:${data[0].population}`;
        nativeLanguageRef.innerHTML= `Native Language:${data[0].languages.hin}`;
        regionRef.innerHTML= `Region: ${data[0].region}`;
        subRegionRef.innerHTML= `Sub-region:${data[0].subregion}`;
    })
    .catch((err)=>{console.log(err)})
}
btnRef1.addEventListener('click', countryData);

const dogImg = ()=> {
     fetch("https://dog.ceo/api/breeds/image/random")
     .then((res)=>res.json())
     .then((data)=>{
        // console.log(data);
dogImgRef.src = data.message;
     })
     .catch((err)=>{console.log(err)})
}
btnRef2.addEventListener('click',dogImg);

async function getHolidayData()
{
    try{
        let res = await fetch("https://date.nager.at/api/v2/publicholidays/2020/US");
        // console.log(res);
        data= await res.json();
        // console.log(data);
        return data;
    }
    catch(error){
        console.log(error);
    }
}

getHolidayData();

async function displayHolidayData()
{
    let holiday = await getHolidayData();
    console.log(holiday);

    let html ="";

    holiday.forEach((h,i)=> {
        console.log(h);
        console.log(i);

        let htmlElement = `<h3> Holiday Date : ${h.date} </h3>
        <h3> Holiday Name : ${h.localName} </h3>
        <h3> Holiday Type : ${h.type} </h3>
        <h3> Country Code : ${h.countryCode}</h3>`

        html+= htmlElement
    });

    let holidayRef = document.getElementById("holiday_container");
    holidayRef.innerHTML = html;
}
displayHolidayData();

async function Astronomy() {
    try{
        let res = await fetch(" https://go-apod.herokuapp.com/apod");
        console.log(res);
        data= await res.json();
        console.log(data);
        return data;
    }
    catch(error){
        console.log(error);
    }
}

let astronomy= Astronomy().then((data)=>{
    astronomyDateRef.innerHTML= data.date;
    astronomyRefTitle.innerHTML = data.title;
    astronomyRefExplaination.innerHTML = data.explanation;
    //astronomyRefImg.src = data.url;
    // astronomyRefImg1.src = data.hdurl;

});

async function astronomyImageDisplay(){
    let astronomyData = await Astronomy();
    console.log(astronomyData);
}

const displayImgs=async()=>
{
    let data = await Astronomy();
    let html = `<div class="user">
    <img src="${data.url}" >
</div>`;
    console.log("hi");
    let container = document.getElementById('imgContainer');
    container.innerHTML = html;
}

let btnRef3 = document.getElementById("hdImageButton");

btnRef3.addEventListener('click',displayImgs);



// let astronomyhdimg= Astronomy().then((data)=>{
//     astronomyRefImg1.src = data.hdurl;
// });

// astronomyRef.addEventListener('onLoad', astronomy);

// document.getElementById('hdImageButton').addEventListener('click',astronomyhdimg);


// async function displayAstronomy(){
//     let astronomy = await Astronomy();

//     let html = "";
    
//     astronomy.forEach((item) => {
//         let htmlElement = `
//         <p>Date :${item.date}</p>
//         <p>Title :${item.title}</p>
//         <p>Explaination:${item.explaination}</p>
//         <img src= ${item.url}
//         />
//         `
//         html+= htmlElement;
//     });

//     let astronomyRef = document.getElementById('astronomy_container');
//     astronomyRef.innerHTML= html;
// }

// displayAstronomy();

async function getTVshows()
{
    let url = 'http://api.tvmaze.com/search/shows?q=golden%20girls';
    try
    {
        let res =await fetch(url);
        data = await res.json();
        return data;
    }
    catch(error)
    {
        console.log(error);
    }
}
getTVshows();
async function displayTVshows()
{
    let shows = await getTVshows();

    let html ="";

    shows.forEach((showElement, index)=>{
        let htmlSegment = ` <div class="col-lg-4 col-md-4 col-10 col-xxl-4 mx-auto">
        <div class="card mb-3" style="max-width: 540px;">
          <h4 class="text-capitalize text-center">${showElement.show.name}</h4>
          <img src="${showElement.show.image.medium}" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text">Premier Date : ${showElement.show.premiered}</p>
            <p class="card-text">Show Type : ${showElement.show.type}</p>
            <p class="card-text">Show Status : ${showElement.show.status}</p>
          </div>
        </div>
      </div>`;
      html += htmlSegment;
        })

        let conatiner2= document.getElementById("card");
        conatiner2.innerHTML = html;
}
displayTVshows()