# General Transit Feed Specification (GTFS)

**General Transit Feed Specification**, oder kurz GTFS (*bitte* kürzen Sie es einfach ab, wann immer Sie Code-Kommentare oder ähnliches machen), ist der Industriestandard für die Formatierung von Verkehrsdaten. Wenn Sie mehr über die Geschichte des Formats erfahren möchten, werfen Sie einen Blick auf deren [offizielle Über-Seite](https://gtfs.org/about/), aber dieses Wissen ist nicht erforderlich!

GTFS gibt es in zwei "Geschmacksrichtungen": **Realtime** und **Schedule**. Lassen Sie uns ein wenig über beide sprechen. Weitere Informationen hierzu finden Sie auf der offiziellen GTFS [Dokumentationsseite](https://gtfs.org/documentation/overview/); dies ist nur eine einfache Zusammenfassung!

## Realtime

Der Realtime-Feed sind die "Live"-Informationen, die öffentliche Verkehrsbetriebe herausgeben. Dies ist der Großteil der Informationen, die wir durch unsere Datenbank verarbeiten müssen, da sie ständig aktualisiert werden. Wenn zum Beispiel eine Straße aufgrund eines plötzlichen Autounfalls gesperrt ist, könnte der Bus einen Umweg nehmen, was vieles ändert. Es kann Folgendes geben:

- **Fahrt-Aktualisierungen (Trip updates)**, wie Routenänderungen, Verspätungen oder Fahrtausfälle. Wir verwenden diese Daten, um die GTFS-Fahrplandaten mit neuen Verkehrsinformationen anzureichern (Übersetzung: dynamisch zu aktualisieren), damit unsere Benutzer wissen, ob ihr Zielfahrzeug verspätet ist oder fehlt.

- **Service-Warnungen (Service alerts)** sind Nachrichten an Menschen über den Betrieb eines Verkehrsbetriebs, ob sie Haltestellen/Bahnhöfe, Routen oder das gesamte Verkehrsnetz betreffen.

- **Fahrzeugpositionen (Vehicle positions)** verwenden wir, um Ihnen genau zu zeigen, wo sich ein Fahrzeug zu einem bestimmten Zeitpunkt befindet. Hinweis: Einige sehr zuverlässige Verkehrssysteme (oft automatisierte U-Bahnen und dergleichen) schließen diese Informationen aus, mit der Begründung, dass es dem Fahrgast egal ist, wo sich ein Fahrzeug befindet, da es irgendwo zwischen zwei Stationen sein muss, um pünktlich an der nächsten anzukommen. Fair genug, sagen wir. Wir haben beschlossen, diese Verkehrsbetriebe in Ruhe zu lassen, aber wenn jemand etwas dafür bauen möchte, nur zu :D

## Schedule

Dies sind die "statischen" Daten für ein Verkehrsnetz – Dinge, die sich nicht von Sekunde zu Sekunde ändern. Anstatt jede Sekunde neue Versionen dieser Daten herauszugeben, aktualisieren Verkehrsbetriebe ihre Fahrplandateien möglicherweise zwischen alle 24 Stunden und alle 24 Monate. Die statischen Daten werden in einem maschinenfreundlichen, menschenunfreundlichen Format geschrieben, das CSV-Dateien (Comma-Separated Values) sehr ähnlich ist, aber als Textdateien (.txt) in einer ZIP-Datei gespeichert wird. Es gibt viele verschiedene Möglichkeiten, wie die Daten gespeichert werden, aber wir verwenden nicht jede Datei die ganze Zeit. Auch nicht alle Verkehrsbetriebe stellen jede Datei zur Verfügung, da viele von ihnen optional sind! Hier ist ein grundlegender Überblick über die wichtigsten Dateien, die jeder Verkehrsbetrieb einreichen muss:

- **agency.txt** listet die Verkehrsbetriebe auf, die in einem bestimmten Datensatz enthalten sind – einige Endpunkte, an denen GTFS-Daten heruntergeladen werden, sammeln Informationen von mehreren Verkehrsbetrieben in einer einzigen ZIP-Datei.

- **routes.txt** enthält die verschiedenen Routen eines Netzwerks. Dies kann zum Beispiel eine einzelne Linie in einem U-Bahn-System sein (z. B. Blue Line, F Line, Line 3) oder eine Buslinie (z. B. 167, 606, Brown, Southbound).

- **trips.txt** repräsentiert jede Folge von Haltestellen, die ein Fahrzeug anfahren könnte. Dies unterscheidet Routenvarianten (zum Beispiel eine U-Bahn-Linie, die abzweigt, oder ein Expressbus, der nicht an jeder Station hält) voneinander. Oft repräsentieren Verkehrsbetriebe jede *physische* Fahrt, die ein Fahrzeug macht, als separate GTFS-Fahrt, aber es gibt Ausnahmen.

- **stops.txt** listet alle Bahnhöfe/Haltestellen innerhalb eines Netzwerks auf.

- **stoptimes.txt** zeigt, wann ein Fahrzeug an einer Haltestelle ankommt/abfährt, unterschieden durch seine Trip-ID aus *trips.txt*.

- **calender.txt**/**calender_dates.txt** (nur eine davon ist erforderlich, Verkehrsbetriebe können wählen, welche): *calender.txt* enthält, an welchen Wochentagen eine Route aktiv ist, während *calender_dates.txt* Ausnahmen vom gegebenen Fahrplan überschreibt (alle hinzugefügten oder gestrichenen Fahrten für ein bestimmtes Datum).
