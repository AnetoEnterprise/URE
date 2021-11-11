const ureModule = require('./ure.node');
console.log('URE', ureModule.Compilation("-e", "./MaBase1.txt", ".cf"));
console.log('', ureModule.Utilisation("-l", "./MaBase1.cf"));
//console.log('', ureModule.Commandes("lister les bases des donnees=`.`;", "./MaBase1.cf"));
console.log();
