const dico = {
    
    montreal: ["Gianlucca", "Fanny"],
    cracovie: [],
    malaisie: [],
    usa: [],
    vancouver: [],
    sot: [],


    showcom() {
        console.log(this.montreal)
    },

    addnewcom(tab) {
        tab.push(document.getElementById("comment").value)
        this.showcom()
        localStorage.setItem("dico", JSON.stringify(this))
        
    },

    test(x) {
        if (x == 0) {
            localStorage.clear()
            alert("localstorage vide")
        }
        
        x = JSON.parse(localStorage.getItem("dico"));
        console.log("voici le cloud de : "+x.montreal)
    }
}

console.log("voici la source local de : "+dico.montreal)
