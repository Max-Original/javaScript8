disappear.onclick = function() {
	document.getElementById('text').classList.remove('visibility-element');
	document.getElementById('text').classList.add('dissapear-element');
	//.hidden = true;
}

function makeVisible(){
	document.getElementById('text').classList.remove('dissapear-element');
	document.getElementById('text').classList.add('visibility-element');
	//.hidden = false
}

disappearButton.onclick = function(){
	disappearButton.hidden = true;
}

function myFunction() {
	  document.getElementById("myDropdown").classList.toggle("show");
	}