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