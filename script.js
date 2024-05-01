
function nahCislo(){
	//funkce vrati nahodne cislo v rozmez 0 - 49
	return(Math.floor(Math.random()*50));
}
//START:

//selektovani vystupnich poli
let vysl = document.querySelectorAll(".vysledek");
console.log(vysl);