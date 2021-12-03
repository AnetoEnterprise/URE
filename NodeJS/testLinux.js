const ureModule = require('./Linux/ure.node');
console.log('URE : ', ureModule.Compilation("-e", "./Demo.txt", ".ure"));
console.log('URE : ', ureModule.Utilisation("-l", "./Demo.ure", ""));
console.log('URE : ', ureModule.Commandes("lister les bases des donnees=`.`;", "./MaBase1.cf"));
console.log();
