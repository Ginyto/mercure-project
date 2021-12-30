const dico = {
    
    montreal: ["Gianlucca", "Fanny"],
    cracovie: [],
    malaisie: [],
    usa: [],
    vancouver: [],
    sot: [],


    showcom(pays) {
        console.log(pays)
    },

    addnewcom(text) {
        var com = document.createElement("div")
        com.className = "com"
        com.textContent = text
        document.getElementById("note").appendChild(com);
        this.showcom(this.montreal)
    },

    saisiecom(tab) {
        text = document.getElementById("comment").value;
        this.addnewcom(text)

        tab.push(text);
        this.upload();
    },

    loadcom(tab) {
        for (let index = 0; index < tab.length; index++) {
            this.addnewcom(tab[index])
        }
    },


    upload(){
        localStorage.setItem("dico", JSON.stringify(this));
    },

    download() {
        alignement = JSON.parse(localStorage.getItem("dico"));
        
        this.montreal = alignement.montreal
        this.cracovie = alignement.cracovie
        this.malaisie = alignement.malaisie
        this.usa = alignement.usa
        this.vancouver = alignement.vancouver
        this.sot = alignement.sot

        console.log(alignement.montreal);
    },

    clear() {
        localStorage.clear();
				alert("local storage vide");
    },

    test() {
        this.download()
        this.showcom(this.montreal)
    }
}
