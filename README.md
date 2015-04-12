# Benevoles

Application Amber Smalltalk pour gérer les bénévoles lors du festival du jeux de Toulouse

Amber Smalltalk Application to manage volunteers at the Toulouse boardgame festival

- runs in a single browser (load ``index.html``,  ``FdJApplication open`` starts the application).
- Imports CSV file (with jQuery Papa Parser), converted to JSON
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
