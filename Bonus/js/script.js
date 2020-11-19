// BONUS AFFRONTATI
// -1- casi limite di inserimento dati da utente: se valore è nullo o stringa vuota si verifica un errore
// -2- se l'utente inserisce più di 50 caratteri o inserisce una parola già inserita si verifica une errore
// -3- Bonus 1- inserita la casistica per inviare i dati direttamente con il tasto enter anzichè cliccare sul bottone di invio
//-4- IN LAVORAZIONE bonus 2- click con icona "check" alternativa all'icona "x" di elimina e barra semplicemente la parola nella lista anzichè cancellarla.
//-5- IN LAVORAZIONE bonus 3- quando l'utente clicca sull'icona elimina farà uscire un box di conferma se magari ho cliccato per sbaglio con dei buttons dove se dirò di si la confermerà la cancellazione altrimenti tornerà al flusso di partenza.
//-6- bonus 4 aggiunto elemento se la lista è vuota comparirà "Oggi sei libero"

var app = new Vue({
  el: "#app",
  data: {
    toDoList: [
      // "FARE COLAZIONE",
      // "ALLENARSI",
    ],

    isGreen:false,
    isActive:false,
    messaggio:'La tua lista è vuota, oggi sei libero!',
    confirmBox:false,
    img:"img/todowhite.png",
    value:null // valore di quello che inserisce l'utente
  },

  methods: { // funzione inserimento con tasto ENTER

    enterValue: function () {

      this.value = this.value.toUpperCase();

      if ((this.value == null) || (this.value == 0 )) {
        alert("ERRORE: Devi inserire qualcosa");
      }else if (this.value.length > 50) {
        alert("ERRORE: Non puoi inserire più di 50 caratteri");
        this.value = '';
      }else if (this.toDoList.includes(this.value)) {
        alert("ERRORE: Hai già inserito questo appunto");
        this.value = '';
      }else {
        this.toDoList.push(this.value);
        this.value = '';
      }
    },

    removeList: function (index) {
      this.confirmBox = true;
      Vue.delete(this.toDoList,index)
    },
    yes:function () {
      // this.toDoList.splice(index,1);
      this.confirmBox = false;
    },
    no:function () {
      this.confirmBox = false;
    },
    signedList: function (index) {

      this.isGreen = index
      this.isActive = index

    }
  }
})
