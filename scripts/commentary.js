var bdd = require('../bdd.json')
var fs = require('fs')


function majbdd() {
    bdd = json
    fs.writeFileSync("bdd.json", bdd)
}


function getvalue() {
    var comment = document.getElementById("comment")
    return comment.value
}

function test() {
    x = JSON.stringify(bdd)
    addcomment(x)
}

function addcomment(param) {
    var espace = document.getElementById("espace")
    var com = document.createElement("p")
    com.id = "com"
    com.textContent = param 
    espace.appendChild(com)

}


