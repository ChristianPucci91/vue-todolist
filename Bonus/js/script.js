// /Features principali:
// un input permette all’utente di scrivere una “cosa da fare”;
// un bottone permette di aggiungere quella cosa alla lista di cose da fare in pagina, come promemoria;
// una volta che l’utente ha ipoteticamente svolto l’attività, grazie ad un bottone (X) può eliminare quella determinata cosa dalla lista.

var app = new Vue({
  el: "#app",
  data: {
    toDoList: [
      "Fare colazione",
      "Allenarsi",
    ],
    deleteBox:"hide",
    img:"img/todowhite.png",
    value:null // valore di quello che inserisce l'utente
  },

  methods: { // funzione inserimento con tasto ENTER
    enterValue: function () {

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
      if (this.deleteBox = "hide") {
        this.deleteBox = "show"
      }
      this.toDoList.splice(index,1)
    },

  }

})
