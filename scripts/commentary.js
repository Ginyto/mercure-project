var bdd = require('../bdd.json')
var fs = require('fs')

console.log(bdd)

bdd.ginyto[0] = "Fanny"

console.log(bdd)

fs.writeFileSync("bdd.json", JSON.stringify(bdd))




