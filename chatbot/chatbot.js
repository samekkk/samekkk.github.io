document.addEventListener("DOMContentLoaded", () => {
	const inputField = document.getElementById("input-field");
	inputField.addEventListener("keydown", (event) =>{
		if (event.key === "Enter"){
			let input = inputField.value;
			inputField.value = "";
			output(input);
		}
	})
})

function compare(promptsArray, repliesArray, string){
	let reply;
	let replyfound = false;
	for (let x = 0; x < promptsArray.length; x++){
		for (let y = 0; y < promptsArray[x].length; y++){
			if (promptsArray[x][y] === string){
				let replies = repliesArray[x];
				reply = replies[Math.floor(Math.random() * replies.length)];
				replyfound = true;
				break;	
			}
		}

		if (replyfound){
			break; // Stop outer loop when reply is found instead of interating through the entire array
		}
	}

	return reply;
}

function output(input){
	let product;
	let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
    text = text
    .replace(/ a /g, " ")   // 'tell me a story' -> 'tell me story'
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "")
    .replace(/r u/g, "are you");

    if (compare(prompts, replies, text)){
    	product = compare(prompts, replies, text);
    } else if (text.match(/thank/gi)) {
    product = "You're welcome!";
	} else {
		product = alternative[Math.floor(Math.random() * alternative.length)];
	} 
  
	addChat(input, product);
}

function addChat(input, product){
	const messagesContainer = document.getElementById("messages");
	let userDiv = document.createElement("div");
	userDiv.className = "";
	userDiv.id = "user";
  	userDiv.innerHTML = `<img src="img/user.png" class="avatar"><span>${input}</span>`;
  	messagesContainer.appendChild(userDiv);

  	let botDiv = document.createElement("div");
  	let botImg = document.createElement("img");
  	let botText = document.createElement("span");
  	botDiv.id = "bot";
  	botDiv.className = "";
  	botImg.src = "img/bot-mini.png";
  	botImg.className = "avatar";
  	botText.innerText = "Typing...";
  	botDiv.appendChild(botText);
  	botDiv.appendChild(botImg);
  	messagesContainer.appendChild(botDiv);


  	setTimeout(() => {
    botText.innerText = `${product}`;
    }, 2000)
}
