const toDoItems = document.getElementsByClassName("to-do-items")[0];
const input = document.getElementById("input");
const trashIcon = document.getElementById("trash");

//add eventlistener for enter button:
input.addEventListener("keydown", function(event){
	if (event.key === "Enter"){
		addItem();
	}
})

function addItem(){
	//creating the item in divParent and the two icons in divChild
	var divParent = document.createElement("div");
	var divChild = document.createElement("div");
	var checkIcon = document.createElement("i");
	var trashIcon = document.createElement("i");

	//giving the divParent a class of 'item' and placing it within div tags in the HTML
	divParent.className = "item";
	divParent.innerHTML = '<div>'+input.value+'</div>';

	//creating the check icon and giving some css color properties
	checkIcon.className = "fas fa-circle-check";
	checkIcon.style.color = "lightgray";
	checkIcon.addEventListener("click", function(){
		checkIcon.style.color = "limegreen";
	})

	//adding it to the divChild
	divChild.appendChild(checkIcon);

	//creating the trash icon and giving css properties and giving click function to remove
	trashIcon.className = "fa-solid fa-trash";
	trashIcon.style.color = "darkgray";
	trashIcon.addEventListener("click", function(){
		divParent.remove();
	})

	//adding it to the divChild
	divChild.appendChild(trashIcon);

	//now adding the whole divChild to the divParent
	divParent.appendChild(divChild);

	//now adding the divParent to the to-do-items div
	toDoItems.appendChild(divParent);

	input.value = '';
}











