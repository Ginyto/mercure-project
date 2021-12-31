const dico = {
    
    montreal: [],
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
        document.getElementById("comment").value = ""
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

    download(pays) {
        alignement = JSON.parse(localStorage.getItem("dico"));
        
        this.montreal = alignement.montreal

        this.cracovie = alignement.cracovie

        this.malaisie = alignement.malaisie

        this.usa = alignement.usa

        this.vancouver = alignement.vancouver

        this.sot = alignement.sot

        this.loadcom(this.exploration(pays));
        

        console.log(alignement.montreal);
    },

    clear() {
        localStorage.clear();
        alert("local storage vide");
        location.reload()
    },

    test() {
        this.exploration()
    },

    exploration(aiguille) {
        if (aiguille > 0 && aiguille <= 6) {
            map = [
				this.montreal,
				this.cracovie,
				this.malaisie,
				this.usa,
				this.vancouver,
                this.sot,
            ];

			return map[aiguille - 1];
        }
        else {
            return alert("Erreur 404")
        }
    
    }
}
