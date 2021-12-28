console.log("Hello there")

fetch("../bdd.json")
	.then((response) =>  response.json())
    .then((data) => JSON.stringify(data))
