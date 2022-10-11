const { readdirSync } = require('fs')

function loadComponents(client) {
  let totalNumComponents = 0
  const ascii = require("ascii-table");
  const table = new ascii().setHeading("Components", "Type", "Command", "Status");

  const componentFolders = readdirSync(`./Components`)
  for(const componentSubFolder of componentFolders) {
    const componentCommandFolder = readdirSync(`./Components/${componentSubFolder}`)
for(const componentFolder of componentCommandFolder) {
	    
    const componentFiles = readdirSync(`./Components/${componentSubFolder}/${componentFolder}`)
        .filter((file) => file.endsWith(".js"));
      
    const {buttons} = client;
      
    switch(componentSubFolder){
      case "Buttons": {
        for(const file of componentFiles) {
          const button = require(`../Components/${componentSubFolder}/${componentFolder}/${file}`);  
          buttons.set(button.data.name, button);
            
          totalNumComponents++
          table.addRow(file, "Button", componentFolder, "🟢 Online!");
        }
      }
        break;
    }
}
  }
  return console.log(table.toString(), `\nLoaded ${totalNumComponents} Components.\n`);
}

module.exports = { loadComponents }