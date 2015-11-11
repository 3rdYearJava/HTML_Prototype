function validateComment(){
	if (userpost.value.length < 1) {
	userpost.style.borderWidth = "medium";
	userpost.style.borderColor = "red";
	warning.style.display = "block";
	userpost.focus();
	return false;
}else{
	return true;
}

};
var hide = function(){
      mistake.style.display = "none";
    }
function validateRegistration(){
	var letterNumber = /^[0-9a-zA-Z]+$/;
	var mistakeText;
if (fname.value.length < 3) {
	var mistakeText = document.getElementById('mistake').innerHTML = "You left your first name blank";
	setTimeout(hide, 5000);
	fname.style.borderColor = "red";
	fname.style.borderWidth = "medium";
	fname.focus();
	return false;
}else if(lname.value.length < 3){
	var mistakeText = document.getElementById('mistake').innerHTML = "You left your last name blank";
	setTimeout(hide, 5000);
	lname.style.borderColor = "red";
	lname.style.borderWidth = "medium";
	lname.focus();

	return false;
}else if(email.value.length < 3){
	var mistakeText = document.getElementById('mistake').innerHTML = "You left your email blank";
	setTimeout(hide, 5000);
	email.style.borderColor = "red";
	email.style.borderWidth = "medium";
	email.focus();

	return false;
}else if(username.value.length < 3){
	var mistakeText = document.getElementById('mistake').innerHTML = "You left your username blank";
	setTimeout(hide, 5000);
	username.style.borderColor = "red";
	username.style.borderWidth = "medium";
	username.focus();

	return false;
}
else if( !username.value.match(letterNumber)){
	var mistakeText = document.getElementById('mistake').innerHTML = "Your username is invalid, your username can only contain alphanumeric characters";
	setTimeout(hide, 10000);
	username.style.borderColor = "red";
	username.style.borderWidth = "medium";
	username.value = "";
	username.focus();
	return false;
}
else if(password.value.length < 3){
	var mistakeText = document.getElementById('mistake').innerHTML = "You left your password blank";
	setTimeout(hide, 5000);
	password.style.borderColor = "red";
	password.style.borderWidth = "medium";
	password.focus();

	return false;
}
else if(password1.value.length < 3){
	var mistakeText = document.getElementById('mistake').innerHTML = "You left the second password field blank";
	setTimeout(hide, 5000);
	password1.style.borderColor = "red";
	password1.style.borderWidth = "medium";
	password1.focus();
	return false;
}else if(fname.value.length > 25){
	fname.style.borderColor = "red";
	fname.style.borderWidth = "medium";
	fname.focus();
	var mistakeText = document.getElementById('mistake').innerHTML = "Your first name is greater than 25 characters";
	setTimeout(hide, 10000);
	fname.value = "";
	return false;
}else if(lname.value.length > 25){
	lname.style.borderColor = "red";
	lname.style.borderWidth = "medium";
	lname.focus();
	var mistakeText = document.getElementById('mistake').innerHTML = "Your last name is greater than 25 characters";
	setTimeout(hide, 10000);
	lname.value = "";
	return false;
}else if(email.value.length > 60){
	email.style.borderColor = "red";
	email.style.borderWidth = "medium";
	email.focus();
	var mistakeText = document.getElementById('mistake').innerHTML = "Your email is too long";
	setTimeout(hide, 10000);
	email.value = "";
	return false;
}else if(username.value.length > 25){
	username.style.borderColor = "red";
	username.style.borderWidth = "medium";
	username.focus();
	var mistakeText = document.getElementById('mistake').innerHTML = "Your username is greater than 25 characters";
	setTimeout(hide, 10000);
	username.value = "";
	return false;
}
else if(password.value.length > 25){
	password.style.borderColor = "red";
	password.style.borderWidth = "medium";
	password.focus();
	var mistakeText = document.getElementById('mistake').innerHTML = "Your password is greater than 25 characters";
	setTimeout(hide, 10000);
	password.value = "";
	return false;
}

else if(password.value !== password1.value){
	password.style.borderColor = "red";
	password.style.borderWidth = "medium";
	password1.style.borderColor = "red";
	password1.style.borderWidth = "medium";
	password.value=  "";
	password1.value = "";
	var mistakeText = document.getElementById('mistake').innerHTML = "Your passwords don't match";
	setTimeout(hide, 10000);
	password.focus();
	return false;
}
else{
	return true;
}
};
function colourChange(this1){
	this1.style.borderColor = "white";
};