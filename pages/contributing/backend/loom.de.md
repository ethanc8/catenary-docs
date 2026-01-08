# Generierung von Routen

*Dieses Projekt befindet sich derzeit in einem sehr frühen Stadium. Wir sind uns nicht sicher, wohin dieser Zug fährt, aber wir würden uns freuen, wenn Sie mit uns mitfahren!*

Die Generierung von Routen bezieht sich darauf, wie wir visuell die Routen generieren, die Fahrzeuge nehmen. Egal ob es sich um eine Buslinie, Bahnlinie oder Fährverbindung handelt, wir müssen die Informationen, die uns die Verkehrsbetriebe zur Verfügung stellen, nehmen und etwas programmieren, um die Pfade zu "zeichnen", denen diese Verkehrsoptionen folgen!

Wenn wir Glück haben, stellt uns der Verkehrsbetrieb eine genaue shape.txt-Datei in seinem GTFS-Fahrplan zur Verfügung – eine Liste von Koordinatenpunkten, entlang derer die Linie verläuft. Diese Daten stimmen jedoch nicht immer mit der Realität überein! Zum Beispiel könnten die Koordinaten nicht mit den physischen Straßen, Schienen und anderen realen Grenzen übereinstimmen. Alternativ könnten verschiedene Routen ihre Haltestelle in verschiedenen Bereichen desselben Bahnhofs markieren, was seltsame, überlappende Formen zwischen Routen erzeugt, die überlappt sein sollten. Noch schwieriger sind Fälle, in denen uns der Verkehrsbetrieb überhaupt keine geografischen Informationen gibt, außer den Haltestellenstandorten. In diesem Fall leitet unsere Software derzeit den kürzesten, direktesten Weg einer *geraden Linie* zwischen den Stationen ab und zeichnet so einen einzigen Pfad quer über die Karte, durch Gebäude und alles andere. Natürlich ist dies ungenau und ein Kopfschmerz beim Ansehen, also suchen wir gerade nach Lösungen für diese Probleme!

Glücklicherweise gibt es für uns bereits Forschungsarbeiten und Code zu diesen Map-Matching- und Routengenerierungsproblemen, und wir forschen schon eine Weile zu diesem Thema. Wir würden gerne sofort daran arbeiten, aber es gibt viele Punkte mit höherer Priorität auf unserer To-Do-Liste – und wir sind unterbesetzt.

Melden Sie sich bei uns, wenn Sie daran interessiert sind, mehr zu erfahren oder zu helfen!
