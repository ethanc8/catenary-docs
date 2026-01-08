# Chicago

Catenary est une application de transport qui vous aide à voir où se trouve votre bus ou votre train, n'importe où dans la région de Chicago (Chicagoland).
Regardez les départs en direct, explorez les arrêts à proximité et vérifiez les alertes de service — le tout depuis un seul endroit.

[**Lancer Catenary**](https://maps.catenarymaps.org/#pos=10/41.8652/-87.6198)

## Agences supportées

Avec Catenary, vous pouvez voir tous les itinéraires de bus et lignes de train exploités par les agences suivantes, voir les prochains départs et consulter leurs horaires. De plus, la plupart d'entre elles fournissent des données en temps réel, vous pouvez donc savoir si votre train/bus est en retard et voir les véhicules individuels sur la carte.

### Rail

* **CTA 'L'** (transport rapide) est pris en charge
  * Les positions des trains en temps réel et les heures d'arrivée prévues sont prises en charge
  * Les alertes ne sont pas prises en charge
* Le train de banlieue **Metra** est pris en charge
  * Les positions des trains en temps réel, les heures d'arrivée prévues et les alertes sont prises en charge
* **NICTD South Shore Line** (train de banlieue) est pris en charge
  * Les positions des trains en temps réel sont prises en charge
  * Les heures d'arrivée prévues et les alertes ne sont pas prises en charge

### Bus

* Les **bus CTA** sont pris en charge
  * Les données en temps réel ne sont pas disponibles
* Les **bus Pace** sont pris en charge
  * Des données en temps réel sont disponibles, mais elles semblent avoir des problèmes
  * Les alertes ne sont pas prises en charge
    * Aucune application ne prend en charge les alertes pour Pace

## Questions fréquemment posées

### Est-ce que Catenary affiche des données en temps réel à Chicago ?
Oui. Catenary fournit des emplacements de trains en direct et des heures de départ estimées à Chicago.

Nous fournissons également des emplacements de bus en direct dans la banlieue de Chicago, mais malheureusement, la CTA ne fournit pas d'emplacements de bus en direct dans un format que nous pouvons utiliser.

### Est-ce que Catenary affiche des alertes de service à Chicago ?

Nous affichons les alertes de service pour les trains Metra. Malheureusement, la CTA, Pace et le NICTD ne fournissent pas d'alertes de service dans un format que nous pouvons utiliser.

### Puis-je voir de quelle voie mon train partira ?

Non, nous n'avons pas ces données. La seule façon de le savoir est de consulter le tableau des départs à votre gare ; aucune application ou site web ne fournit de numéros de voie pour les prochains départs à Chicago.

### Dois-je télécharger une application ?
Non. Catenary fonctionne directement dans votre navigateur — cliquez simplement sur [**Lancer Catenary**](https://maps.catenarymaps.org/#pos=10/41.8652/-87.6198).

### Catenary est-il gratuit ?
Oui. C'est entièrement gratuit et fonctionne sur mobile ou ordinateur.

### Quand arrive le prochain bus/train ?

[**Lancer Catenary**](https://maps.catenarymaps.org/#pos=10/41.8652/-87.6198) et recherchez votre arrêt, ou zoomez pour le trouver. Après avoir cliqué sur l'arrêt, les prochaines arrivées s'afficheront.

### Quel arrêt de bus ou gare est le plus proche de moi ?

[**Lancer Catenary**](https://maps.catenarymaps.org/#pos=10/41.8652/-87.6198) et votre position actuelle apparaîtra. Vous pouvez parcourir la carte pour trouver l'arrêt le plus proche.

### Je ne m'intéresse qu'aux trains ; puis-je masquer les bus ?

Oui ; dans le coin supérieur droit, vous pouvez cliquer sur l'icône "calque"...

![alt text](./find-layers-button.png)

... et masquer ce que vous ne voulez pas voir :

![alt text](./layers-popup.png)

## Diagrammes et cartes PDF

* [Carte du système RTA (officielle)](https://www.rtachicago.org/uploads/images/general/RTA-System-Map.pdf) - Itinéraires de bus et de train dans le comté de Cook et les comtés limitrophes
* [Diagramme ferroviaire (officiel)](https://www.rtachicago.org/uploads/images/general/RTA_Train_Connections.pdf)
  * [CTA 'L' uniquement](https://www.transitchicago.com/assets/1/6/ctamap_Lsystem.pdf)

## Comment aider

La progression de l'ajout du support pour les opérateurs de transport de Chicago est suivie dans la feuille de calcul suivante :
<https://docs.google.com/spreadsheets/d/15wKbfusysMrV_2lPuMFXCFsSg-TPV31qtbukZi4sEmU/edit>

Les données en temps réel de la CTA sont traitées par [@catenarytransit/chicago-gtfs-rt](https://github.com/catenarytransit/chicago-gtfs-rt).

Si vous souhaitez améliorer nos données/cartes, [rejoignez notre Discord](https://discord.gg/bBeDhrzSgz) et rendez-vous sur l'un des fils/canaux suivants :

* [#general](https://discord.com/channels/1148092048625385552/1148092049413918772) - pour les problèmes non liés à l'agence spécifique
* [Chicago (CTA)](https://discord.com/channels/1148092048625385552/1160489723463209010)
* [Metra](https://discord.com/channels/1148092048625385552/1390099472788226078)
* [Pace](https://discord.com/channels/1148092048625385552/1388148385323679815)
* [Petits opérateurs de bus de la région de Chicago](https://discord.com/channels/1148092048625385552/1388199355336491118)

Choses sur lesquelles nous voulons travailler pour Chicago :

* [ ] Obtenir des alertes fonctionnelles de Pace (c'est assez difficile)
* [ ] Obtenir des alertes de la CTA (il y a une bonne API, à laquelle nous devons écrire un code personnalisé pour nous connecter)
* [ ] Obtenir des alertes fonctionnelles du NICTD (il y a aussi une bonne API à laquelle nous devons nous connecter)

La CTA fournira GTFS-RT à l'avenir, nous ne voulons donc pas actuellement convertir leur API actuelle de position des bus.
