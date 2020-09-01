document.getElementById("player").addEventListener("mouseover", mover);
document.getElementById("enemy1").addEventListener("mouseover",gameOver);
document.getElementById("enemy2").addEventListener("mouseover",gameOver);
document.getElementById("enemy3").addEventListener("mouseover",gameOver);
document.getElementById("enemy4").addEventListener("mouseover",gameOver);
document.getElementById("enemy5").addEventListener("mouseover",gameOver);
document.getElementById("enemy6").addEventListener("mouseover",gameOver);
document.getElementById("enemy7").addEventListener("mouseover",gameOver);
document.getElementById("enemy8").addEventListener("mouseover",gameOver);


var puntaje = 0;
var temporizador = 20;
var sonido = new Audio();
sonido.src = "../../audio/sonido2.mp3";

function mover(){
	puntaje++;
	num = Math.round(Math.random()*430);
	document.getElementById("player").style.marginLeft = num  + "px";
	num = Math.round(Math.random()*430);
	document.getElementById("player").style.marginTop = num  + "px";
	Enum = Math.round(Math.random()*430);
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
	document.getElementById("puntos").innerHTML = "<b> puntaje:" + " " + puntaje + "/" + "20 <b>" ;
		if (puntaje == 20) {
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
	location.reload();
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
	setInterval(cuadros,100);
}




var left1 = -90;
var left2 = 100;


var fila1= document.getElementById("fila1");
var fila2= document.getElementById("fila2");

function cuadros(){		
		if (left1 == -90 && left2 == 100) {
			fila1.style.marginLeft = 100 + "px";
			fila2.style.marginLeft = -90 + "px";
			setTimeout(function() {
				left1 = 100;
				left2 = -90;
			}, 5200);
		}
		 else if (left1 == 100 && left2 == -90) {
			fila1.style.marginLeft = -90 + "px";
			fila2.style.marginLeft = 100 + "px";
			setTimeout(function() {
				left1 = -90;
				left2 = 100;
			}, 5200);
		}
	
}