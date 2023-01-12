var qbox = document.getElementsByClassName("qbox");
var details = document.getElementById("details");
var editButton = document.getElementById("editBtn");
var sendButton = document.getElementById("sendBtn");
var editButton = document.getElementById("okBtn");
var text;


function validation(){

	var fName = document.getElementById("fName").value;
	var lName = document.getElementById("lName").value;
	var addr = document.getElementById("addr").value;
	var contact = document.getElementById("contact").value;
	var email = document.getElementById("email").value;
	var subject = document.getElementById("subject").value;
	var message = document.getElementById("message").value;
	var err = document.getElementsByClassName("err");

	var fNameValid;

	if (fName == '') {
		text = "Please enter Your first name";
		errdisplay(0, err, text);
		fNameValid = false;
	} else {
		errOut(0, err);
		fNameValid = true;
	}



	var lNameValid;

	if (lName == '' ) {
		text = "Please enter last Name";
		errdisplay(1, err, text);
		lNameValid = false;
	} else {
		errOut(1, err);
		lNameValid = true;
	}



	var addressValid;

	if (addr == '') {
		text = "Please Enter your address.";
		errdisplay(2, err, text);
		addressValid = false;
	} else {
		errOut(2, err);
		addressValid = true;
	}



	var contactValid;

	if (contact == '') {
		text = "Contact required.";
		errdisplay(3, err, text);
		contactValid = false;
	} else {
		errOut(3, err);
		contactValid = true;
	}

	var emailValid;

	if (email == '') {
		text = "Enter your Email";
		errdisplay(4, err, text);
		emailValid = false;
	} else {
		errOut(4, err);
		emailValid = true;
	}
	var SubjectValid;

	if (subject == '') {
		text = "Select subject";
		errdisplay(5, err, text);
		SubjectValid = false;
	} else {
		errOut(5, err);
		SubjectValid = true;
	}
	var messageValid;

	if (message == '') {
		text = "Enter a message";
		errdisplay(6, err, text);
		messageValid = false;
	} else {
		errOut(6, err);
		messageValid = true;
	}




	if (fNameValid == true && lNameValid == true && addressValid == true && contactValid == true && emailValid == true && SubjectValid == true && messageValid == true) {

		form.classList.add("form-hide");
		qbox[0].classList.add("popup");


		details.innerHTML = "First name : " + fName + "<br><br>Last name : " + lName + "<br><br>Address : "  + addr + "<br><br>contact : " + contact + "<br><br>Email : " + email  + "<br><br>Subject : " + subject + "<br><br>Message : " + message;

		return false;

	}
	return false;

}

function errdisplay(i, err, text) {
	err[i].style.paddingBottom = "2px";
	err[i].innerHTML = text;
	document.getElementsByClassName("input-box")[i].style.marginBottom = "5px";
	alert(text);
	

}

function errOut(i, err) {
	err[i].style.paddingBottom = "0px";
	err[i].innerHTML = '';
	document.getElementsByClassName("input-box")[i].style.marginBottom = "15px";
}

function editIt() {
	form.classList.remove("form-hide");
	qbox[0].classList.remove( "popup");
}

function sendIt() {
	qbox[0].classList.remove( "popup");
	qbox[1].classList.add( "popup");
}

function okButton() {
	qbox[1].classList.remove( "popup");
	form.classList.remove("form-hide");
	document.getElementById("name").value = "";
	document.getElementById("email").value = "";
	document.getElementById("subject").value = "default";
	document.getElementById("message").value = "";

}
