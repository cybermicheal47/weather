document.getElementById("searchbtn").addEventListener("click", function() {
    // Retrieve the input value from the search bar
    let searchTerm = document.getElementById("searchinput").value;

    getweather(searchTerm);
});

async function getweather(searchTerm) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=d36e1ae635bb4b6cbe0203917231206&q=${searchTerm}`, { mode: 'cors' });
    const weatherdata = await response.json();

    // Access the required weather information from the response object
    const location = weatherdata.location.name;
    const temperature = weatherdata.current.temp_c;
    const condition = weatherdata.current.condition.text;
    const windMph = weatherdata.current.wind_mph;
    const humidity = weatherdata.current.humidity;

    // Create a string with the weather information
    const weatherInfo = ` <p id="location">Location: ${location}</p>
    <p id="temperature"> Temperature: ${temperature}°C<br> </p>
    <p id="wind"> Wind: ${windMph} Mph <br> </p>
    <p id="humidity">Humidity: ${humidity}%<br> </p>
    <p id="condition">Condition: ${condition} </p>`;

    // Display the weather information in the target element
    document.getElementById("content").innerHTML = weatherInfo;
}
