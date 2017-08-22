var path = document.getElementById('user').dataset.user

  
//lettura
var giocatore = document.getElementById('giocatore');
var dbRef = firebase.database().ref().child(path+'giocatore');

dbRef.on('value', snap => giocatore.innerText = snap.val() );

//scrittura
var mainText = document.getElementById('mainText');
var submitBtn = document.getElementById('submitBtn');


function submitClick() {


    var firebaseRef = firebase.database().ref();
    var messageText = mainText.value;

    firebaseRef.child(path+'giocatore').set(messageText);
    

}