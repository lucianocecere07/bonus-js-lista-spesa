/*Data una lista della spesa già compilata nel vostro codice, stampare in console gli elementi della lista individualmente, prima con un ciclo for, poi con un ciclo while.
Quando le stampe in console sono corrette, stampare gli elementi in un elenco puntato in HTML, utilizzando uno dei due cicli scritti al punto precedente.*/

let arraySpesa = ["latte", "uova", "mele", "pasta", "arance"];

/*
let i = 0;
while (i < arraySpesa.length) {
    console.log("elemento da comprare: " + arraySpesa[i]);
    i++;
}
*/

for (i = 0; i < arraySpesa.length; i++) {
    console.log("elemento da comprare: " + arraySpesa[i]);
    document.getElementById("lista").innerHTML += "<li>" + arraySpesa[i] + "<button type='button'>Rimuovi</button> </li>";
}

//Tasto per aggiungere un nuovo prodotto
let aggiungi = document.getElementById("aggiungi");

aggiungi.addEventListener("click", function(){
    let prodotto = document.getElementById("input-prodotto").value;
    arraySpesa.push(prodotto);
    console.log("elemento da comprare: " + arraySpesa[i]);
    document.getElementById("lista").innerHTML += "<li>" + arraySpesa[i] + "<button type='button'>Rimuovi</button> </li>";
});



/*
//tasto per eliminare un prodotto
let elimina = document.getElementById("elimina");

elimina.addEventListener("click", function(){
    let prodotto = document.getElementById("input-prodotto").value;
    arraySpesa.push(prodotto);
    console.log("elemento da comprare: " + arraySpesa[i]);
    document.getElementById("lista").innerHTML += "<li>" + arraySpesa[i] + "<button id='elimina' type='button'>Rimuovi</button> </li>";
});
*/