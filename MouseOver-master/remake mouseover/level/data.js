
/*function mostrarDatos(){
	var nivelesSuperados = localStorage.getItem("lv", nivel);
}*/

var nivelesSuperados = localStorage.getItem("lv");
function iniciar(){
	if (!localStorage.getItem("lv")) {
		var nivel = 0;
		localStorage.setItem("lv", nivel);
		nivelesSuperados = 0;
	} else {
		console.log(localStorage.getItem("lv"));
		nivelesSuperados = localStorage.getItem("lv");
	}
}

function nuevo(){
	var nivel = 2;
	localStorage.setItem("lv", nivel);
}
setInterval(controlar,100);
function controlar(){
	nivelesSuperados = localStorage.getItem("lv");
}

