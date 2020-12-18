// Write your JavaScript code here!
window.addEventListener("load", function () {
   fetch("https://handlers.education.launchcode.org/static/weather.json").then(function (response) {
      response.json().then(function (json) {
         let target = document.getElementById("missionTarget");

         target.innerHTML =
            `<h2>Mission Destination</h2>
<ol>
   <li>Name: ${json[1].name}</li>
   <li>Diameter: ${json[1].diameter}</li>
   <li>Star: ${json[1].star}</li>
   <li>Distance from Earth: ${json[1].distance}</li>
   <li>Number of Moons: ${json[1].moons}</li>
</ol>
<img src="${json[1].image}"></img>`

      });
   });

   let form = document.querySelector("form");
   let list = document.getElementById("faultyItems");

   list.style.visibility = "hidden"
   list.style.backgroundcolor = color

   form.addEventListener("submit", function (event) {
      event.preventDefault()

      let pilotInput = document.querySelector("input[name=pilotName]").value;
      let copilotName = document.querySelector("input[name=copilotName]").value;
      let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
      let cargoMass = document.querySelector("input[name=cargoMass]").value;
      let ready = true;

      if (pilotInput === "" || copilotName === "" || fuelLevel === "" || cargoMass === "") {

         alert("All fields are required!");

      } else if (isNaN(pilotInput.value) === false || isNaN(copilotName.value) === false || isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
         alert("Make sure to enter valid information for each field!");

      } else {
         list.style.visibility = "visible";
         list.style.color = "red";

         let launchStatus = document.getElementById("launchStatus");
         launchStatus.innerHTML = "Shuttle not ready for launch";
      }

      if (fuelLevel < 10000) {
         ready = false;
         fuelStatus.innerHTML = "Not enough fuel for the journey";
      } else {
         fuelStatus.innerHTML = "Fuel level high enough for launch";
      }

      if (cargoMass > 10000) {
         ready = false;
         cargoStatus.innerHTML = "There is too much mass for the shuttle to take off";
      } else {
         cargoStatus.innerHTML = "Cargo mass low enough for launch";
      }

      if (ready) {
         launchStatus.style.color = "green";
         launchStatus.innerHTML = "Shuttle is ready for launch";
      } else {
         list.style.visibility = "visible";
         launchStatus.style.color = "red";
         launchStatus.innerHTML = "Shuttle not ready for launch";
      }

   });

});






