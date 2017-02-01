window.onload=manejarclick;
var cifra1="";
var control=true;

function manejarclick(){
	var uno=document.getElementById("uno");
	uno.addEventListener("click",function() {
								    clicNumero("1");
								});
	var dos=document.getElementById("dos");
	dos.addEventListener("click",function() {
									clicNumero("2");
								});
	var tres=document.getElementById("tres");
	tres.addEventListener("click",function() {
									clicNumero("3");
								});
	var cuatro=document.getElementById("cuatro");
	cuatro.addEventListener("click",function() {
									clicNumero("4");
								});
	var cinco=document.getElementById("cinco");
	cinco.addEventListener("click",function() {
									clicNumero("5");
								});
	var seis=document.getElementById("seis");
	seis.addEventListener("click",function() {
									clicNumero("6");
								});
	var siete=document.getElementById("siete");
	siete.addEventListener("click",function() {
									clicNumero("7");
								});
	var ocho=document.getElementById("ocho");
	ocho.addEventListener("click",function() {
									clicNumero("8");
								});
	var nueve=document.getElementById("nueve");
	nueve.addEventListener("click",function() {
									clicNumero("9");
								});
	var cero=document.getElementById("cero");
	cero.addEventListener("click",function() {
									clicNumero("0");
								});
	var sumar=document.getElementById("sumar");
	sumar.addEventListener("click",function() {
									clicNumero("+");
								});
	var borrar=document.getElementById("borrar");
	borrar.addEventListener("click",borr)

	var restar=document.getElementById("restar");
	restar.addEventListener("click",function() {
									clicNumero("-");
								});
	var multi=document.getElementById("multi");
	multi.addEventListener("click",function() {
									clicNumero("*");
								});
	var divi=document.getElementById("divi");
	divi.addEventListener("click",function() {
									clicNumero("/");
								});
	var igual=document.getElementById("igual");
	igual.addEventListener("click",calcular)

	var men=document.getElementById("men");
	men.addEventListener("click",menos1)
}
function clicNumero(num){
	cifra1+=num
	var panta=document.getElementById("res");
	panta.textContent=cifra1;
}
function calcular(){
	var fin=eval(cifra1);
	var panta=document.getElementById("res");
	panta.textContent=fin;
}
function borr(){
	cifra1="";
	var panta=document.getElementById("res");
	panta.textContent=cifra1;
}
function menos1(){
var pantalla=document.getElementById("res");

var panta=cifra1.slice(0,-1);

cifra1=panta;

pantalla.textContent=cifra1;
}

