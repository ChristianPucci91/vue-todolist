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
    img:"img/todowhite.png",
    value:null // valore di quello che inserisce l'utente

  },
  methods: {
    addValue: function () {
      this.toDoList.push(this.value);
      this.value = '';
      console.log(this.value);
    },
    removeList: function (index) {
      this.toDoList.splice(index,1)
      console.log(this.toDoList[index]);
    }
  }

})
