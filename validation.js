function submitForm(){
	var form = document.getElementById('submit-form');
	
	try{
		var data = {
			name: form.name.value.trim(),
			email: form.email.value,
			password: form.password.value,
			confirmpassword: form.confirmpassword.value,
			gender: form.gender.value,
			dob: form.dob.value,
			terms: form.terms.checked
		};

		if(!validate(data)) return false;
	}catch(e){
		console.log(e.message);
	}
	return false;
}

function validate(data){
	if(!validateName(data.name)) {
		displayMessage("Name is invalid");
		return false;
	}
	if(!validateEmail(data.email)) {
		displayMessage("Email is invalid");
		return false;
	}
	if(!validatePassword(data.password)) {
		displayMessage("Please enter a password");
		return false;
	}
	if(!validateConfirmPassword(data.password , data.confirmpassword)) {
		displayMessage("Your password does not match");
		return false;
	}
	if(!validateGender(data.gender)) {
		displayMessage("Please select a gender");
		return false;
	}

	if(!validateDOB(data.dob)) {
		displayMessage("Please fill in your birthdate");
		return false;
	}

	if(!validateTerms(data.terms)){
		displayMessage("Please agree with our terms and conditions");
		return false;
	}

	return true;
}

function validateName(name){
	if(name.length < 5) return false;

	for (var i = 0; i < name.length; i++) {
		if(!isValidCharForName(name[i])) return false;
	}

	return true;
}

function isValidCharForName(char){
	if(char == ' ') return true;	

	if(isNumeric(char)) return true;

	var code = char.charCodeAt(0);
	if(code >= 'A'.charCodeAt(0) &&
		code <= 'Z'.charCodeAt(0)) return true;

	if(code >= 'a'.charCodeAt(0) &&
		code <= 'z'.charCodeAt(0)) return true;

	return false;
}

function validateEmail(email){
	//harus ada @
	if(email.indexOf("@") == -1) return false;

	//@ cuma boleh ada 1
	if(email.indexOf("@") != email.lastIndexOf("@")) return false;

	//@ gak boleh di index paling depan
	if(email.indexOf("@") == 0) return false;

	//harus ada . setelah @
	if(email.indexOf("@") > email.lastIndexOf(".")) return false;
	
	//@ dan . tidak boleh sebelahan
	if(email[email.indexOf("@")-1] == '.') return false;
	if(email[email.indexOf("@")+1] == '.') return false;

	//. tidak boleh di akhir
	if(email.lastIndexOf('.') == email.length - 1) return false;

	//. tidak boleh di awal
	if(email.indexOf('.') == 0) return false;

	//karakter hanya boleh A-Z a-z . _ 0-9 @
	for(var i = 0; i < email.length; i++){
		if(!isValidCharForEmail(email[i])) return false;
	}

	return true;
}

function isValidCharForEmail(char){
	if(char == '.' || 
		char == '_' || 
		char == '@') return true;	

	if(isNumeric(char)) return true;

	var code = char.charCodeAt(0);
	if(code >= 'A'.charCodeAt(0) &&
		code <= 'Z'.charCodeAt(0)) return true;

	if(code >= 'a'.charCodeAt(0) &&
		code <= 'z'.charCodeAt(0)) return true;

	return false;
}

function isNumeric(n){
	return !isNaN(parseInt(n));
}

function validatePassword(password){
	if(password.length < 5) return false;
	return true;
}

function validateConfirmPassword(password,confirmpassword){
	if(password != confirmpassword) return false;
	return true;
}

function validateGender(gender){
	if(gender == 0) return false;
	return true;
}

function validateDOB(dob){
	if(dob == "" || dob.length == 0) return false;
	return true;
}

function validateTerms(terms){
	if(!terms) return false;
	return true;
}

function displayMessage(message){
	var element = document.getElementById('message');
	element.innerHTML = message;
	setTimeout(function(){
		element.innerHTML = "";
	}, 3000);
}