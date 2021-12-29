var bdd = require('../bdd.json')
var fs = require('fs')




function majbdd() {
    fs.writeFileSync("bdd.json", JSON.stringify(bdd))
}

majbdd()


function getvalue() {
    var comment = document.getElementById("comment")
    return comment.value
}

function test() {
    x = getvalue();
    console.log("voici la valeur de x : " + x);
    addcomment(x)
}

function addcomment(param) {
    var espace = document.getElementById("espace")
    var com = document.createElement("p")
    com.textContent = param
    espace.appendChild(com)
}


