
function nahCislo(){
	//funkce vrati nahodne cislo v rozmez 0 - 49
	return(Math.floor(Math.random()*50));	
}
//START:

//globalni promenne
let nahodneCislo=nahCislo();

//zapnuti casovace, ktery bude kazdych 2,5vterin generovat nove nahodne cislo
setInterval(()=>{
	nahodneCislo=nahCislo(); //zavolani funkce nahCislo() ktera vrati nahodne cislo v rozsahu 0 - 49
	
	//vypsani vystupnich poli
	vysl[0].innerText = nahodneCislo;
	vysl[1].innerText = (nahodneCislo % 2 == 0) ? "sudé" : "liché";
	vysl[2].innerText = (nahodneCislo < 25) ? "je" : "není";
	

},2500)

//selektovani vystupnich poli
let vysl = document.querySelectorAll(".vysledek");

//vystupni pole zprvnu naplnime rucne - kod je stejny jako ten v casovaci
vysl[0].innerText = nahodneCislo;
vysl[1].innerText = (nahodneCislo % 2 == 0) ? "sudé" : "liché";
vysl[2].innerText = (nahodneCislo < 25) ? "je" : "není";
