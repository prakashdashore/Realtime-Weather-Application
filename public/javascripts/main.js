var images = [
    "https://images.unsplash.com/photo-1528353518104-dbd48bee7bc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
    "https://images.unsplash.com/photo-1528353518104-dbd48bee7bc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
    "https://images.unsplash.com/photo-1548232979-6c557ee14752?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
    "https://images.unsplash.com/photo-1542601098-8fc114e148e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1483664852095-d6cc6870702d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    "https://images.unsplash.com/photo-1476673160081-cf065607f449?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    "https://images.unsplash.com/photo-1536244636800-a3f74db0f3cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=80",
    "https://images.unsplash.com/photo-1627821549647-26689ff539bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    "https://images.unsplash.com/photo-1645470167995-531aeab0308a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
];

var temp = document.querySelector("#temp");
var city = document.querySelector("#city-name");
var weatherdic = document.querySelector("#weather-disc");
var icon = document.querySelector("#weather-icon");
var details = document.querySelector(" .details");
var rows = document.querySelector(".rows");
var humidity = document.querySelector("#hu");
var Pressure = document.querySelector("#pr");
var windSpeed = document.querySelector("#ws");

// console.log(val)

// console.log(recent)
// var searches = recent.splice(0,3);
// document.querySelector('.recent-searches').innerHTML = clutter;

var recent = [];
document.querySelector("#submit").addEventListener("click", function () {
  let rNum = Math.floor(Math.random() * 10);
  var randomImage = images[rNum];
//   console.log(randomImage);
  document.querySelector("#main").style.backgroundImage =`url(${ randomImage})`;
  var cityName = [];
  var val = document.querySelector("#location").value;
  if(val.trim().length > 2){
    recent.push(val);
    
  }
  else{
    alert("Something went wrong :")

  }
  // console.log(recent)
  var ek = recent.slice(0, 3);
  // console.log(ek)
  var revEk = ek.reverse();
  var clutter = "";
  revEk.forEach(function (e) {
    clutter += `
      <div style="cursor: pointer;" class="rows">
        ${e}
      </div>
      `;
  });
  document.querySelector(".recent-searches").innerHTML = clutter;

  // ek.forEach(function(e){
  //   console.log(e)

  // })
  if (val.trim().length > 1) {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=982ebea6958ea5111b18650dd7feabb6&units=metric`
      )
      .then(function (respons) {
        // console.log(respons.data.main.temp)

        // console.log(recent)
        details.style.display = "flex";
        temp.textContent = Math.ceil(respons.data.main.temp);
        city.innerHTML = respons.data.name;
        weatherdic.innerHTML = respons.data.weather[0].description;
        icon.src =
          "http://openweathermap.org/img/w/" +
          respons.data.weather[0].icon +
          ".png";
        humidity.innerHTML = `${respons.data.main.humidity} %`;
        Pressure.innerHTML = `${respons.data.main.pressure} MB`;
        windSpeed.innerHTML = `${respons.data.wind.speed} KM/H`;
      });
  } else {
    alert("Please Enter Valid City Name.");
  }
});
