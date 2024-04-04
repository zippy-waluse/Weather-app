const api = '388e0feef41bd222a462713b50a45a7e';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather'


const locationI = document.getElementById('location');
const  searchB = document.getElementById('but1');
const locationE = document.getElementById('PH');
const temperature = document.getElementById('temp');
const details = document.getElementById('details');


// Code snippets -> small blocks of reusable code 

// The addEvent.... is an action that is initiated using the <input> element of type="search" .

but1.addEventListener('click', () => {
    const location = locationI.value;
    if(location){
        fetchweather(location);
    }
}
)

function fetchweather(location){
    // Query parameters are a defined set
    //  of parameters (key-value pair) attached to the end of a URL used to provide additional information to a web server when making requests
    const url = `${apiUrl}?q=${location}&appid=${apikey}`
}