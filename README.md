#  Perzeptron – AND Logik

##  Projektbeschreibung

Dieses Projekt ist eine einfache Implementation von einem Perzeptron in JavaScript.  
Das Perzeptron lernt die AND-Logik mit zwei Eingaben (x1 und x2).

Nach dem Training kann das Modell die richtige Ausgabe für die AND-Funktion berechnen.

---

##  Wie funktioniert das Modell?

Das Perzeptron benutzt diese mathematische Formel:

z = w1 · x1 + w2 · x2 + b

Danach wird eine Schritt-Funktion benutzt:

- Wenn z ≥ 0 → Ausgabe = 1  
- Wenn z < 0 → Ausgabe = 0  

Das Modell lernt durch Wiederholung (Training über mehrere Durchläufe).

Die Gewichte und der Bias werden mit einem Fehler-Wert angepasst.

---

##  Technologien

- JavaScript (ES6)
- Konsole (console.log)

---

##  Trainingsdaten (AND-Logik)

| x1 | x2 | Ausgabe |
|----|----|----------|
| 0  | 0  | 0 |
| 0  | 1  | 0 |
| 1  | 0  | 0 |
| 1  | 1  | 1 |


