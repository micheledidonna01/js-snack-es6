# Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.

## soluzione

- creo un array di oggetti contenenti nome della bicicletta e il suo peso
- invoco la funzione bici più leggera
- creo una variabile risultato primo peso della bici come valore
- inizializzo la funzione
- ciclo for con lunghezza dell'array
    - se il valore del peso attuale è minore della variabile risultato
        - la variabile risultato è uguale al valore attuale
- stampo la varaibile risultato

---
---

# Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

## soluzione
- creo un array di oggetti contenenti nome della squadra punti fatti e falli subiti con valore 0
- creo un array vuoto 
- ciclo for per ogni oggetto presente nell'array
    - genero un valore random da 0 a 50
    - lo inserisco nei punti fatti 
    - genero un valore random da 0 a 20
    - lo inserisco nei falli subiti
- creo un nuovo array
- creo 2 oggetti
- pusho gli oggetti nel nuovo array
- ciclo for per ogni oggetto presente nel nuovo array
    - inserisco la chiave nome con valore 
    - inserisco la chiave falli subiti con valore 
- stampo nuovo array

    

