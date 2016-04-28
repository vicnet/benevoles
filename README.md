# Benevoles

Amber Smalltalk Application to manage volunteers at the Toulouse boardgame festival

Application Amber Smalltalk pour gérer les bénévoles lors du festival du jeux de Toulouse

- runs in a single browser (load index.html or doit 'FdJApplication open' in workspace)
- Imports CSV file (with Papa Parser, no more jQuery), converted to JSON
- Uses localStorage, annoucer/event, html widget, jQuery
- Class names, comments in French

## Getting Started

Install min sofware:
- node.js 0.12
- npm
- git
- with npm in node console:
```sh
npm install -g npm
npm install -g bower grunt
  (perhaps need also install in global amber-cli@<specific version> and dependencies...)
```

To bring project alive (for example after `git clone`):

```sh
npm install
bower install
grunt devel
```

Developing the project (after brought alive):
 
Start server with `amber serve` and go to `http://localhost:4000/` in your browser and follow the instructions

### Import benevoles

Input file should be like this:
`nom;prenom;asso;participe;taille;t_shirt_cintre;lsf;repas
XXXX;yyyy;Joc-Ere;O;L;N;N;Ven 8 Mai SOIR,Sam 9 Mai MIDI,Sam 9 Mai SOIR,Dim 10 Mai MIDI`

## Dev tips

### Restart application

In Workspace, do 'FdJApplication new'

### Clean application

Remove current database and set an example.
In Workspace, do 'FdJApplication new vide'

### Reinit application

Reset state of benevoles.
In Workspace, do 'FdJApplication new reinit'

### Access application when running

In Workspace, inspect  (CTRL-i) 'FdJApplication instance' 
