function lecture() {
    fetch("../bdd.json")
        .then(res => res.json())
        .then(bdd => console.log(bdd))
}

lecture()

console.log("Hello there")
