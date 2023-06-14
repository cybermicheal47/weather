
 function weather(){
document.getElementById("searchbtn").addEventListener("click", function() {
    // Retrieve the input value from the search bar
    let searchTerm = document.getElementById("searchinput").value;



getweather (searchTerm)



});  

async function getweather(searchTerm) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=d36e1ae635bb4b6cbe0203917231206&q=${searchTerm}`,  {mode: 'cors'});
    const weatherdata = await response.json();
   

     // Access the required weather information from the response object
     const location = weatherdata.location.name;
     const temperature = weatherdata.current.temp_c;
     const condition = weatherdata.current.condition.text;
     const windMph = weatherdata.current.wind_mph;
    const humidity = weatherdata.current.humidity;


       // Create a string with the weather information
    const weatherInfo = `Location: ${location}<br>
    Temperature: ${temperature}°C<br>
    Wind : ${windMph} Mph <br>
    Humidity : ${humidity} %<br>

    Condition: ${condition}`;


     // Display the weather information in the target element
    document.getElementById("content").innerHTML = weatherInfo;
}

 }
 weather();

