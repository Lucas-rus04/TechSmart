# Specifiche del progetto TechSmart

## Obiettivo dell'applicazione
TechSmart è un'applicazione web per la visualizzazione e l'acquisto di prodotti tecnologici. 
L'applicazione è rivolta a qualunque utente che voglia fare un acquisto di articoli tecnologici come computer, smartphone, monitor e altri accessori.
L'obiettivo è realizzare un piccolo e-commerce attraverso il quale l'utente possa consultare un catalogo di prodotti, visualizzarne le informazioni principali e aggiungere i prodotti al carrello.

## Azioni dell'utente
L'utente può:

- visualizzare il catalogo dei prodotti disponibili;
- visualizzare le diverse categorie di prodotti;
- cercare un prodotto tramite il suo nome;
- filtrare i prodotti per categoria;
- selezionare un prodotto per visualizzarne i dettagli;
- aggiungere un prodotto al carrello;
- rimuovere un prodotto dal carrello;
- visualizzare il totale degli articoli presenti nel carrello.

## Struttura del frontend
L'interfaccia dell'applicazione sarà organizzata nelle seguenti sezioni:

### Catalogo
La pagina principale mostrerà il catalogo dei prodotti disponibili.
L'utente potrà utilizzare la ricerca e i filtri per trovare
più facilmente un prodotto.

### Dettaglio prodotto
La pagina o sezione di dettaglio mostrerà le informazioni principali
del prodotto selezionato e permetterà di aggiungerlo al carrello.

### Carrello
Il carrello mostrerà i prodotti selezionati dall'utente, le relative
quantità, i prezzi e il totale.

## Mockup
┌─────────────────────────────────────────────────────────────┐
│ TECHSMART        [ Barra ricerca]            Home  Carrello │
├─────────────────────────────────────────────────────────────┤
│                      CATEGORIE                              │
│                                                             │
│ [ PC ] [ Smartphone ] [ Tablet ] [ Monitor ] [ Accessori ]  │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                   CATALOGO PRODOTTI                         │
│                                                             │
│   [ prodotto ]  [ prodotto ]  [ prodotto ]  [ prodotto ]    │
│                                                             │
│   [ prodotto ]  [ prodotto ]  [ prodotto ]  [ prodotto ]    │
│                                                             │
└─────────────────────────────────────────────────────────────┘

## Scenari di test

### Test 1 - Visualizzazione catalogo

Azione:
L'utente apre la pagina principale.

Risultato atteso:
Viene visualizzato l'elenco dei prodotti disponibili.

### Test 2 - Ricerca prodotto

Azione:
L'utente inserisce il nome di un prodotto nella barra di ricerca.

Risultato atteso:
Vengono mostrati i prodotti corrispondenti alla ricerca.

### Test 3 - Prodotto non trovato

Azione:
L'utente effettua una ricerca che non corrisponde ad alcun prodotto.

Risultato atteso:
L'interfaccia mostra un messaggio che indica che non sono
stati trovati prodotti.

### Test 4 - Aggiunta al carrello

Azione:
L'utente seleziona un prodotto e lo aggiunge al carrello.

Risultato atteso:
Il prodotto viene aggiunto al carrello e il totale viene aggiornato.

### Test 5 - Errore di rete

Azione:
Il frontend non riesce a raggiungere il backend.

Risultato atteso:
L'interfaccia mostra un messaggio di errore comprensibile all'utente.