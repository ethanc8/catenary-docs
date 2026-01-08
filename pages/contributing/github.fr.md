# GitHub
Cette partie suivante est cruciale pour commencer votre voyage de développement sur Catenary. GitHub ! Pour ceux qui ne connaissent pas, GitHub est une plateforme de partage de code qui utilise le protocole de contrôle de version Git pour suivre le code d'un projet logiciel. Nous l'utilisons pour que tous les membres de notre équipe puissent travailler ensemble sur le projet à tout moment.

## Configurer Git

1. Créez un compte GitHub si vous n'en avez pas déjà un : Inscrivez-vous sur [GitHub](https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home)
    
2. Téléchargez [Git](https://git-scm.com/downloads) sur votre appareil. Assurez-vous d'être connecté, soit via l'intégration VSCode, la clé SSH, l'application GitHub Desktop, etc.

3. Ouvrez Git Bash et entrez les commandes suivantes en remplaçant "name" et "email@domain" par votre nom et l'e-mail que vous avez utilisé pour vous inscrire à GitHub. Cela aide git à vous identifier.
    
    git config --global user.name "name"
    
    git config --global user.email "email@domain"
    
4. Clonez le dépôt (repo, pour faire court) sur lequel vous souhaitez travailler en consultant notre [liste de dépôts GitHub](https://github.com/orgs/catenarytransit/repositories). Les principaux dépôts incluent :

- catenary-frontend : Le foyer de notre code frontend ! Cela englobe les aspects visibles par l'utilisateur de notre projet — l'interface utilisateur et les visuels de la carte elle-même.

- catenary-backend : Le code en coulisses qui fait fonctionner Catenary ! Abrite la machine d'ingestion de données qui traite les douzaines de téraoctets de données que nous parcourons

- catenary-routing-engine : Le planificateur de voyage complet et personnalisé de Catenary conçu pour les transports en commun ! Actuellement en développement, stade alpha non encore publié.

- catenary-mobile : Nous travaillons à la création d'une application mobile Catenary ; de nombreux utilisateurs l'attendent avec impatience !

5. Commencez à travailler sur le code ! Après avoir effectué les modifications souhaitées, passez à la section suivante.

## Protocole de contribution
Après avoir cloné votre dépôt cible, assurez-vous de suivre ces étapes chaque fois que vous travaillez sur du code :

1. Exécutez 'git pull'. En termes simples, cela met à jour la version du code sur votre machine vers la version en ligne en récupérant toutes les nouvelles modifications du code depuis votre dernière intervention, et en les fusionnant avec votre version actuelle.

2. Travaillez sur le code ! N'oubliez pas d'ajouter des commentaires sur toute partie du code qui pourrait ne pas être auto-explicative. Par exemple, dites-nous ce qu'une certaine fonction est censée faire ; cela aide tous les autres travaillant sur le code à savoir ce qui se passe.

3. Exécutez 'git commit -am "[message]"', en remplaçant [message] (gardez les guillemets !) par un commentaire utile et concis sur ce que vous avez changé et mis à jour pendant votre session de travail.

4. Exécutez 'git push'. Cela met à jour la version en ligne du code avec ce que vous venez de mettre à jour ! Si vous avez des regrets, ne vous inquiétez pas ! Exécutez 'git reset --soft' pour simplement annuler le push des modifications, ou si nécessaire, exécutez 'git reset --hard' pour annuler COMPLÈTEMENT votre travail depuis votre commit. Attention à celui-ci cependant, car il supprimera tout code non suivi, y compris des fichiers entiers !

Après avoir fait un push, le code sera mis à jour dans *votre* copie (enfin, clone) du dépôt cible. Si vous voulez que ces modifications soient reflétées dans la branche master du dépôt — c'est-à-dire la copie officielle de Catenary — vous devez faire une **Pull Request (PR)**.

## Pull Requests
Pour faire une Pull Request, allez sur le site Web de GitHub et ouvrez la page principale de votre copie du dépôt (Page d'accueil --> Votre photo de profil dans le coin supérieur droit, "Vos dépôts" --> Choisissez le dépôt cible). Il peut déjà y avoir un bouton en haut à droite indiquant "Compare & pull request". Si c'est le cas, cliquez dessus. Sinon, juste en dessous du texte d'en-tête, il devrait y avoir une barre avec un gros bouton "Contribute". Cliquez dessus, et cela devrait donner un menu déroulant avec un bouton pour "Open pull request" ! Cliquez dessus !

(insérer une image ici pour montrer où trouver le bouton PR)

Sélectionnez la branche Catenary comme celle avec laquelle fusionner, et entrez un titre utile et une description concise pour votre pull request. Par exemple, si vous avez corrigé les liens pour certaines agences de transport, intitulez votre PR "Corrigé les liens des agences de transport" et écrivez une description détaillant quelles agences cela couvre et quelles parties de l'expérience utilisateur ce changement affecterait.

Maintenant, tout ce que vous avez à faire est d'attendre une réponse de notre équipe ! Nous reviendrons vers votre PR dès que possible et vous donnerons quelques conseils pour améliorer votre code, ou l'approuverons tout de suite !
