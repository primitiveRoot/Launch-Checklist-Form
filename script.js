// Write your JavaScript code here!

window.addEventListener("load", function(){//1
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){//2
      response.json().then(function(json){//3
	 window.console.log(json[0])
         const div = document.getElementById("missionTarget");
         let index = Math.floor(Math.random()*6);
	 div.innerHTML = `
              <h2>Mission Destination</h2>
              <ol>
                 <li>Name: ${json[index].name}</li>
                 <li>Diameter: ${json[index].diameter}</li>
                 <li>Star: ${json[index].star}</li>
                 <li>Distance from Earth: ${json[index].distance}</li>
                 <li>Number of Moons: ${json[index].moons}</li>
              </ol>
              <img src="${json[index].image}">
          `;
        });
    });
});

