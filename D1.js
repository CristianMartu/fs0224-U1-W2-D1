/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* I datatype sono dei dati salvati in memoria che possono essere dinamici o statici (variabili o costanti).
   JavaScript non ha una forte tipizzazione, cioè non è necessario dichiarare il tipo di variabile, è sufficente dargli
   un dato (è buona prassi modificare il dato con un altro dello stesso tipo se necessario).
   I principali dataType in javaScript sono:
   Stringhe -->  "  "
   Numeri   -->  1234
   Boleani  -->  true (false)
   undefined (dato senza definizione) --> let prova
   null (dato con valore nullo)       --> let prova = null 
*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myName = 'Cristian'
console.log('Es2 :')
console.log('      myName :', myName)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let sum = 12 + 20
console.log('Es3 :', sum)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = null
x += 12
console.log('Es4 :', x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('Es5 :')
myName = 'Martucci'
console.log('      myName :', myName)
const myNameConst = 'Cristian'
console.log('      myNameConst :', myNameConst)
//myNameConst = 'Martucci'
console.log('      myNameConst(Error) :', myNameConst, '(no change)')

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
x = 4 - x
console.log('Es6 :', x)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = 'john'
let name2 = 'John'
console.log('Es7 :')
console.log(
  '     uguaglianza:',
  name1 === name2 ? 'nomi uguali' : 'nomi diversi'
)
/*console.log(
  '     disuguaglianza:',
  name1 !== name2 ? 'nomi diversi' : 'nomi uguali'
)*/
console.log(
  '     se i dati sono entrambi minuscoli:',
  name1 === name2.toLowerCase() ? 'nomi uguali' : 'nomi diversi'
)
