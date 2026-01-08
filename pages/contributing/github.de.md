# GitHub
Dieser nächste Teil ist entscheidend, um Ihre Reise zur Entwicklung von Catenary zu beginnen. GitHub! Für diejenigen, die damit nicht vertraut sind: GitHub ist eine Plattform zum Teilen von Code, die das Versionskontrollprotokoll Git verwendet, um den Code eines Softwareprojekts zu verfolgen. Wir verwenden es, damit alle unsere Teammitglieder jederzeit gemeinsam am Projekt arbeiten können.

## Git einrichten

1. Erstellen Sie ein GitHub-Konto, falls Sie noch keines haben: Registrieren Sie sich bei [GitHub](https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home)
    
2. Laden Sie [Git](https://git-scm.com/downloads) auf Ihr Gerät herunter. Stellen Sie sicher, dass Sie angemeldet sind, entweder über die VSCode-Integration, SSH-Schlüssel, die GitHub Desktop App usw.

3. Öffnen Sie Git Bash und geben Sie die folgenden Befehle ein, wobei "name" und "email@domain" durch Ihren Namen und die E-Mail-Adresse ersetzt werden, mit der Sie sich bei GitHub registriert haben. Dies hilft git zu identifizieren, wer Sie sind.
    
    git config --global user.name "name"
    
    git config --global user.email "email@domain"
    
4. Klonen Sie das Repository (kurz Repo), an dem Sie arbeiten möchten, indem Sie unsere [Liste der GitHub-Repositories](https://github.com/orgs/catenarytransit/repositories) überprüfen. Wichtige Repos sind:

- catenary-frontend: Heimat unseres Frontend-Codes! Dies umfasst die benutzerseitigen Aspekte unseres Projekts – die Benutzeroberfläche und die visuellen Elemente der Karte selbst.

- catenary-backend: Der Code hinter den Kulissen, der Catenary am Laufen hält! Beherbergt die Datenerfassungsmaschine, die die Dutzende von Terabyte an Daten verarbeitet, die wir durchlaufen.

- catenary-routing-engine: Catenarys eigener umfassender Routenplaner, maßgeschneidert für den öffentlichen Verkehr! Derzeit in Entwicklung, Alpha-Stadium noch nicht veröffentlicht.

- catenary-mobile: Wir arbeiten an einer Catenary Mobile App; viele Benutzer freuen sich schon sehr darauf!

5. Fangen Sie an, am Code zu arbeiten! Nachdem Sie die gewünschten Änderungen vorgenommen haben, fahren Sie mit dem nächsten Abschnitt fort.

## Beitragsprotokoll
Nachdem Sie Ihr Ziel-Repository geklont haben, stellen Sie sicher, dass Sie jedes Mal, wenn Sie am Code arbeiten, diese Schritte befolgen:

1. Führen Sie 'git pull' aus. Einfach ausgedrückt aktualisiert dies die Codeversion auf Ihrem Computer auf die Online-Version, indem alle neuen Änderungen am Code seit Ihrer letzten Arbeit abgerufen und mit Ihrer aktuellen Version zusammengeführt werden.

2. Arbeiten Sie am Code! Denken Sie daran, Kommentare zu jedem Teil des Codes hinzuzufügen, der nicht selbsterklärend sein könnte. Sagen Sie uns zum Beispiel, was eine bestimmte Funktion tun soll; es hilft allen anderen, die am Code arbeiten, zu wissen, was passiert.

3. Führen Sie 'git commit -am "[Nachricht]"' aus, wobei Sie [Nachricht] (behalten Sie die Anführungszeichen bei!) durch einen hilfreichen, prägnanten Kommentar darüber ersetzen, was Sie während Ihrer Arbeitssitzung geändert und aktualisiert haben.

4. Führen Sie 'git push' aus. Dies aktualisiert die Online-Version des Codes mit dem, was Sie gerade aktualisiert haben! Wenn Sie jemals etwas bereuen, keine Sorge! Führen Sie 'git reset --soft' aus, um nur das Pushen der Änderungen rückgängig zu machen, oder, falls nötig, führen Sie 'git reset --hard' aus, um Ihre Arbeit seit dem Commit VOLLSTÄNDIG rückgängig zu machen. Seien Sie hierbei jedoch vorsichtig, da dies auch jeden nicht getrackten Code löscht, einschließlich ganzer Dateien!

Nachdem Sie gepusht haben, wird der Code in *Ihrer* Kopie (nun, Klon) des Ziel-Repos aktualisiert. Wenn Sie möchten, dass diese Änderungen im Master-Branch des Repos – also der offiziellen Catenary-Kopie – übernommen werden, müssen Sie einen **Pull Request (PR)** erstellen.

## Pull Requests
Um einen Pull Request zu erstellen, gehen Sie auf die GitHub-Website und öffnen Sie die Hauptseite Ihrer Kopie des Repos (Startseite --> Ihr Profilbild in der oberen rechten Ecke, "Ihre Repositories" --> Wählen Sie das Ziel-Repo). Möglicherweise befindet sich oben rechts bereits eine Schaltfläche mit der Aufschrift "Vergleichen & Pull Request". Wenn ja, klicken Sie darauf. Wenn nicht, sollte sich direkt unter dem Header-Text eine Leiste mit einer großen Schaltfläche "Mitwirken" befinden. Klicken Sie darauf, und es sollte ein Dropdown-Menü mit einer Schaltfläche für "Pull Request öffnen" erscheinen! Klicken Sie darauf!

(Bild hier einfügen, um zu zeigen, wo die PR-Schaltfläche zu finden ist)

Wählen Sie den Catenary-Branch als den aus, mit dem zusammengeführt werden soll, und geben Sie einen hilfreichen Titel und eine prägnante Beschreibung für Ihren Pull Request ein. Wenn Sie beispielsweise die Links für einige Verkehrsbetriebe korrigiert haben, nennen Sie Ihren PR "Links für Verkehrsbetriebe korrigiert" und schreiben Sie eine Beschreibung, in der detailliert aufgeführt ist, welche Verkehrsbetriebe dies betrifft und welche Teile der Benutzererfahrung von dieser Änderung betroffen wären.

Jetzt müssen Sie nur noch auf eine Antwort von unserem Team warten! Wir werden uns so schnell wie möglich um Ihren PR kümmern und Ihnen entweder ein paar Tipps geben, wie Sie Ihren Code verbessern können, oder ihn sofort genehmigen!
