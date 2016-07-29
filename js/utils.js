window.onload = function () {
	panelsInit ();
}

function panelsInit () {
	
	// assign onclick to button-hide class
	var showHideButtons = document.getElementsByClassName("button-hide");
	for  (var i = 0; i < showHideButtons.length; i++){
		showHideButtons[i].onclick = showHidePanels;
	}
	
	// Panel 1 setup
	var userAlphaInput = document.getElementById("input-alpha");
	userAlphaInput.onkeyup = alphaValueModify;
	userAlphaInput.value = "0.";
	
	// Panel 2 setup
	document.getElementById("button-inc").onclick = spanIncrementor();
	document.getElementById("button-dec").onclick = spanIncrementor();
	
	// Panel 3 setup
	document.getElementById("editable-text").value = "Lorem ipsum";
}

function showHidePanels () {
	var el = this.parentNode.getElementsByClassName("hideable")[0].style;
	if (el.display !== "none") {el.display = "none" }
	else {el.display = ""}
}

function alphaValueModify () {
	var elValue = Number(document.getElementById("input-alpha").value);
	var elTarget = document.getElementById("alphaImage").style;
	
	if ( elValue <= 1 && elValue >= 0 ) {
		elTarget.opacity = elValue;
	}
}

function spanIncrementor () {
	document.getElementById("spanCounter").innerHTML = 0;
	return function (e){
		var spanValue = Number(document.getElementById("spanCounter").innerHTML);
		if (e.target.id === "button-inc") {spanValue++;}
		if (e.target.id === "button-dec") {spanValue--;}
		document.getElementById("spanCounter").innerHTML = spanValue;
	}
}



