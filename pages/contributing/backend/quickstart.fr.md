# Guide de démarrage rapide Backend
Leçon éclair pour démarrer avec le backend Catenary

## Rust
Téléchargez le support pour notre langage backend, [Rust](https://www.rust-lang.org/tools/install). Assurez-vous d'obtenir la bonne version pour l'architecture de votre ordinateur !

1. Ouvrez votre terminal et tapez 'rustup update' pour vous assurer que tout fonctionne et est à jour !

2. Si vous utilisez VSCode, nous vous recommandons vivement d'installer le paquet [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer) ; il fournit beaucoup d'aide avec la syntaxe et les fonctions.

3. Si vous ne connaissez pas Rust, c'est maintenant votre chance de l'apprendre ! Voici la [documentation](https://doc.rust-lang.org/book/), des [exemples de code](https://doc.rust-lang.org/rust-by-example/) officiels et un [cours de base](https://github.com/rust-lang/rustlings/) si vous êtes intéressé. Si vous avez des questions, n'oubliez pas que nos développeurs sont disponibles pour de l'aide et du soutien dans notre communauté Discord !

4. Assurez-vous d'être au courant de tous les détails concernant GitHub et le flux de travail

## Choisir votre/vos projet(s)

Vient maintenant une grande décision : Par quelle partie du backend voulez-vous commencer ? Il y a de nombreux composants sur lesquels nous travaillons, et ils jouent tous des rôles différents dans le fonctionnement de Catenary Maps. Voici un aperçu rapide des principaux composants :

### Base de données et ingestion

C'est le processus par lequel Catenary acquiert, nettoie, trie et affiche ensuite nos données. Lors d'une journée normale, cela représente des douzaines de téraoctets pour des centaines d'agences à travers le monde. De *Ciudad de México* (Mexico, Mexique) à *横浜市* (Yokohama, Japon), nous vous couvrons !

En gros, le processus ressemble à quelque chose comme ça :

Depuis [Transitland](https://www.transit.land/), nous téléchargeons les informations de transport de chaque agence dans notre système en utilisant un tas de connexions API. Nous lisons toutes ces données, puis nous les parcourons et nous associons à nouveau chaque flux à son opérateur. Ensuite, nous ingérons (traduction : extraire des données puis les déplacer par lots) les informations en temps réel et les envoyons dynamiquement à notre frontend.

C'est beaucoup d'informations à traiter pour notre système, donc nous devons utiliser des algorithmes pour optimiser le processus. De plus, certaines agences demandées n'ont pas leurs données formatées selon la norme de l'industrie (**GTFS**, General Transit Feed Specification), ce qui signifie que nous devons les nettoyer avant de pouvoir les jeter dans notre système !

### Moteur de routage

> Hé Catenary, quand aurez-vous un truc de planification d'itinéraire ?

> Hé Catenary, ce serait tellement cool si on pouvait planifier des trajets !

> Hé Catenary, quand pourrons-nous planifier un voyage sur votre site ?

Nous y travaillons, c'est promis (>_<) !!!

À vrai dire, c'est assez difficile. Il y a beaucoup de pièces mobiles — littéralement, les bus et les trains circulent selon un horaire et vous devez savoir quand vous pouvez monter à bord de chaque véhicule et tenir compte des temps d'attente et des stations de transfert, en plus des idées de routage régulières telles que les chemins les plus courts et les vitesses de déplacement. Notre ensemble d'algorithmes est basé sur cet [article](https://ad.informatik.uni-freiburg.de/files/transferpatterns.pdf) du Dr Hannah Bast de l'Université de Fribourg, en Allemagne. Malheureusement, aucun code n'est fourni — mais il y a une série de conférences qu'elle a enregistrées basée sur ce processus ! Vous pouvez la trouver sur ce [site web](https://ad-wiki.informatik.uni-freiburg.de/teaching/EfficientRoutePlanningSS2012). Nous le recommandons vivement (car nous n'aurions pas pu aller aussi loin autrement) !

### Génération de routes
C'est un projet planifié qui corrigera les affichages d'itinéraires pour de nombreuses agences différentes — celles où, au lieu d'afficher des lignes correctes, la carte dessine simplement une ligne droite entre deux stations, ce qui donne ce genre de désordre :

(montrer image)

C'est parce que l'agence ne nous a pas donné la "forme" réelle de l'itinéraire : une liste de points de coordonnées qui dictent où le véhicule passe chaque seconde environ. Notre moteur ne peut actuellement pas prédire où se trouve exactement cet itinéraire, donc il extrapole en dessinant simplement une ligne laide et désordonnée directement à travers la carte... et personne ne veut ça !

Il y a d'autres problèmes aussi — parfois les agences ont la même station sous deux noms similaires, mais différents (par exemple, "Union Station" contre "LA Union Station"). D'autres fois, elles peuvent nous donner l'itinéraire d'un train mais il ne correspond pas à l'emplacement des voies ferrées réelles.

En tant que tel, nous prévoyons d'intégrer des algorithmes de map-matching et de génération d'itinéraires pour corriger ces affichages lorsque l'agence ne nous donne pas la forme d'itinéraire correcte. Ceci est basé sur le travail du Dr Patrick Brosi (de l'Université de Fribourg, en Allemagne) dans cet [article](https://drive.google.com/file/d/1DZFIB4Inwl_sK8B1oPQyl6cP7X2GP2Qs/view). Ne vous inquiétez pas, nous ne savons pas ce que signifie la moitié de tout ça non plus. Nous y arriverons... ensemble !

### Systèmes distribués
Grâce à un donateur incroyable de la Rust Conference 2024, Catenary a un serveur maintenant ! Un vrai serveur !

Notre base d'utilisateurs continue de croître (ce qui est excellent !) mais cela signifie que notre puissance de calcul doit également croître. Mais comment faire cela avec le financement limité dont nous disposons ? La réponse à cette question est de construire un système distribué : nous divisons notre calcul sur plusieurs machines à travers le monde, et disons à chacune d'elles de travailler sur différentes tâches, ou différents composants de tâches. Nous avons besoin à la fois de machines supplémentaires pour aider à ce processus, et de personnes pour aider à gérer la base de code déterminant cette organisation des tâches !
