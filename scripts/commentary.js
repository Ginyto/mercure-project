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
        this.upload()
        
        
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
        this.showcom()
    }
}
