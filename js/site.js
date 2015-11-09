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