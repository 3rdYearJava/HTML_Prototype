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
	
	lname.style.borderColor = "red";
	lname.style.borderWidth = "medium";
	lname.focus();

	return false;
}else if(email.value.length < 3){
	
	email.style.borderColor = "red";
	email.style.borderWidth = "medium";
	email.focus();

	return false;
}else if(username.value.length < 3){
	
	username.style.borderColor = "red";
	username.style.borderWidth = "medium";
	username.focus();

	return false;
}
else if( !username.value.match(letterNumber)){
	alert("Your username is invalid, your username can only contain alphanumeric characters")
	username.value = "";
	return false;
}
else if(password.value.length < 3){
	password.style.backgroundColor = "red";

	return false;
}
else if(password1.value.length < 3){
	password1.style.backgroundColor = "red";


	return false;
}else if(fname.value.length > 25){
	fname.style.backgroundColor = "red";
	alert("There is a 25 character limit for your first name");
	fname.value = "";
	return false;
}else if(lname.value.length > 25){
	lname.style.backgroundColor = "red";
	alert("There is a 25 character limit for your last name");
	lname.value = "";
	return false;
}else if(email.value.length > 60){
	email.style.backgroundColor = "red";
	alert("Your email is too long");
	email.value = "";
	return false;
}else if(username.value.length > 25){
	username.style.backgroundColor = "red";
	alert("There is a 25 character limit for your username");
	username.value = "";
	return false;
}
else if(password.value.length > 25){
	password.style.backgroundColor = "red";
	alert("There is a 25 character limit for your password");
	password.value = "";
	return false;
}

else if(password.value !== password1.value){
	password1.style.backgroundColor = "red";
	password.style.backgroundColor = "red";
	password.value=  "";
	password1.value = "";
	alert("Your Passwords didn't match");
	return false;
}
else{
	return true;
}
};
function colourChange(this1){
	this1.style.backgroundColor = "white";
};