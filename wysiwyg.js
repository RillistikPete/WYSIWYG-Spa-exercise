

var arrayOfPeople = [

{
  title: "Samurai",
  name: "Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: 1747,
    death: 1797
  }
},

{
  title: "Burger",
  name: "Mr. Cheese",
  bio: "made cheeseburgers his whole life",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: 1947,
    death: 1997
  }
}
];

var objectDiv = document.getElementById('container');

//call this function at the end bc you want to populate the cards at the end
function populateDom(){
	for (var i = 0; i < arrayOfPeople.length; i++){
		objectDiv.innerHTML += `<div class="person" id="light-blue-div">${arrayOfPeople[i].title}
								<header id="yellow">${arrayOfPeople[i].name}</p>
								<p id="bio">${arrayOfPeople[i].bio}</p>
								<img id="yellow" src="${arrayOfPeople[i].image}">
								<footer id="light-blue">${arrayOfPeople[i].lifespan.birth}</p>
								<footer id="yellow">${arrayOfPeople[i].lifespan.death}</p>
								</div>`
	}
	//call event listener to person element function after your populate (to click one of person elements and give border)
	activateEvents();
}

function activateEvents(){
	var personElements = document.getElementsByClassName('person')
	//youre looping through the whole card div, so you can add the event listener to EACH tag in the element
	for (var i=0; i < personElements.length; i++){
		//console.log("personElements[i]", personElements[i]);
		personElements[i].addEventListener("click", function(event){
		//console.log("personElements", personElements);
			event.currentTarget.classList.toggle("border");
		//add focus for text input when you click any person element
			var inputBox = document.getElementById('input');
			inputBox.focus()
		})
	}
}

populateDom();

//changed the id's of the card divs so the 5th and 6th steps don't work.
var bioArea = document.getElementById('bio');
var inputBox = document.getElementById('input');
inputBox.addEventListener("keyup", function(event){
	console.log("event", event);
	bioArea.innerHTML = event.target.value;
});

inputBox.addEventListener("keyup", function(event){
	if (event.keyCode === 13){
		clearInputField();
	}
});

function clearInputField(){
	var inputBox = document.getElementById("input");
	inputBox.value = "";
}








