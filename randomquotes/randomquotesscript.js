function generate(){
	
	var quotes = {
		"- Lewis B. Smedes": '"To forgive is to set a prisoner free and discover that the prisoner was you."',
		"- Richard Bach": '"If you love someone, set them free. If they come back they are yours if they dont they never were."',
		"- Douglas Horton": '"Smile, its free therapy."',
		"- Muhammad Ali": '"Service to others is the rent you pay for your room here on earth."',	
		"- unknown": '"The magic you are looking for is in the work that you are avoiding."',	
	}

	var authors = Object.keys(quotes);
	var author = authors[Math.floor(Math.random() * authors.length)];
	var quote = quotes[author];

	document.getElementById("quote").innerHTML = quote;
	document.getElementById("author").innerHTML = author;
}