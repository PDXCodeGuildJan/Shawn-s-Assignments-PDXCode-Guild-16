// Javapic Inc.
// Author Shawn Waldow
// Join (Let's scrub a basic form.)

// DONT FORGET TO DISABLE BROWSER SCRUBBING
var grabFormKillDefaultScrub = document.getElementById('signup');
var noValidate = document.createAttribute("novalidate");
grabFormKillDefaultScrub.setAttributeNode(noValidate);


//Select a single element for name
var theName = document.getElementsByName("name")[0];
theName.addEventListener('blur', checkName, false);

//add a style for the class error
document.styleSheets[0].insertRule(".error {font-size: .6em; color: red; padding: 0; border: 0; margin: 0; display: inline;}", 0);


function checkName(){

	//See if we are getting everthing we expect. Later scrub.
	//Now write scrubbing
	//[A-Z][a-z]{1,15} [A-Z][a-z]{1,15} should be title case two part
	//names with fewer than 32 characters.

	if (this.value.length < 2){
		console.log("not long enough")
	}
	else{
		console.log("else")
	}
}

//Select a single element for username
var theUserName = document.getElementsByName("username")[0];
theUserName.addEventListener('blur', checkUserName, false);

function checkUserName(){

	//Remove the error message if there is one
	if (this.nextSibling.className === "error") {
		console.log("preexisting error");
		this.remove();
	}

	// Make a regex to detect username less than 15 more than 4
	patt = /[A-Za-z\d]{4,15}/;
	//Handle a username that's too long, too short, or has weird characters.
	if (!(patt.test(this.value))){
		
		//Make a div for the error message
		var errorSpan = document.createElement("span");
		errorSpan.classList.add("error");
		errorSpan.textContent = "Error";
		//Insert it to the dom
		this.parentNode.insertBefore(errorSpan, this);



		console.log("User name invalid. Must be a combination of letters or numbers 4 to 15 long.");
		//Reset value from invalid user input to empty
		this.value ="";
	}
	else{
		console.log("Username good.");
	}
}

//Select a single element for name
var theEmail = document.getElementsByName("email")[0];
theEmail.addEventListener('blur', checkEmail, false);

function checkEmail(){

	//See if we are getting everthing we expect. scrubbing not checking past @
	//Note the carrot before the expression that requires the eval starts at the begining of the string.
	//The $ sign says the string has to end with the specified expression.
	
	var patt = new RegExp("^[^\s]+@[^\s]+\.[^\s]+$")
	if (!(patt.test(this.value))){
		console.log("Email address not valid.")
	}
	else{
		console.log("else")
	}
}



//Get a handle on the submit button
var submitButton = document.getElementById("submit");
submitButton.addEventListener("click", submitForm, false);

function submitForm(){

	//Mysterious bit necesarry for custom form submission not covered very well by 
	//Google results or the text book. Thanks Patrick!
	event.preventDefault();
	//Build up a URL to pass user name on to browser.
	var nextPagePath = "file:///home/shawnwaldow/Documents/CodeSchool/Week1/javapic/javapic/gallery.html?" + theName.value;
	window.location.assign(nextPagePath);
}

//console.log(theName.value);
console.log("Hello");