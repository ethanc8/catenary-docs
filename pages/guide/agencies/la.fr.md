# Los Angeles, le Comté d'Orange et l'Inland Empire

Catenary est une application de transport qui vous aide à voir où se trouve votre bus ou votre train, n'importe où à Los Angeles, dans le Comté d'Orange et dans l'Inland Empire.
Regardez les départs en direct, explorez les arrêts à proximité et vérifiez les alertes de service — le tout depuis un seul endroit.

[**Lancer Catenary**](https://maps.catenarymaps.org/#pos=8.89/34.0228/-118.2885)

## Agences supportées

Avec Catenary, vous pouvez voir tous les itinéraires de bus et lignes de train exploités par les agences suivantes, voir les prochains départs et consulter leurs horaires. De plus, la plupart d'entre elles fournissent des données en temps réel, vous pouvez donc savoir si votre train/bus est en retard et voir les véhicules individuels sur la carte.

### Rail

* Les trains **LA Metro Rail** sont pris en charge
  * Les positions des trains en temps réel, les heures d'arrivée prévues et les alertes sont prises en charge
* Les trains **Metrolink** sont pris en charge
  * Les positions des trains en temps réel, les heures d'arrivée prévues et les alertes sont prises en charge
  * Les numéros de voie sont disponibles
* Les trains **Amtrak** sont pris en charge
  * Les positions des trains en temps réel et les heures d'arrivée prévues sont prises en charge
  * Les numéros de voie sont disponibles
  * Les alertes sont disponibles pour tous les trains sauf le *Pacific Surfliner*

### Bus

* Les bus **LA Metro Bus** sont pris en charge
  * Les positions des bus en temps réel, les heures d'arrivée prévues et les alertes sont prises en charge
* Les bus **OCTA** (Comté d'Orange) sont pris en charge
  * Les positions des bus en temps réel, les heures d'arrivée prévues et les alertes sont prises en charge
* De nombreux opérateurs de bus municipaux sont bien pris en charge ; il y en a trop pour les lister.

## Questions fréquemment posées

### Est-ce que Catenary affiche des données en temps réel à Los Angeles ?
Oui. Catenary fournit des emplacements de trains en direct et des heures de départ estimées à Los Angeles.

### Est-ce que Catenary affiche des alertes de service à Los Angeles ?

Nous affichons les alertes de service pour les trains et de nombreux opérateurs de bus, mais pas tous.

### Puis-je voir de quelle voie mon train partira ?

Oui, vous pouvez cliquer sur une gare pour voir son tableau de départs avec les numéros de voie indiqués, ou voir le numéro de voie dans l'écran d'infos du trajet. Pour l'instant, nous n'avons ces données que pour LA Union Station.

### Dois-je télécharger une application ?
Non. Catenary fonctionne directement dans votre navigateur — cliquez simplement sur [**Lancer Catenary**](https://maps.catenarymaps.org/#pos=8.89/34.0228/-118.2885).

### Catenary est-il gratuit ?
Oui. C'est entièrement gratuit et fonctionne sur mobile ou ordinateur.

### Quand arrive le prochain bus/train ?

[**Lancer Catenary**](https://maps.catenarymaps.org/#pos=8.89/34.0228/-118.2885) et recherchez votre arrêt, ou zoomez pour le trouver. Après avoir cliqué sur l'arrêt, les prochaines arrivées s'afficheront.

### Quel arrêt de bus ou gare est le plus proche de moi ?

[**Lancer Catenary**](https://maps.catenarymaps.org/#pos=8.89/34.0228/-118.2885) et votre position actuelle apparaîtra. Vous pouvez parcourir la carte pour trouver l'arrêt le plus proche.

### Je ne m'intéresse qu'aux trains ; puis-je masquer les bus ?

Oui ; dans le coin supérieur droit, vous pouvez cliquer sur l'icône "calque"...

![alt text](./find-layers-button.png)

... et masquer ce que vous ne voulez pas voir :

![alt text](./layers-popup.png)

## Diagrammes et cartes PDF

* [Diagramme du métro et du train régional](https://cdn.beta.metro.net/wp-content/uploads/2025/09/19112839/26-0250_blt_GM_MlinkAmtrak_47x47.5_DCR.pdf)
* [Diagramme du métro](https://cdn.beta.metro.net/wp-content/uploads/2025/09/18122631/26-0150_map_GM_Master_Sept25_DCR_final.pdf)
* [Diagramme Metrolink (train régional)](https://metrolinktrains.com/globalassets/metrolink-system-map-may-2024.pdf)

### Bus
* [Carte des bus du comté de LA](https://cdn.beta.metro.net/wp-content/uploads/2025/09/18122518/26-0248_blt_system_map_47x47.5_DCR_final.pdf)
* [Plus de cartes par LA Metro](https://www.metro.net/riding/guide/system-maps/)

## Comment aider

Si vous souhaitez améliorer nos données/cartes, [rejoignez notre Discord](https://discord.gg/bBeDhrzSgz) et rendez-vous sur l'un des fils/canaux suivants :

* [#general](https://discord.com/channels/1148092048625385552/1148092049413918772) - pour les problèmes non liés à l'agence spécifique
* [Metrolink](https://discord.com/channels/1148092048625385552/1161491042139385876)
* [Los Angeles (divers)](https://discord.com/channels/1148092048625385552/1441895498888908912)

Choses sur lesquelles nous voulons travailler pour Los Angeles :
* [x] Alertes pour l'OCTA
  * Voir <https://github.com/catenarytransit/octa-gtfs-rt-alerts>
* [ ] Alertes pour le Pacific Surfliner
* [ ] Documenter notre support pour les petits opérateurs locaux
