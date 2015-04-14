# Benevoles

Amber Smalltalk Application to manage volunteers at the Toulouse boardgame festival

Application Amber Smalltalk pour gérer les bénévoles lors du festival du jeux de Toulouse

- runs in a single browser (load index.html or doit 'FdJApplication open' in workspace)
- Imports CSV file (with Papa Parser, no more jQuery), converted to JSON
- Uses localStorage, annoucer/event, html widget, jQuery
- Class names, comments in French

## Getting Started

To bring project alive (for example after `git clone`):

```sh
npm install
bower install
grunt devel
```

Developing the project (after brought alive):
 
Start server with `amber serve` and go to `http://localhost:4000/` in your browser and follow the instructions
