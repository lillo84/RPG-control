var path = document.getElementById("giocatore").dataset.user;

//lettura
function caricaElemento(k) {
  var carico = document.getElementById(k);
  var dbRef = firebase.database().ref().child(path + k);

  dbRef.on("value", snap => (carico.value = snap.val()));
}

caricaElemento("giocatore");
caricaElemento("forza");
caricaElemento("destrezza");
caricaElemento("costituzione");
caricaElemento("intelligenza");
caricaElemento("saggezza");
caricaElemento("carisma");
caricaElemento("iniziativa");
caricaElemento("Bonusinit");
caricaElemento("puntiFerita");
caricaElemento("puntiFeritaTot");
caricaElemento("BAB");
caricaElemento("BMC");
caricaElemento("AC");
caricaElemento("DMC");


//scrittura
function submitClick(v) {
  var mainText = document.getElementById(v);
  var firebaseRef = firebase.database().ref();
  var messageText = mainText.value;

  firebaseRef.child(path + v).set(messageText);
}

function submitFocus(v) {
  $("#" + v).focusout(function() {
    submitClick(v);
  });
}

submitFocus("giocatore");
submitFocus("forza");
submitFocus("destrezza");
submitFocus("costituzione");
submitFocus("intelligenza");
submitFocus("saggezza");
submitFocus("carisma");
submitFocus("iniziativa");
submitFocus("Bonusinit");
submitFocus("puntiFerita");
submitFocus("puntiFeritaTot");
submitFocus("BAB");
submitFocus("BMC");
submitFocus("AC");
submitFocus("DMC");

//abilità



//lettura delle Liste
function caricaLista(i, k, u) {
  firebase
    .database()
    .ref()
    .child(path + k + "/" + k + i)
    .once("value", function(snapshot) {
      var snapAbi = snapshot.val();
      if (snapAbi) {
        $("<form />", { class: k, onsubmit: "return false;" })
        .append(
          $("<input />", {
            placeholder: k,
            class: u,
            id: k + i
          })
        )
        .append(
          $("<button />", {
            id: "submitBtn",
            onClick: "submitListClick('" + k + i + "' , '"+ k +"')"
          })
        )
        .appendTo("#lista" + k);

      $("<form />", { class: k + "Bonus", onsubmit: "return false;" })
        .append(
          $("<input />", {
            placeholder: "0",
            class: u + "Bonus",
            id: k + "Bonus" + i
          })
        )
        .append(
          $("<button />", {
            id: "submitBtn",
            onClick: "submitListClick('" + k + i + "' , '"+ k +"')"
          })
        )
        .appendTo("#lista" + k);

        var abilita = document.getElementById(k + i);
        var dbRefAbi = firebase.database().ref().child(path + k + "/" + k + i);
        dbRefAbi.on("value", snap => (abilita.value = snap.val()));
      }
    });
}
caricaLista(0, "abilita", "abi");
caricaLista(1, "abilita", "abi");
caricaLista(2, "abilita", "abi");
caricaLista(3, "abilita", "abi");
caricaLista(4, "abilita", "abi");
caricaLista(5, "abilita", "abi");
caricaLista(6, "abilita", "abi");
caricaLista(7, "abilita", "abi");
caricaLista(8, "abilita", "abi");
caricaLista(9, "abilita", "abi");
caricaLista(10, "abilita", "abi");

caricaLista(0, "inventario", "inv");
caricaLista(1, "inventario", "inv");
caricaLista(2, "inventario", "inv");
caricaLista(3, "inventario", "inv");
caricaLista(4, "inventario", "inv");
caricaLista(5, "inventario", "inv");
caricaLista(6, "inventario", "inv");
caricaLista(7, "inventario", "inv");
caricaLista(8, "inventario", "inv");
caricaLista(9, "inventario", "inv");
caricaLista(10, "inventario", "inv");

//Genera celle Lista
function listaNodi(i) {
  var x = [];
  x = $(i)
    .map(function() {
      return this.id;
    })
    .get();

  x.sort();
  var z = x.length;

  for (var i = 0; i < 10 - z; i++) {
    x.push(" ");
  }

  return x;
}

function genCelle(u, k) {
  var ability = listaNodi("." + u + "");
  var i = ability.length;

  for (var j = 0; j <= 10; j++) {
    if (ability[j].indexOf(j) == -1) {
      i = j;

      $("<form />", { class: k, onsubmit: "return false;" })
        .append(
          $("<input />", {
            placeholder: k,
            class: u,
            id: k + i
          })
        )
        .append(
          $("<button />", {
            id: "submitBtn",
            onClick: "submitListClick('" + k + i + "' , '"+ k +"')"
          })
        )
        .appendTo("#lista" + k);

      $("<form />", { class: k + "Bonus", onsubmit: "return false;" })
        .append(
          $("<input />", {
            placeholder: "0",
            class: u + "Bonus",
            id: k + "Bonus" + i
          })
        )
        .append(
          $("<button />", {
            id: "submitBtn",
            onClick: "submitListClick('" + k + i + "' , '"+ k +"')"
          })
        )
        .appendTo("#lista" + k);

      break;
    }
  }
}
//scrittura liste
function submitListClick(g, v) {
  var mainText = document.getElementById(g);
  var firebaseRef = firebase.database().ref();
  var messageText = mainText.value;

  firebaseRef.child(path + v+"/"+g).set(messageText);
}

//lettura
function caricaElementoLista(g, k) {
  var carico = document.getElementById(k);
  var dbRef = firebase.database().ref().child(path + g + "/" + k);

  dbRef.on("value", snap => (carico.value = snap.val()));
}

caricaElementoLista("livello" ,"livello0");
caricaElementoLista("livello" ,"livello1");
caricaElementoLista("livello" ,"livello2");
caricaElementoLista("livello" ,"livello3");
caricaElementoLista("livello" ,"livello4");
caricaElementoLista("livello" ,"livello5");
caricaElementoLista("livello" ,"livello6");
caricaElementoLista("livello" ,"livello7");
caricaElementoLista("livello" ,"livello8");
caricaElementoLista("livello" ,"livello9");

function submitFocusLista(g , v) {
  $("#" + v).focusout(function() {
    submitListClick(v, g);
  });
}

submitFocusLista("livello" ,"livello0");
submitFocusLista("livello" ,"livello1");
submitFocusLista("livello" ,"livello2");
submitFocusLista("livello" ,"livello3");
submitFocusLista("livello" ,"livello4");
submitFocusLista("livello" ,"livello5");
submitFocusLista("livello" ,"livello6");
submitFocusLista("livello" ,"livello7");
submitFocusLista("livello" ,"livello8");
submitFocusLista("livello" ,"livello9");