# Chicago

Catenary ist eine Verkehrs-App, mit der Sie überall in Chicagoland sehen können, wo sich Ihr Bus oder Zug befindet.
Beobachten Sie Abfahrten in Echtzeit, erkunden Sie Haltestellen in der Nähe und prüfen Sie Service-Warnungen – alles an einem Ort.

[**Catenary starten**](https://maps.catenarymaps.org/#pos=10/41.8652/-87.6198)

## Unterstützte Verkehrsbetriebe

Mit Catenary können Sie alle Buslinien und Zuglinien der folgenden Verkehrsbetriebe sehen, bevorstehende Abfahrten und deren Fahrpläne anzeigen. Außerdem stellen die meisten von ihnen Echtzeitdaten zur Verfügung, sodass Sie wissen, ob Ihr Zug/Bus Verspätung hat, und einzelne Fahrzeuge auf der Karte sehen können.

### Bahn

* **CTA 'L'** (Schnellverkehr) wird unterstützt
  * Echtzeit-Zugpositionen und vorhergesagte Ankunftszeiten werden unterstützt
  * Warnungen werden nicht unterstützt
* **Metra** Pendlerbahn wird unterstützt
  * Echtzeit-Zugpositionen, vorhergesagte Ankunftszeiten und Warnungen werden unterstützt
* **NICTD South Shore Line** (Pendlerbahn) wird unterstützt
  * Echtzeit-Zugpositionen werden unterstützt
  * Vorhergesagte Ankunftszeiten und Warnungen werden nicht unterstützt

### Bus

* **CTA Busse** werden unterstützt
  * Echtzeitdaten sind nicht verfügbar
* **Pace Busse** werden unterstützt
  * Echtzeitdaten sind verfügbar, scheinen aber Probleme zu haben
  * Warnungen werden nicht unterstützt
    * Keine App unterstützt Warnungen für Pace

## Häufig gestellte Fragen

### Zeigt Catenary Echtzeitdaten in Chicago an?
Ja. Catenary bietet Live-Zugpositionen und geschätzte Abfahrtszeiten in Chicago.

Wir bieten auch Live-Buspositionen in den Vororten von Chicago an, aber leider stellt CTA keine Live-Buspositionen in einem Format zur Verfügung, das wir verwenden können.

### Zeigt Catenary Service-Warnungen in Chicago an?

Wir zeigen Service-Warnungen für Metra-Züge an. Leider stellen CTA, Pace und NICTD keine Service-Warnungen in einem Format zur Verfügung, das wir verwenden können.

### Kann ich sehen, von welchem Gleis mein Zug abfährt?

Nein, wir haben diese Daten nicht. Die einzige Möglichkeit, dies herauszufinden, besteht darin, die Abfahrtstafel an Ihrem Bahnhof anzusehen; keine App oder Website bietet Gleisnummern für bevorstehende Abfahrten in Chicago an.

### Muss ich eine App herunterladen?
Nein. Catenary läuft direkt in Ihrem Browser — klicken Sie einfach auf [**Catenary starten**](https://maps.catenarymaps.org/#pos=10/41.8652/-87.6198).

### Ist die Nutzung von Catenary kostenlos?
Ja. Es ist völlig kostenlos und funktioniert auf Mobilgeräten oder dem Desktop.

### Wann kommt der nächste Bus/Zug?

[**Catenary starten**](https://maps.catenarymaps.org/#pos=10/41.8652/-87.6198) und suchen Sie nach Ihrer Haltestelle oder zoomen Sie hinein, um sie zu finden. Nach dem Klicken auf die Haltestelle werden die nächsten Ankünfte angezeigt.

### Welche Bushaltestelle oder welcher Bahnhof ist mir am nächsten?

[**Catenary starten**](https://maps.catenarymaps.org/#pos=10/41.8652/-87.6198) und Ihr aktueller Standort wird angezeigt. Sie können die Karte durchsuchen, um die nächste Haltestelle zu finden.

### Ich interessiere mich nur für Züge; kann ich die Busse ausblenden?

Ja; in der oberen rechten Ecke können Sie auf das "Ebenen"-Symbol klicken...

![alt text](./find-layers-button.png)

... und das ausblenden, was Sie nicht sehen möchten:

![alt text](./layers-popup.png)

## Netzpläne und PDF-Karten

* [RTA Systemkarte (offiziell)](https://www.rtachicago.org/uploads/images/general/RTA-System-Map.pdf) - Bus- und Zuglinien in Cook und den umliegenden Landkreisen
* [Bahndiagramm (offiziell)](https://www.rtachicago.org/uploads/images/general/RTA_Train_Connections.pdf)
  * [Nur CTA 'L'](https://www.transitchicago.com/assets/1/6/ctamap_Lsystem.pdf)

## Wie man helfen kann

Der Fortschritt beim Hinzufügen von Unterstützung für Verkehrsbetriebe in Chicagoland wird in der folgenden Tabelle verfolgt:
<https://docs.google.com/spreadsheets/d/15wKbfusysMrV_2lPuMFXCFsSg-TPV31qtbukZi4sEmU/edit>

CTA-Echtzeitdaten werden von [@catenarytransit/chicago-gtfs-rt](https://github.com/catenarytransit/chicago-gtfs-rt) verarbeitet.

Wenn Sie unsere Daten/Karten verbessern möchten, [treten Sie unserem Discord bei](https://discord.gg/bBeDhrzSgz) und gehen Sie zu einem der folgenden Threads/Kanäle:

* [#general](https://discord.com/channels/1148092048625385552/1148092049413918772) - für Probleme, die nichts mit dem spezifischen Verkehrsbetrieb zu tun haben
* [Chicago (CTA)](https://discord.com/channels/1148092048625385552/1160489723463209010)
* [Metra](https://discord.com/channels/1148092048625385552/1390099472788226078)
* [Pace](https://discord.com/channels/1148092048625385552/1388148385323679815)
* [Chicago-area small bus operators](https://discord.com/channels/1148092048625385552/1388199355336491118)

Dinge, an denen wir für Chicago arbeiten wollen:

* [ ] Funktionierende Warnungen von Pace erhalten (das ist ziemlich schwierig)
* [ ] Warnungen von CTA erhalten (es gibt eine gute API, für die wir benutzerdefinierten Code schreiben müssen, um eine Verbindung herzustellen)
* [ ] Funktionierende Warnungen von NICTD erhalten (es gibt auch eine gute API, mit der wir uns verbinden müssen)

CTA wird in Zukunft GTFS-RT bereitstellen, daher wollen wir ihre aktuelle Buspositions-API derzeit nicht konvertieren.
