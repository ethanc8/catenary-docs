Derzeit haben wir keine Schnittstelle für unsere API, aber die Endpunkte sind für die öffentliche Nutzung offen! Die Alpha-Version unseres Echtzeit-API-Feeds kann unter https://birch.catenarymaps.org/get_realtime_locations/ aufgerufen werden (dieser Link führt nirgendwohin!).

Um auf einen bestimmten Verkehrsbetrieb zuzugreifen, formatieren Sie den Link wie folgt: https://birch.catenarymaps.org/get_realtime_locations/orangecountytransportationauthority/bus/0/0
(OCTA, ansässig in Kalifornien, USA).

Momentan, wie Sie an der URL erkennen können, werden die Feed-Informationen für OCTA-Busse angezeigt, aber Sie können sich umschauen und andere Verkehrsbetriebe/Verkehrsmittel ausprobieren, wie zum Beispiel:
https://birch.catenarymaps.org/get_realtime_locations/metro~losangeles/metro/0/0
(LA Metro, Kalifornien, USA).

Sie können verfügbare Verkehrsbetriebe auf dieser [Karte](https://maps.catenarymaps.org/chateausee) finden. Der API-Link ist im Grunde so organisiert, dass Sie nur den Namen des Verkehrsbetriebs, wie er auf der Chateausee-Karte geschrieben ist, und sein Verkehrsmittel (bus, metro, ferry usw.) in den Link einfügen müssen, und er sollte Ihnen die gewünschten Daten liefern: https://birch.catenarymaps.org/get_realtime_locations/%7Bagency-name%7D/%7Bmodality%7D/0/0.
