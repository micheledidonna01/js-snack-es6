# Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.

## soluzione

- creo un array di oggetti contenenti nome della bicicletta e il suo peso
- invoco la funzione bici più leggera
- inizializzo la funzione
- se la prima bici ha un peso minore a quello della bici 2 , la 3 e la 4
    - stampo un messaggio dove la prima bici è la più leggera
- altrimenti se la seconda bici ha un peso minore a quello della bici 1 , la 3 e la 4
    - stampo un messaggio dove la seconda bici è la più leggera
- altrimenti se la terza bici ha un peso minore a quello della bici 1 , la 2 e la 4
    - stampo un messaggio dove la prima bici è la più leggera
- altrimenti
    - stampo un messaggio dove la quarta bici è la più leggera

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

    - pusho nell'array vuoto nome della squadra 
    - pusho nell'array vuoto falli subiti

- stampo array di oggetti con nome punti e falli
- stampo l'array che era vuoto con nome e falli 
    

