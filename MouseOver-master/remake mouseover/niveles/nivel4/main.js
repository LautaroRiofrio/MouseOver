document.getElementById("player").addEventListener("mouseover", mover);
document.getElementById("enemy").addEventListener("mouseover", gameOver);
document.getElementById("enemy2").addEventListener("mouseover", gameOver);
document.getElementById("enemy3").addEventListener("mouseover", gameOver);
document.getElementById("enemy4").addEventListener("mouseover", gameOver);


var puntaje = 0;
var temporizador = 30;
var sonido = new Audio();
sonido.src = "../../audio/sonido2.mp3";

function mover(){
	puntaje++;
	num = Math.round(Math.random()*430);
	document.getElementById("player").style.marginLeft = num  + "px";
	num = Math.round(Math.random()*430);
	document.getElementById("player").style.marginTop = num  + "px";
	Enum = Math.round(Math.random()*430);
	//--------------------------------------------------------------------------
	document.getElementById("enemy").style.marginTop = Enum + "px";
	Enum = Math.round(Math.random()*430);
	document.getElementById("enemy").style.marginLeft = Enum + "px";
	Enum1 = Math.round(Math.random()*430);
	//--------------------------------------------------------------------------
	document.getElementById("enemy2").style.marginTop = Enum1 + "px";
	Enum1 = Math.round(Math.random()*430);
	document.getElementById("enemy2").style.marginLeft = Enum1 + "px";
	Enum2 = Math.round(Math.random()*430);
	//--------------------------------------------------------------------------
	document.getElementById("enemy3").style.marginTop = Enum2 + "px";
	Enum2 = Math.round(Math.random()*430);
	document.getElementById("enemy3").style.marginLeft = Enum2 + "px";
	Enum3 = Math.round(Math.random()*430);
	//--------------------------------------------------------------------------
	document.getElementById("enemy4").style.marginTop = Enum3 + "px";
	Enum3 = Math.round(Math.random()*430);
	document.getElementById("enemy4").style.marginLeft = Enum3 + "px";
	//--------------------------------------------------------------------------
}




function gameOver(){
	temporizador = 0;
}




function restarTiempo(){
	temporizador--;
}




setInterval(render,100);
function render(){
	document.getElementById("tiempo").innerHTML = "<b> tiempo:" + " " + temporizador + "<b>";
	document.getElementById("puntos").innerHTML = "<b> puntaje:" + " " + puntaje + "/" + "10 <b>" ;
		if (puntaje == 10) {
		document.getElementById("player").style.display = "none";
		//--------------------------------------------------------------------------
		document.getElementById("lose").style.display = "none";
		document.getElementById("win").style.display = "block";
		//--------------------------------------------------------------------------
		document.getElementById("contenedor").style.display="none";
		document.getElementById("contenedorPlayer").style.display="none";
		temporizador = 30;
	} else if (temporizador <= 0) {
		temporizador = 0;
		document.getElementById("lose").style.display = "block";
		document.getElementById("win").style.display="none";
		document.getElementById("player").style.display="none";
		document.getElementById("contenedor").style.display="none";
		document.getElementById("contenedorPlayer").style.display="none";
	}
}
function again(){
	document.getElementById("player").style.display="block";
	//--------------------------------------------------------------------------
	document.getElementById("lose").style.display = "none";
	document.getElementById("win").style.display="none";
	//--------------------------------------------------------------------------
	document.getElementById("contenedor").style.display="block";
	document.getElementById("contenedorPlayer").style.display="block";
	//--------------------------------------------------------------------------
	document.getElementById("player").style.marginLeft = 210 + "px";
	document.getElementById("player").style.marginTop = 210 + "px";
	//--------------------------------------------------------------------------

	document.getElementById("enemy").style.marginLeft = 0 + "px";
	document.getElementById("enemy").style.marginTop = 0 + "px";
	//--------------------------------------------------------------------------
	document.getElementById("enemy2").style.marginTop = 455 + "px";
	document.getElementById("enemy2").style.marginLeft = 455 + "px";
	//--------------------------------------------------------------------------
	document.getElementById("enemy3").style.marginTop = 0 + "px";
	document.getElementById("enemy3").style.marginLeft = 455 + "px";
	//--------------------------------------------------------------------------
	document.getElementById("enemy4").style.marginTop = 455 + "px";
	document.getElementById("enemy4").style.marginLeft = 0 + "px";
	temporizador = 30;
	puntaje = 0;
}

function inicializa(){
	document.getElementById("player").style.display="none";
	//--------------------------------------------------------------------------
	document.getElementById("contenedor").style.display="none";
	document.getElementById("contenedorPlayer").style.display="none";
	//--------------------------------------------------------------------------
	document.getElementById("iniciar").style.display="block";
}

function iniciar(){
	document.getElementById("player").style.display="block";
	//--------------------------------------------------------------------------
	document.getElementById("contenedor").style.display="block";
	document.getElementById("contenedorPlayer").style.display="block";
	//--------------------------------------------------------------------------
	document.getElementById("iniciar").style.display="none";
	//--------------------------------------------------------------------------
	setInterval(restarTiempo,1000);
}
