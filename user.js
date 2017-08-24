var path = document.getElementById("giocatore").dataset.user;

//lettura
var giocatore = document.getElementById("giocatore");
var dbRef = firebase.database().ref().child(path + "giocatore");

dbRef.on("value", snap => (giocatore.value = snap.val()));

//abilità

/* var abilita0 = document.getElementById("abilita" + 0);
var dbRefAbi0 = firebase.database().ref().child(path + "abilita" + 0);
dbRefAbi0.on("value", snap => (abilita0.value = snap.val()));

var abilita1 = document.getElementById("abilita" + 1);
var dbRefAbi1 = firebase.database().ref().child(path + "abilita" + 1);
dbRefAbi1.on("value", snap => (abilita1.value = snap.val()));

var abilita3 = document.getElementById("abilita" + 3);
var dbRefAbi3 = firebase.database().ref().child(path + "abilita" + 3);
dbRefAbi3.on("value", snap => (abilita3.value = snap.val()));

var abilita4 = document.getElementById("abilita" + 4);
var dbRefAbi4 = firebase.database().ref().child(path + "abilita" + 4);
dbRefAbi4.on("value", snap => (abilita4.value = snap.val()));

var abilita5 = document.getElementById("abilita" + 5);
var dbRefAbi5 = firebase.database().ref().child(path + "abilita" + 5);
dbRefAbi5.on("value", snap => (abilita5.value = snap.val())); */

//variabili abilità
function caricaAbilita(i) {
  firebase
    .database()
    .ref()
    .child(path + "abilita" + i)
    .once("value", function(snapshot) {
      var snapAbi = snapshot.val();
      if (snapAbi) {
        $("<form />", { class: "abilita", onsubmit: "return false;" })
        .append($("<input />", { placeholder: "Abilita", class:"abi" , id: "abilita" + i }))
        .append(
          $("<button />", {
            id: "submitBtn",
            onClick: "submitClick('abilita" + i + "')"
          })
        )
        .appendTo("#listaAbilita");
      $("<form />", { class: "abilitaBonus", onsubmit: "return false;" })
        .append($("<input />", { placeholder: "0", class:"abiBonus" , id: "abilitaBonus" + i }))
        .append(
          $("<button />", {
            id: "submitBtn",
            onClick: "submitClick('abilita" + i + "')"
          })
        )
        .appendTo("#listaAbilita");

        var abilita = document.getElementById("abilita" + i);
        var dbRefAbi = firebase.database().ref().child(path + "abilita" + i);
        dbRefAbi.on("value", snap => (abilita.value = snap.val()));
      }
    });
}
caricaAbilita(0);
caricaAbilita(1);
caricaAbilita(2);
caricaAbilita(3);
caricaAbilita(4);
caricaAbilita(5);
caricaAbilita(6);
caricaAbilita(7);
caricaAbilita(8);
caricaAbilita(9);
caricaAbilita(10);

//scrittura

function submitClick(v) {
  var mainText = document.getElementById(v);
  /*var mainText = document.getElementById('iniziativa');*/
  var submitBtn = document.getElementById("submitBtn");
  var firebaseRef = firebase.database().ref();
  var messageText = mainText.value;

  firebaseRef.child(path + v).set(messageText);
}

function genAbilita() {
  //$('div.x').attr('id', 'y');
  
  for (var j = 0; j <= 10; j++) {
    //inserire codice di controllo sull'id abilità e associarlo alla variabile i
    
    var str = document.getElementsByClassName("abi")[j].id;
    if (str.indexOf(j) == -1) {
        var i = j;
      $("<form />", { class: "abilita", onsubmit: "return false;" })
        .append($("<input />", { placeholder: "Abilita", class:"abi" , id: "abilita" + i }))
        .append(
          $("<button />", {
            id: "submitBtn",
            onClick: "submitClick('abilita" + i + "')"
          })
        )
        .appendTo("#listaAbilita");
      $("<form />", { class: "abilitaBonus", onsubmit: "return false;" })
        .append($("<input />", { placeholder: "0", class:"abiBonus" , id: "abilitaBonus" + i }))
        .append(
          $("<button />", {
            id: "submitBtn",
            onClick: "submitClick('abilita" + i + "')"
          })
        )
        .appendTo("#listaAbilita");
        
        break;
      /* var abilita2 = document.getElementById("abilita" + 2);
      var dbRefAbi2 = firebase.database().ref().child(path + "abilita" + 2);
      dbRefAbi2.on("value", snap => (abilita2.value = snap.val())); */
    }
  }

  /* var form = document.createElement("form");
  form.className = "abilita";
  var t = document.createElement(
    "input"
  ); 
  var s = document.createElement("button");
  s.id = "submitBtn";
  form.appendChild(t);
  form.appendChild(s);
  document.getElementById("listaAbilita").appendChild(form);
  var form2 = document.createElement("form");
  form2.className = "abilitaBonus";
  var t2 = document.createElement(
    "input"
  ); 
  var s2 = document.createElement("button");
  s2.id = "submitBtn";
  form2.appendChild(t2);
  form2.appendChild(s2);
  document.getElementById("listaAbilita").appendChild(form2);*/
}
