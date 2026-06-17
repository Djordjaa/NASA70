SUPSI 2026  
Corso d’interaction design, CV429.01  
Docenti: A. Gysin, G. Profeta

Progetto 2: Un piccolo passo per un uomo, un grande balzo per l'umanità

# NASA70 Archive

**Autore:** Djordja Krsteva  
[NASA70 Archive](https://djordjaa.github.io/NASA70/)

## Introduzione e tema

**NASA70 Archive** ospita i 13 progetti interattivi realizzati da noi studenti per il **70° anniversario della NASA (1958–2028)**. Ogni progetto tratta temi diversi come missioni storiche, telescopi, sistema solare, esopianeti, tute spaziali.

Questo sito è pensato e testato come archivio espandibile, ogni visualizzazione è compatibile con almeno 100 progetti.

In termini di scelte visive:

- **Colori:** La palette colori include **nero** (#0a0a0f) per lo sfondo, **bianco** (#f6f6f6) per la maggior parte dei testi e **blu** (#0032a0) e **rosso NASA** (#e4002b) per il logo. Il rosso NASA viene utilizzato anche come accento in una **versione modificata** (#f31b43) in modo da rispettare i valori di contrasto WCAG con lo sfondo. Ho evitato il bianco e nero puro per evitare un contrasto troppo forte che potrebbe affaticare la vista.
- **Tipografia:** Viene utilizzato **Inter** per ogni testo presente nel sito, nei pesi Regular, Medium, SemiBold e Bold. È uno dei font usati oggi dalla NASA per il proprio sito web. È un carattere tipografico semplice e leggibile anche a dimensioni piccole.
- **Logo:** Essendo un festeggiamento per i 70 anni, ho voluto rappresentarli tramite l'unione dei due loghi storici della NASA: il **Worm** e il **Meatball**. Nello specifico la parte NASA utilizza il logo originale Worm, mentre il 70 unisce i due stili, con lo 0 che rappresenta il Meatball.

## Riferimenti progettuali

Come base concettuale ho preso spunto dalla generous interface di Mitchell Whitelaw e dai vari NASA Eyes. Per la Constellation ho preso ispirazione dalle mappe stellari e dai grafi di rete, riadattandoli nel contesto per maggior leggibilità e pertinenza con i progetti.

<p align="left">
  <img src="https://github.com/user-attachments/assets/caeb3103-c49f-4f4e-9288-e9fb2c5d97f7" height="320">
  &nbsp;&nbsp;
  <img src="https://github.com/user-attachments/assets/ed1708e4-1db9-420d-a77e-056c923edaaf" height="320">
  <br>
  <sub><em>A sinistra: grafo di rete (<a href="https://commons.wikimedia.org/wiki/File:Network_1.png">Jorge11711, CC0</a>). A destra: Mappa Stellare di Suzhou, 1247, di Wang Zhiyuan e Huang Shang (<a href="https://commons.wikimedia.org/wiki/File:Suzhou_star_cartography.jpg">Pubblico Dominio</a>).</em></sub>
</p>

## Design dell’interfaccia e modalità di interazione

Il sito è strutturato su una pagina unica che contiene due `<section>`. La prima sezione è riservata all'hero section, che contiene il logo NASA70, una frase introduttiva che spiega cosa tratta il sito e il rimando al sito ufficiale della [NASA](https://nasa.gov).

- **Hover logo:** lo 0 nel 70 crea nuove stelle che si espandono intorno ad esso. L'animazione vuole rappresentare gli anni e il tempo attraverso le stelle e il loro numero e riprendere la dinamica della Constellation view del progetto (spiegata sotto).

https://github.com/user-attachments/assets/249b9eff-4028-4aae-8fb3-424a8bf4ea17

Scendendo, si arriva alla seconda sezione, che contiene le 3 view separate da un menu posto nella navbar:

1. **Constellation**: La visualizzazione di default, i progetti sono pallini distribuiti in uno spazio bidimensionale. I tag sono ancorati a posizioni fisse su un anello esterno, in ordine alfabetico. Ogni progetto si posiziona invece al centro dei tag che condivide: un progetto con i tag moon, apollo e archive finisce geometricamente in mezzo a quei tre punti. Passando sopra un punto si possono vedere i tag assegnati e passando su un tag vengono mostrati i progetti che condividono quel tag stesso. I titoli dei progetti e dei tag vengono mostrati solo se si zoomma maggiormente o se si passa su uno dei tag, questo per rendere la navigazione più interattiva. È possibile zoommare con lo scroll, spostarsi nello spazio tenendo premuto o trascinando, filtrare tramite la barra laterale con i filtri o direttamente cliccando sui tag lungo l'anello o nel pannello dettaglio. Passando il mouse su un progetto appare un riquadro con titolo, autore, tag.

<img width="1728" height="961" alt="constellation_view" src="https://github.com/user-attachments/assets/812b2f57-709d-4e97-9b4a-51a498db7f66" />

&nbsp;

2. **Grid**: Nella Grid i progetti sono card con immagine, titolo, autore, data, descrizione e tag. Due menu a tendina permettono di ordinare la lista per titolo, autore, data o numero di tag, e di filtrare per tag.

<img width="1728" height="961" alt="grid_view" src="https://github.com/user-attachments/assets/836a63df-f24f-4056-b55d-e060fb26a586" />  

&nbsp;

3. **List**: I progetti sono in formato a lista, con colonne per thumbnail, titolo, autore, tag, data e link. Ogni colonna (eccetto thumbnail e link) è ordinabile cliccando sull'intestazione, e un menu a tendina permette di filtrare per tag.

<img width="1728" height="961" alt="list_view" src="https://github.com/user-attachments/assets/0b2335d8-aa7e-456f-b6eb-4fb5253367f3" />

&nbsp;

In tutte le view c'è un contatore che mostra quanti progetti sono visibili sul totale. Cliccando su un progetto, da qualunque view, si apre un pannello laterale da destra con immagine, autore, data, descrizione completa, tag e link al progetto originale.<br>

https://github.com/user-attachments/assets/91d827d8-b6c3-4215-b3bc-e06f2e2eff04


## Tecnologia usata

Il progetto è sviluppato in **HTML, CSS e JavaScript vanilla**, senza l’uso di framework.

I dati vengono inseriti grazie ad un'API esterna su Github in formato JSON, che è stata riempita con l'inserimento dei dati del progetto 1 da parte di ognuno di noi. Sono stati comunque inseriti dei fallback nel caso ci dovessero essere problemi con l'API. I tag vengono uniformati in minuscolo, senza spazi superflui e con i trattini convertiti in spazio, così da avere tutto coerente.

La posizione dei nodi nella Constellation viene dalla media delle coordinate dei tag che ogni progetto condivide:

```js
const projPos = new Map();
for (const p of state.raw) {
  if (!p._tags.length) continue;
  let sx = 0,
    sy = 0,
    n = 0;
  for (const t of p._tags) {
    const pp = state._tagPos.get(t);
    if (!pp) continue;
    sx += pp.x;
    sy += pp.y;
    n++;
  }
  if (!n) continue;
  projPos.set(p._id, { x: sx / n, y: sy / n });
}
```

Per verificare che la vista restasse leggibile anche con un archivio più grande, la Constellation è stata testata con almeno 100 progetti. Da quel test ho deciso che i titoli dei progetti compaiono solo a partire da un certo livello di zoom e ogni scheda nella Grid mostra al massimo 12 tag con un indicatore "+N" per quelli in eccesso.

L'animazione del logo usa un seed fisso per generare le posizioni delle stelle, quindi il risultato resta lo stesso a ogni caricamento della pagina.

Filtri, tag cliccabili e righe della tabella sono navigabili da tastiera, con uno stato di focus visibile su ogni elemento interattivo.

## Target e contesto d’uso

Il target primario è un pubblico generalista, persone in ambito tech e creativo, curiosi di spazio o interessati al lavoro degli studenti. Il sito si presta anche per mostrare i progetti in presentazioni o esposizioni.
