
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
	
	//zmena smeru animace
	//reseno tak, ze jsou ve stylu napsane animace pro oba smery zvlast - to ma vyhodu, ze pri prirazeni animace (nove) zacina vzdy od keyframe 0%, tim dojde k jejimu resetovani a zaroven synchronizovani s casovacem JS
	if (nahodneCislo % 2 == 0) {		
		sudaNeboLicha.style.animationName = "sudlich";
	}
	else {		
		sudaNeboLicha.style.animationName = "lichsud"
	}

},2500)

//selektovani vystupnich poli
let vysl = document.querySelectorAll(".vysledek");

//selektovani animacnich pumprdliku
let sudaNeboLicha = document.querySelector(".sudeliche");

//vystupni pole zprvnu naplnime rucne - kod je stejny jako ten v casovaci
vysl[0].innerText = nahodneCislo;
vysl[1].innerText = (nahodneCislo % 2 == 0) ? "sudé" : "liché";
vysl[2].innerText = (nahodneCislo < 25) ? "je" : "není";
