const fs = require("fs");

//get the third value of argv (the first arg passed in)..
//..to use as the folder name
//or use project as folder name
const folderName = process.argv[2] || "Project";

try {
  // creates a file called sychonously to house files
  fs.mkdirSync(folderName);

  // create three files, write 'stuff' to them
  fs.writeFileSync(`${folderName}/index.html`, "stuff");
  fs.writeFileSync(`${folderName}/script.js`, "stuff");
  fs.writeFileSync(`${folderName}/style.css`, "stuff");
} catch (e) {
  console.log("Unable to create the files");
  console.log(e);
}
