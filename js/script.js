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
    value:null

  },
  methods: {
    addValue: function () {
      this.toDoList.push(this.value)
    },
    // removeList: function () {
    //   this.toDoList.remove()
    // }
  }

})
