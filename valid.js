const form = document.getElementById("form");
const uname = document.getElementById("stackie1");
const email = document.getElementById("email");
const pass = document.getElementById("password");
const pass2 = document.getElementById("password2");


//add event listener for Submit button
form.addEventListener("submit", (e) => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	const unameValue = uname.value.trim();
	const emailValue = email.value.trim();
	const passValue = pass.value.trim();
	const pass2Value = pass2.value.trim();
	
	if(unameValue === '') {
		setErrorFor(uname, 'Stackup-username cannot be blank');
	} else {
		setSuccessFor(uname);
	}
//check email is valid
  
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!avmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
  
  //check input length for password
	
   
	if(passValue === '') {
		setErrorFor(pass, 'password cannot be blank');
	}else if( passValue.length<5 ) {
		setErrorFor(pass, 'Password must be atleast 5 character');
	}
	 else {
		setSuccessFor(pass);
	}
  
	//check the two passwords match
  
	if(pass2Value === '') {
		setErrorFor(pass2, 'password cannot be blank');
	} else if(passValue !== pass2Value) {
		setErrorFor(pass2, 'Passwords does not match');
	} else{
		setSuccessFor(pass2);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small=formControl.querySelector("small");
	formControl.className = 'form-control error';
	small.innerText = message;
}

//check that all fields have input

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function avmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}