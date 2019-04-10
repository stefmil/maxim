const urlParams = new URLSearchParams(window.location.search);
var clean_uri = location.protocol + "//" + location.host + location.pathname;
var person = "";

window.onload = function(){
  const myId = urlParams.get('id');
  for(var p of people){
    if(myId == p.id){
      person = p;
      var greetEl = document.getElementById("greeting");
      greetEl.innerHTML = person.greeting;
      break;
    }
  }
//window.history.replaceState({}, document.title, clean_uri);
}

function submit(){
  ajax.send();
}

var ajax = {
		isSubmiting: false,
		send: function() {
			if(ajax.isSubmiting == false) {
				ajax.isSubmiting = true;

				var dolazi = document.querySelector('input[name="dolazi"]:checked').value;
				var eVel = document.getElementById("brojVelikih");
        var eMal = document.getElementById("brojMalih");

        var brojVelikih = eVel.options[eVel.selectedIndex].value;
        var brojMalih = eMal.options[eMal.selectedIndex].value;

				if(dolazi == "" || brojVelikih == "" || brojMalih == "")
					alert("Niste popunili sva polja.");
				else {
          var objectToSend = {
            ime: person.name,
            dolazi: dolazi,
            brojVelikih: brojVelikih,
            brojMalih: brojMalih
					};
          alert(JSON.stringify(objectToSend));
					ajax.SetText("Salje...");
					$.post("sendmail.php", objectToSend, function(data) {
						if(data == "sent") {
							ajax.SetText("Poslato!");
						} else {
							ajax.SetText("Greska");
							alert(data);
						}
						ajax.isSubmiting = false;
					});
				}
			}
		},
		SetText: function(text) {
			document.getElementById("status").innerHTML=text;
		}
	}












var people = [
{id:"764d31ed",name:"Stefan",greeting:"Cao Stefane"},
{id:"443215c2",name:"Milosevski",greeting:"Добар дан Добар дан"},
{id:"e310600f",name:"mimi",greeting:"Cao Mama Mimi :)"},
{id:"7b3f4a46",name:"",greeting:""},
{id:"73b7dd22",name:"",greeting:""},
{id:"c3a4369e",name:"",greeting:""},
{id:"173f36e5",name:"",greeting:""},
{id:"be67a8e7",name:"",greeting:""},
{id:"7dd40a5e",name:"",greeting:""},
{id:"45d4e43b",name:"",greeting:""},
{id:"c3e3e8af",name:"",greeting:""},
{id:"5f8df3f0",name:"",greeting:""},
{id:"8f1685a1",name:"",greeting:""},
{id:"bda5fa66",name:"",greeting:""},
{id:"97c8f6a0",name:"",greeting:""},
{id:"e23225a1",name:"",greeting:""},
{id:"5fa59eb2",name:"",greeting:""},
{id:"651a43fc",name:"",greeting:""},
{id:"8818e0ca",name:"",greeting:""},
{id:"9d0a9305",name:"",greeting:""},
{id:"c5ead96e",name:"",greeting:""},
{id:"54879df4",name:"",greeting:""},
{id:"3b611e7a",name:"",greeting:""},
{id:"eccd599d",name:"",greeting:""},
{id:"a8d3ca53",name:"",greeting:""},
{id:"c9276311",name:"",greeting:""},
{id:"0afa8b88",name:"",greeting:""},
{id:"38dacf9e",name:"",greeting:""},
{id:"46f52162",name:"",greeting:""},
{id:"635e81d4",name:"",greeting:""},
{id:"b5964fbc",name:"",greeting:""},
{id:"c00d29ae",name:"",greeting:""},
{id:"78a18c9d",name:"",greeting:""},
{id:"5e7c3ae6",name:"",greeting:""},
{id:"e56e5397",name:"",greeting:""},
{id:"d01020a7",name:"",greeting:""},
{id:"49eebf1e",name:"",greeting:""},
{id:"d0ffa925",name:"",greeting:""},
{id:"11ac1f6b",name:"",greeting:""},
{id:"90955d46",name:"",greeting:""},
{id:"c071ffcb",name:"",greeting:""},
{id:"28e76b53",name:"",greeting:""},
{id:"f6e4f31a",name:"",greeting:""},
{id:"73290959",name:"",greeting:""},
{id:"a6479aae",name:"",greeting:""},
{id:"a14bf203",name:"",greeting:""},
{id:"9a2e67b6",name:"",greeting:""},
{id:"1a2cd3bb",name:"",greeting:""},
{id:"393fdbfe",name:"",greeting:""}
]
