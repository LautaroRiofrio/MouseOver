var level1 = document.getElementById("level1");
var level2 = document.getElementById("level2");
var level3 = document.getElementById("level3");
var level4 = document.getElementById("level4");
var level5 = document.getElementById("level5");
var level6 = document.getElementById("level6");
var level7 = document.getElementById("level7");
var level8 = document.getElementById("level8");
var level9 = document.getElementById("level9");
var level10 = document.getElementById("level10");
setInterval(inicializa,100);
function inicializa(){
	 if (nivelesSuperados == 0) {
		level1.style.background = "linear-gradient(to bottom,#2980b9,#3498db,#2980b9";
	} else if(nivelesSuperados == 1){
		level1.style.background = "linear-gradient(to bottom,#2980b9,#3498db,#2980b9";
		level2.style.background = "linear-gradient(to bottom,#2980b9,#3498db,#2980b9";
		document.getElementById("h2").style.display= "block";
	} else if (nivelesSuperados == 2) {
		level1.style.background = "linear-gradient(to bottom,#2980b9,#3498db,#2980b9";
		level2.style.background = "linear-gradient(to bottom,#2980b9,#3498db,#2980b9";
		level3.style.background = "linear-gradient(to bottom,#2980b9,#3498db,#2980b9";
		document.getElementById("h2").style.display= "block";
		document.getElementById("h3").style.display= "block";
	}else if (nivelesSuperados == 3) {
		level1.style.background = "linear-gradient(to bottom,#2980b9,#3498db,#2980b9";
		level2.style.background = "linear-gradient(to bottom,#2980b9,#3498db,#2980b9";
		level3.style.background = "linear-gradient(to bottom,#2980b9,#3498db,#2980b9";
		level4.style.background = "linear-gradient(to bottom,#2980b9,#3498db,#2980b9";
		document.getElementById("h2").style.display= "block";
		document.getElementById("h3").style.display= "block";
		document.getElementById("h4").style.display= "block";
	}else if (nivelesSuperados == 4) {
		level1.style.background = "linear-gradient(to bottom,#2980b9,#3498db,#2980b9";
		level2.style.background = "linear-gradient(to bottom,#2980b9,#3498db,#2980b9";
		level3.style.background = "linear-gradient(to bottom,#2980b9,#3498db,#2980b9";
		level4.style.background = "linear-gradient(to bottom,#2980b9,#3498db,#2980b9";
		level5.style.background = "linear-gradient(to bottom,#2980b9,#3498db,#2980b9";
		document.getElementById("h2").style.display= "block";
		document.getElementById("h3").style.display= "block";
		document.getElementById("h4").style.display= "block";
		document.getElementById("h5").style.display= "block";
	}else if (nivelesSuperados == 5) {
		level1.style.background = "linear-gradient(to bottom,#2980b9,#3498db,#2980b9";
		level2.style.background = "linear-gradient(to bottom,#2980b9,#3498db,#2980b9";
		level3.style.background = "linear-gradient(to bottom,#2980b9,#3498db,#2980b9";
		level4.style.background = "linear-gradient(to bottom,#2980b9,#3498db,#2980b9";
		level5.style.background = "linear-gradient(to bottom,#2980b9,#3498db,#2980b9";
		level6.style.background = "linear-gradient(to bottom,#2980b9,#3498db,#2980b9";
		document.getElementById("h2").style.display= "block";
		document.getElementById("h3").style.display= "block";
		document.getElementById("h4").style.display= "block";
		document.getElementById("h5").style.display= "block";
		document.getElementById("h6").style.display= "block";
	}else if (nivelesSuperados == 6) {
		level1.style.background = "linear-gradient(to bottom,#2980b9,#3498db,#2980b9";
		level2.style.background = "linear-gradient(to bottom,#2980b9,#3498db,#2980b9";
		level3.style.background = "linear-gradient(to bottom,#2980b9,#3498db,#2980b9";
		level4.style.background = "linear-gradient(to bottom,#2980b9,#3498db,#2980b9";
		level5.style.background = "linear-gradient(to bottom,#2980b9,#3498db,#2980b9";
		level6.style.background = "linear-gradient(to bottom,#2980b9,#3498db,#2980b9";
		level7.style.background = "linear-gradient(to bottom,#2980b9,#3498db,#2980b9";
		document.getElementById("h2").style.display= "block";
		document.getElementById("h3").style.display= "block";
		document.getElementById("h4").style.display= "block";
		document.getElementById("h5").style.display= "block";
		document.getElementById("h6").style.display= "block";
		document.getElementById("h7").style.display= "block";
	}else if (nivelesSuperados == 7) {
		level1.style.background = "linear-gradient(to bottom,#2980b9,#3498db,#2980b9";
		level2.style.background = "linear-gradient(to bottom,#2980b9,#3498db,#2980b9";
		level3.style.background = "linear-gradient(to bottom,#2980b9,#3498db,#2980b9";
		level4.style.background = "linear-gradient(to bottom,#2980b9,#3498db,#2980b9";
		level5.style.background = "linear-gradient(to bottom,#2980b9,#3498db,#2980b9";
		level6.style.background = "linear-gradient(to bottom,#2980b9,#3498db,#2980b9";
		level7.style.background = "linear-gradient(to bottom,#2980b9,#3498db,#2980b9";
		level8.style.background = "linear-gradient(to bottom,#2980b9,#3498db,#2980b9";
		document.getElementById("h2").style.display= "block";
		document.getElementById("h3").style.display= "block";
		document.getElementById("h4").style.display= "block";
		document.getElementById("h5").style.display= "block";
		document.getElementById("h6").style.display= "block";
		document.getElementById("h7").style.display= "block";
		document.getElementById("h8").style.display= "block";
	}else if (nivelesSuperados == 8) {
		level1.style.background = "linear-gradient(to bottom,#2980b9,#3498db,#2980b9";
		level2.style.background = "linear-gradient(to bottom,#2980b9,#3498db,#2980b9";
		level3.style.background = "linear-gradient(to bottom,#2980b9,#3498db,#2980b9";
		level4.style.background = "linear-gradient(to bottom,#2980b9,#3498db,#2980b9";
		level5.style.background = "linear-gradient(to bottom,#2980b9,#3498db,#2980b9";
		level6.style.background = "linear-gradient(to bottom,#2980b9,#3498db,#2980b9";
		level7.style.background = "linear-gradient(to bottom,#2980b9,#3498db,#2980b9";
		level8.style.background = "linear-gradient(to bottom,#2980b9,#3498db,#2980b9";
		level9.style.background = "linear-gradient(to bottom,#2980b9,#3498db,#2980b9";
		document.getElementById("h2").style.display= "block";
		document.getElementById("h3").style.display= "block";
		document.getElementById("h4").style.display= "block";
		document.getElementById("h5").style.display= "block";
		document.getElementById("h6").style.display= "block";
		document.getElementById("h7").style.display= "block";
		document.getElementById("h8").style.display= "block";
		document.getElementById("h9").style.display= "block";
	}else if (nivelesSuperados == 9) {
		level1.style.background = "linear-gradient(to bottom,#2980b9,#3498db,#2980b9";
		level2.style.background = "linear-gradient(to bottom,#2980b9,#3498db,#2980b9";
		level3.style.background = "linear-gradient(to bottom,#2980b9,#3498db,#2980b9";
		level4.style.background = "linear-gradient(to bottom,#2980b9,#3498db,#2980b9";
		level5.style.background = "linear-gradient(to bottom,#2980b9,#3498db,#2980b9";
		level6.style.background = "linear-gradient(to bottom,#2980b9,#3498db,#2980b9";
		level7.style.background = "linear-gradient(to bottom,#2980b9,#3498db,#2980b9";
		level8.style.background = "linear-gradient(to bottom,#2980b9,#3498db,#2980b9";
		level9.style.background = "linear-gradient(to bottom,#2980b9,#3498db,#2980b9";
		level10.style.background = "linear-gradient(to bottom,#2980b9,#3498db,#2980b9";
		document.getElementById("h2").style.display= "block";
		document.getElementById("h3").style.display= "block";
		document.getElementById("h4").style.display= "block";
		document.getElementById("h5").style.display= "block";
		document.getElementById("h6").style.display= "block";
		document.getElementById("h7").style.display= "block";
		document.getElementById("h8").style.display= "block";
		document.getElementById("h9").style.display= "block";
		document.getElementById("h10").style.display= "block";

	}
}

