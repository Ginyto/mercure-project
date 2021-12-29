console.log("Hello there")

function lecture() {
    fetch("../bdd.json")
			.then((response) => response.json())
			.then((data) => {
				bdd = data;
                return data;
            });
}

bdd = lecture()

console.log(bdd)



