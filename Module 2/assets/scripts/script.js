function validate_username() {
	var username_pat = RegExp("^[a-zA-Z][a-zA-Z ]*[a-zA-Z]$");
	var username = document.forms[0].username.value;
	var valid_username = username_pat.exec(username);
	if (!valid_username) {
		document.getElementById("username").style.border = "2px solid red";
		return false;
	} else {
		document.getElementById("username").style.border = "2px solid green";
		return true;
	}
}

function validate_password() {
	var password_pat = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*_])(?=.{8,})");
	var password = document.forms[0].password.value;
	var valid_password = password_pat.exec(password);
	if (!valid_password) {
		document.getElementById("password").style.border = "2px solid red";
		return false;
	} else {
		document.getElementById("password").style.border = "2px solid green";
		return true;
	}
}

function validate_phonenumber() {
	var phonenumber_pat = new RegExp("^[0-9][0-9]{9}$");
	var phonenumber = document.forms[0].phonenumber.value;
	var valid_phonenumber = phonenumber_pat.exec(phonenumber);
	if (!valid_phonenumber) {
		document.getElementById("phonenumber").style.border = "2px solid red";
		return false;
	} else {
		document.getElementById("phonenumber").style.border = "2px solid green";
		return true;
	}
}

function validate_all() {
	if (validate_username() && validate_password() && validate_phonenumber()) return true;
	return false;
}