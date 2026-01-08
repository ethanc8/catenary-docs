# Backend Schnellstartanleitung
Blitzlektion für den Einstieg in das Catenary Backend

## Rust
Laden Sie die Unterstützung für unsere Backend-Sprache, [Rust](https://www.rust-lang.org/tools/install), herunter. Stellen Sie sicher, dass Sie die richtige Version für Ihre Computerarchitektur erhalten!

1. Öffnen Sie Ihr Terminal und führen Sie 'rustup update' aus, um sicherzustellen, dass alles funktioniert und auf dem neuesten Stand ist!

2. Wenn Sie VSCode verwenden, empfehlen wir dringend die Installation des [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer) Pakets; es bietet viel Unterstützung bei Syntax und Funktionen.

3. Wenn Sie Rust nicht kennen, ist jetzt Ihre Chance, es zu lernen! Hier ist die [Dokumentation](https://doc.rust-lang.org/book/), offizielle [Codebeispiele](https://doc.rust-lang.org/rust-by-example/) und ein [Grundkurs](https://github.com/rust-lang/rustlings/), falls Sie interessiert sind. Wenn Sie Fragen haben, denken Sie daran, dass unsere Entwickler für Hilfe und Unterstützung in unserer Discord-Community zur Verfügung stehen!

4. Stellen Sie sicher, dass Sie mit allen Details zu GitHub und dem Workflow auf dem Laufenden sind.

## Auswahl Ihres/Ihrer Projekte(s)

Jetzt kommt eine große Entscheidung: Mit welchem Teil des Backends möchten Sie beginnen? Es gibt viele Komponenten, an denen wir arbeiten, und sie alle spielen unterschiedliche Rollen im Betrieb von Catenary Maps. Hier ist ein kurzer Überblick über die Hauptkomponenten:

### Datenbank und Ingestion

Dies ist der Prozess, durch den Catenary unsere Daten akquiriert, bereinigt, sortiert und dann anzeigt. An einem normalen Tag sind das Dutzende von Terabyte für Hunderte von Verkehrsbetrieben auf der ganzen Welt. Von *Ciudad de México* (Mexiko-Stadt, Mexiko) bis *横浜市* (Yokohama, Japan), wir haben alles für Sie!

Grundsätzlich sieht der Prozess ungefähr so aus:

Von [Transitland](https://www.transit.land/) laden wir die Verkehrsinformationen jedes Verkehrsbetriebs über eine Reihe von API-Verbindungen in unser System herunter. Wir lesen all diese Daten, durchsuchen sie und ordnen jeden Feed seinem Betreiber zu. Dann ingestieren (Übersetzung: Daten extrahieren und dann in Batches verschieben) wir die Echtzeitinformationen und senden sie dynamisch an unser Frontend.

Das sind viele Informationen, die unser System verarbeiten muss, daher müssen wir Algorithmen verwenden, um den Prozess zu optimieren. Darüber hinaus haben einige angeforderte Verkehrsbetriebe ihre Daten nicht nach dem Industriestandard (**GTFS**, General Transit Feed Specification) formatiert, was bedeutet, dass wir sie bereinigen müssen, bevor wir sie in unser System werfen können!


### Routing-Engine

> Hey Catenary, wann werdet ihr ein Routenplanungs-Ding haben?

> Hey Catenary, es wäre so cool, wenn wir Fahrten planen könnten!

> Hey Catenary, wann können wir eine Reise auf eurer Website planen?

Wir arbeiten daran, wir schwören (>_<) !!!

Ehrlich gesagt, es ist ziemlich schwierig. Es gibt viele bewegliche Teile – buchstäblich, die Busse und Züge fahren nach einem Fahrplan und man muss wissen, wann man in welches Fahrzeug einsteigen kann, Wartezeiten und Umsteigebahnhöfe berücksichtigen, zusätzlich zu regulären Routing-Ideen wie kürzesten Wegen und Reisegeschwindigkeiten. Unser Algorithmus-Set basiert auf diesem [Papier](https://ad.informatik.uni-freiburg.de/files/transferpatterns.pdf) von Dr. Hannah Bast von der Universität Freiburg, Deutschland. Leider wird kein Code zur Verfügung gestellt – aber es gibt eine Vorlesungsreihe, die sie basierend auf diesem Prozess aufgezeichnet hat! Sie finden sie auf dieser [Website](https://ad-wiki.informatik.uni-freiburg.de/teaching/EfficientRoutePlanningSS2012). Wir empfehlen sie sehr (weil wir sonst nicht so weit gekommen wären)!


### Generierung von Routen
Dies ist ein geplantes Projekt, das die Routenanzeigen für viele verschiedene Verkehrsbetriebe korrigieren wird – diejenigen, bei denen die Karte anstatt korrekter Linien nur eine gerade Linie zwischen zwei Stationen zeichnet, was zu dieser Art von Chaos führt:

(Bild anzeigen)

Das liegt daran, dass uns der Verkehrsbetrieb nicht die tatsächliche "Form" der Route gegeben hat: eine Liste von Koordinatenpunkten, die vorschreiben, wo das Fahrzeug jede Sekunde oder so durchfährt. Unsere Engine kann derzeit nicht vorhersagen, wo genau diese Route verläuft, also extrapoliert sie, indem sie einfach eine hässliche, chaotische Linie quer über die Karte zeichnet... und niemand will das!

Es gibt auch andere Probleme – manchmal haben Verkehrsbetriebe denselben Bahnhof unter zwei ähnlichen, aber unterschiedlichen Namen (zum Beispiel "Union Station" gegenüber "LA Union Station"). Andermal geben sie uns vielleicht die Route eines Zuges, aber sie stimmt nicht mit der Position der tatsächlichen Gleise überein.

Daher planen wir, Map-Matching- und Routengenerierungsalgorithmen zu integrieren, um diese Anzeigen zu korrigieren, wenn uns der Verkehrsbetrieb nicht die korrekte Routenform gibt. Dies basiert auf der Arbeit von Dr. Patrick Brosi (von der Universität Freiburg, Deutschland) in diesem [Papier](https://drive.google.com/file/d/1DZFIB4Inwl_sK8B1oPQyl6cP7X2GP2Qs/view). Keine Sorge, wir wissen auch nicht, was die Hälfte davon bedeutet. Wir schaffen das... zusammen!


### Verteilte Systeme
Dank eines erstaunlichen Spenders von der Rust Conference 2024 hat Catenary jetzt einen Server! Einen echten Server!

Unsere Nutzerbasis wächst weiter (was ausgezeichnet ist!), aber das bedeutet, dass auch unsere Rechenleistung wachsen muss. Aber wie machen wir das mit den begrenzten Mitteln, die wir haben? Die Antwort auf diese Frage ist der Aufbau eines verteilten Systems: Wir verteilen unsere Rechenleistung auf mehrere Maschinen auf der ganzen Welt und weisen jeder von ihnen an, an verschiedenen Aufgaben oder verschiedenen Komponenten von Aufgaben zu arbeiten. Wir brauchen sowohl zusätzliche Maschinen, um bei diesem Prozess zu helfen, als auch Leute, die helfen, die Codebasis zu verwalten, die diese Aufgabenorganisation bestimmt!
