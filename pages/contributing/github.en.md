# GitHub
This next part is crucial to start off your journey to develop Catenary. GitHub! For those unfamiliar with it, GitHub is a code-sharing platform that uses the Git version control protocol to keep track of a software project's code. We use it so that all of our team members can work together on the project at any time.

## Setting up Git

1. Make a GitHub account if you don't already have one: Sign Up for [GitHub](https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home)
    
2. Download [Git](https://git-scm.com/downloads) to your device. Make sure you're signed in, either through VSCode integration, SSH key, GitHub Desktop App, etc. 

3. Open up Git Bash and enter the following commands with "name" and "email@domain" replaged with your name and your email you used to sign up to GitHub with. This helps git identify who you are.
    
    git config --global user.name "name"
    
    git config --global user.email "email@domain"
    
4. Clone the repository (repo, for short) that you want to work on by checking our [GitHub repositiories list](https://github.com/orgs/catenarytransit/repositories). Key repos include:

- catenary-frontend: Home of our frontend code! This encompasses the user-facing aspects of our project—the user interface and visuals of the map itself.

- catenary-backend: The behind-the-scenes code that keeps Catenary running! Houses the data ingestion machine that processes the dozens of terabytes of data we cycle through

- catenary-routing-engine: Catenary's custom comprehensive trip planner tailored for public transit! Currently in development, alpha stage not released yet. 

- catenary-mobile: We're working on making a Catenary mobile app; many users are looking forward to this greatly!

5. Start working on the code! After you make the changes you want, move on to the next section.

## Contribution Protocol
After you clone your target repository, make sure you follow these steps every time you work on code:

1. Run 'git pull'. In simpliest terms, it updates the version of code on your machine to the online version by fetching any new changes to the code since you last worked on it, and mergeing it with your current version.

2. Work on the code! Remember to add comments on any part of the code that might not be self-explantatory. For example, tell us what a certain function is meant to do; it helps everyone else working on the code to know what is happening.

3. Run 'git commit -am "[message]"', replacing [message] (keep the quotation marks!) with a helpful, concise comment on what you changed and updated during your work session.

4. Run 'git push'. This updates the online version of code with what you just updated! If you ever have regrets, do not fret! Run 'git reset --soft' to just un-push the changes, or if needed, run 'git reset --hard' to COMPLETELY undo your work since you committed. Watch out for this one though, because it will delete any untracked code, including entire files!

After you push, the code will be updated in *your* copy (well, clone) of the target repo. If you want these changes to be reflected in the master branch of the repo—that is, the official Catenary copy—you must make a **Pull Request (PR)**.

## Pull Requests
To make a Pull Request, go to the GitHub website and open the main page for your copy of the repo (Homepage --> Your profile picture in the top right corner, "Your repositories" --> Pick the target repo). There might already be a button on the top right that says "Compare & pull request" there. If so, click it. If not, right below the header text, there should be a bar with a big "Contribute" button on it. Click it, and it should give a dropdown with a button for "Open pull request" on it! Click on it!

(insert image here to demonstrate where to find PR button)

Select the Catenary branch as the one to merge with, and enter in a helpful title and concise description for your pull request. For example, if you fixed the links for some transit agencies, title your PR "Fixed transit agency links" and write a description detailing which agencies this covers and what parts of the user experience this change would affect. 

Now, all you have to do is wait for a response from our team! We will get back to your PR as soon as possible and either give you some tips on how to improve your code, or approve it right away!



    