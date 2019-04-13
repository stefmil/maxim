const urlParams = new URLSearchParams(window.location.search);
var clean_uri = location.protocol + "//" + location.host + location.pathname;
var person = {};

window.onload = function(){
  const myId = urlParams.get('id');
  for(var p of people){
    if(myId == p.id){
      person = p;
      personalize(person);
      alert(p);
      break;
    }
  }
//window.history.replaceState({}, document.title, clean_uri);
}

function personalize(person){
  var greetEl = document.getElementById("greeting");
  greetEl.innerHTML = person.greeting;

  if(person.single){
    document.getElementById("pozivJednina").classList.remove("hidden");
  }else {
    document.getElementById("pozivMnozina").classList.remove("hidden");
  }

}

function submit(){
  ajax.send();
}

var ajax = {
		isSubmiting: false,
		send: function() {
			if(ajax.isSubmiting == false) {
				ajax.isSubmiting = true;

				var elDolazi = document.querySelector('input[name="dolazi"]:checked');
				var eVel = document.getElementById("brojVelikih");
        var eMal = document.getElementById("brojMalih");

				if(!elDolazi){
          ajax.SetText("Нисте попунили сва поља.");
          ajax.isSubmiting = false;
				}else {
          var dolazi = elDolazi.value;
          var brojVelikih = eVel.options[eVel.selectedIndex].value;
          var brojMalih = eMal.options[eMal.selectedIndex].value;

          var objectToSend = {
            ime: person.name,
            dolazi: dolazi,
            brojVelikih: brojVelikih,
            brojMalih: brojMalih
					};
          //alert(JSON.stringify(objectToSend));
					ajax.SetText("Шаље...");
					$.post("sendmail.php", objectToSend, function(data) {
						if(data == "sent") {
              if(dolazi == 'da'){
							   ajax.SetText("Послато. Хвала, видимо се!");
              }else{
                ajax.SetText("Послато. Баш ми је криво што се нећемо видети!");
              }
						} else {
							ajax.SetText("Грешка");
						}
						ajax.isSubmiting = false;
					});
				}
			}
		},
		SetText: function(text) {
			document.getElementById("status").innerHTML=text;
      document.getElementById("alert").classList.remove("hidden");
		}
	}

var people = [
{id:"764d31ed",name:"Baba i deda BB",greeting:"Ћао бако и деко,",single:false},
{id:"443215c2",name:"Tetka Sandra i Stefan",greeting:"Ћао тетка Сандра,",single:false},
{id:"e310600f",name:"Cika Dragan",greeting:"Ћао деда Драгане,",single:false},
{id:"7b3f4a46",name:"Dasa",greeting:"Ћао бака Дашо,",single:false},
{id:"73b7dd22",name:"Ivana i Strale",greeting:"Ћао Сузо и Његоше,",single:false},
{id:"c3a4369e",name:"Misa i Sandra",greeting:"Чао бата Ацика,",single:true},
{id:"173f36e5",name:"Tetka Sonja",greeting:"Ћао баба Соња и деда Аце,",single:false},
{id:"be67a8e7",name:"Deda Boris",greeting:"Ћао прадеда,",single:false},
{id:"7dd40a5e",name:"Maja i Dare",greeting:"Ћао бата Матеј,",single:false},
{id:"45d4e43b",name:"Moni",greeting:"Ћао тетка Монче,",single:false},
{id:"c3e3e8af",name:"Tetka Irena",greeting:"Ћао баба Ирена и деда Бобе,",single:false},
{id:"5f8df3f0",name:"Magde i Dimitar",greeting:"Ћао бата Константин,",single:false},
{id:"8f1685a1",name:"Kum Zoran",greeting:"Ћао татини кумови,",single:false},
{id:"bda5fa66",name:"Miocevi roditelji i Nevena",greeting:"",single:false},
{id:"97c8f6a0",name:"Kum Mioc",greeting:"",single:false},
{id:"e23225a1",name:"Zika",greeting:"",single:false},
{id:"5fa59eb2",name:"Aneta",greeting:"",single:false},
{id:"651a43fc",name:"Simici",greeting:"",single:false},
{id:"8818e0ca",name:"Ostojici",greeting:"",single:false},
{id:"9d0a9305",name:"Tamara",greeting:"",single:false},
{id:"c5ead96e",name:"Milica",greeting:"",single:false},
{id:"54879df4",name:"Ana i Aljosa",greeting:"",single:false},
{id:"3b611e7a",name:"Homer i Sara",greeting:"",single:false},
{id:"eccd599d",name:"Simona i Oli",greeting:"",single:false},
{id:"a8d3ca53",name:"Kozbi",greeting:"",single:false},
{id:"c9276311",name:"Davor",greeting:"",single:false},
{id:"0afa8b88",name:"Kare",greeting:"",single:false},
{id:"38dacf9e",name:"Meri",greeting:"",single:false},
{id:"46f52162",name:"Kuma Vale",greeting:"",single:false},
{id:"635e81d4",name:"Baba i Deda JZ",greeting:"",single:false},
{id:"b5964fbc",name:"Mare i Vule",greeting:"",single:false},
{id:"c00d29ae",name:"Tetka Jasmina",greeting:"",single:false},
{id:"78a18c9d",name:"Caci i Marjan",greeting:"",single:false},
{id:"5e7c3ae6",name:"Sneze i Viktor",greeting:"",single:false},
{id:"e56e5397",name:"Dare",greeting:"",single:false},
{id:"d01020a7",name:"Nade i Oli",greeting:"",single:false},
{id:"49eebf1e",name:"Dunja i Naki",greeting:"",single:false},
{id:"d0ffa925",name:"Dragisa i Sandra",greeting:"",single:false},
{id:"11ac1f6b",name:"Cika Igor i Magde",greeting:"",single:false},
{id:"90955d46",name:"Mile i Dafina",greeting:"",single:false},
{id:"c071ffcb",name:"",greeting:"",single:false},
{id:"28e76b53",name:"",greeting:"",single:false},
{id:"f6e4f31a",name:"",greeting:"",single:false},
{id:"73290959",name:"",greeting:"",single:false},
{id:"a6479aae",name:"",greeting:"",single:false},
{id:"a14bf203",name:"",greeting:"",single:false},
{id:"9a2e67b6",name:"",greeting:"",single:false},
{id:"1a2cd3bb",name:"",greeting:"",single:false},
{id:"393fdbfe",name:"",greeting:"",single:false}
]
