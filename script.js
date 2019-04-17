const urlParams = new URLSearchParams(window.location.search);
var clean_uri = location.protocol + "//" + location.host + location.pathname;
var person = {};

window.onload = function(){
  var foundPerson = false;
  const myId = urlParams.get('id');

  for(var p of people){
    if(myId == p.id){
      foundPerson = true;
      person = p;
      break;
    }
  }
  if(foundPerson){
    personalize(person);
  }else{
    document.getElementById("missing-id").classList.remove("hidden");
    document.getElementById("loading").classList.add("hidden");
  }
//window.history.replaceState({}, document.title, clean_uri);
}

function personalize(p){
  var greetEl = document.getElementById("greeting");
  greetEl.innerHTML = person.greeting;

  if(person.single){
    document.getElementById("pozivJednina").classList.remove("hidden");
    document.getElementById("daLiDolaziJed").classList.remove("hidden");
  }else {
    document.getElementById("pozivMnozina").classList.remove("hidden");
    document.getElementById("daLiDolaziMno").classList.remove("hidden");
  }
  document.getElementById("loading").classList.add("hidden");
  document.getElementById("form").classList.remove("hidden");
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
            id:  person.id,
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
{id:"443215c2",name:"Tetka Sandra i Stefan",greeting:"Ћао тетка Сандра и њен дечко Стефане,",single:false},
{id:"e310600f",name:"Cika Dragan",greeting:"Ћао деда Драгане,",single:true},
{id:"7b3f4a46",name:"Dasa",greeting:"Ћао бака Дашо,",single:true},
{id:"73b7dd22",name:"Ivana i Strale",greeting:"Ћао сека Сузо и бата Његоше, тета Ивана и течо Страле,",single:false},
{id:"c3a4369e",name:"Misa i Sandra",greeting:"Здраво бата Ацика, стрина Сандра и стриче Мишо,",single:false},
{id:"173f36e5",name:"Tetka Sonja",greeting:"Здраво баба Соња и деда Аце,",single:false},
{id:"be67a8e7",name:"Deda Boris",greeting:"Здраво прадеда,",single:true},
{id:"7dd40a5e",name:"Maja i Dare",greeting:"Здраво бата Матеј, тето Маје и тетин Даре,",single:false},
{id:"45d4e43b",name:"Moni",greeting:"Здраво тето Монче,",single:true},
{id:"c3e3e8af",name:"Tetka Irena",greeting:"Здраво баба Ирена и деда Бобе,",single:false},
{id:"5f8df3f0",name:"Magde i Dimitar",greeting:"Здраво бата Константин, тето Магде и течо Димитар,",single:false},
{id:"8f1685a1",name:"Kum Zoran",greeting:"Ћао татини кумови,",single:false},
{id:"bda5fa66",name:"Miocevi roditelji",greeting:"Здраво тета Славице и чика Драгославе,",single:false},
{id:"a14bf203",name:"Nevena Mioceva",greeting:"Ћао кумова сестро,",single:true},
{id:"97c8f6a0",name:"Kum Mioc",greeting:"Ћао куме јоло (кум онли ливз ванс),",single:true},
{id:"e23225a1",name:"Zika",greeting:"Ћао чика (комшо) Жико,",single:true},
{id:"5fa59eb2",name:"Kotarlici",greeting:"Ћао Алексеј, тета Анета и чика Иване,",single:false},
{id:"651a43fc",name:"Simici",greeting:"Ћао Оги, тета Јецо и чика Симићу,",single:false},
{id:"8818e0ca",name:"Ostojici",greeting:"Ћао Вуле, тета Ивана и чика Остоја,",single:false},
{id:"9d0a9305",name:"Tamara",greeting:"Ћао тета Тамара и чика Јрн,",single:false},
{id:"c5ead96e",name:"Milica",greeting:"Ћао тета Милице и чика Џими,",single:false},
{id:"54879df4",name:"Ana i Aljosa",greeting:"Ћао тета Ана и чика Аљоша,",single:false},
{id:"3b611e7a",name:"Homer i Sara",greeting:"Ћао тета Саро и чика Хомере,",single:false},
{id:"eccd599d",name:"Simona i Oli",greeting:"Здраво тета Кроки и чика Оли,",single:false},
{id:"a8d3ca53",name:"Kozbi",greeting:"Здраво Гозби, Цобе, Козби,",single:true},
{id:"c9276311",name:"Davor",greeting:"Здраво Давор-фин,",single:true},
{id:"0afa8b88",name:"Kare",greeting:"Здраво убав,",single:true},
{id:"38dacf9e",name:"Meri",greeting:"Здраво тета Мери,",single:true},
{id:"46f52162",name:"Kuma Vale",greeting:"Здраво мамина кумо,",single:true},
{id:"635e81d4",name:"Baba i Deda JZ",greeting:"Здраво бабуче и дедуче,",single:false},
{id:"b5964fbc",name:"Mare i Vule",greeting:"Здраво тете и течо,",single:false},
{id:"c00d29ae",name:"Tetka Jasmina",greeting:"Здраво баба и деда,",single:false},
{id:"78a18c9d",name:"Caci i Marjan",greeting:"Здраво тета Цаци и тетин Марјан,",single:false},
{id:"5e7c3ae6",name:"Sneze i Viktor",greeting:"Здраво дада Луна, тета и тетин,",single:false},
{id:"e56e5397",name:"Dare",greeting:"Здраво вујче најубав,",single:true},
{id:"d01020a7",name:"Nade i Oli",greeting:"Здраво бато Боко, тета Наде и тетин Оли,",single:false},
{id:"49eebf1e",name:"Dunja i Naki",greeting:"Ћао секе Ања и Вања, тета Дуња и течо Наки,",single:false},
{id:"d0ffa925",name:"Dragisa i Sandra",greeting:"Ћао бате Сале, Оги, Фићо и Алекса, ујко Гиша и ујна Сандра,",single:false},
{id:"11ac1f6b",name:"Cika Igor i Magde",greeting:"Ћао баба и деда,",single:false},
{id:"90955d46",name:"Mile i Dafina",greeting:"Здраво Бојана и Тијана,",single:false},
{id:"c071ffcb",name:"",greeting:"",single:false},
{id:"28e76b53",name:"",greeting:"",single:false},
{id:"f6e4f31a",name:"",greeting:"",single:false},
{id:"73290959",name:"",greeting:"",single:false},
{id:"a6479aae",name:"",greeting:"",single:false},
{id:"9a2e67b6",name:"",greeting:"",single:false},
{id:"1a2cd3bb",name:"mama",greeting:"Драга мама Мими,",single:true},
{id:"393fdbfe",name:"tata",greeting:"Драги тата Стефане,",single:true}
]
