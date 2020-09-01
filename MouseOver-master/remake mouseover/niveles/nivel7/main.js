document.getElementById("player").addEventListener("mouseover", move);
document.getElementById("enemy").addEventListener("mouseover", gameOver);

//-----------------------------------------------------------
var player = document.getElementById("player");
var enemy = document.getElementById("enemy");
//-----------------------------------------------------------
var sonido = new Audio();
sonido.src = "../../audio/sonido2.mp3"
//-----------------------------------------------------------
var temporizador = 20;
var puntaje = 0;

function move(){
	puntaje++;
	num = Math.round(Math.random()*410);
	player.style.marginLeft = num + "px";
	num = Math.round(Math.random()*410);
	player.style.marginTop = num + "px";
	num = Math.round(Math.random()*410);
	enemy.style.marginTop = num + "px";
	num = Math.round(Math.random()*410);
	enemy.style.marginLeft = num + "px";
}
function gameOver(){
	temporizador = 0;
}
function again(){
	puntaje = 0;
	temporizador = 20;
		document.getElementById("lose").style.display = "none";
		document.getElementById("win").style.display = "none";
		//-----------------------------------------------------------
		document.getElementById("contenedor").style.display ="block";
		document.getElementById("contenedorPlayer").style.display ="block";
		//-----------------------------------------------------------
		player.style.display ="block";
		player.style.marginLeft = 210 + "px";
		player.style.marginTop = 210 + "px";
		//-----------------------------------------------------------
		enemy.style.marginLeft = 0 + "px";
		enemy.style.marginTop = 0 + "px";
}









function render(){
	document.getElementById("tiempo").innerHTML = "<b> Tiempo:" + " " + temporizador + "<b>";
	document.getElementById("puntos").innerHTML = "<b> Puntaje:" + " " + puntaje + "/" + "10" + "<b>";
	//-----------------------------------------------------------
	if (temporizador == 0 ) {
		temporizador = 0;
		document.getElementById("lose").style.display = "block";
		document.getElementById("win").style.display = "none";
		//-----------------------------------------------------------
		document.getElementById("contenedor").style.display ="none";
		document.getElementById("contenedorPlayer").style.display ="none";
		//-----------------------------------------------------------
		player.style.display ="none";
	}
	if (puntaje == 10) {
		temporizador = -1;
		document.getElementById("lose").style.display = "none";
		document.getElementById("win").style.display = "block";
		//-----------------------------------------------------------
		document.getElementById("contenedor").style.display ="none";
		document.getElementById("contenedorPlayer").style.display ="none";
		//-----------------------------------------------------------
		player.style.display ="none";	
	}
	
}
function tiempo(){
	temporizador--;
}
function iniciar(){
	document.getElementById("contenedor").style.display = "block";
	document.getElementById("contenedorPlayer").style.display = "block";
	player.style.display = "block";
	document.getElementById("iniciar").style.display = "none";
	setInterval(tiempo,1000);
	setInterval(render,100);
}
function inicializa(){
	document.getElementById("iniciar").style.display = "block";
}
