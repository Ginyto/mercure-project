var collapse = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < collapse.length; i++) {
    collapse[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
} // Code gentiment prêté par https://www.w3schools.com/howto/howto_js_collapsible.asp

function addItem(game_name, add_btn_num, del_btn_num, categorie) {
    var ul = document.getElementById(categorie);
    var candidate = game_name;
    var li = document.createElement("li");
    li.setAttribute('id', candidate);
    li.appendChild(document.createTextNode(candidate));
    ul.appendChild(li);

    document.getElementById(add_btn_num).disabled = true;
    document.getElementById(add_btn_num).style.visibility = 'hidden'
    document.getElementById(del_btn_num).disabled = false;
    document.getElementById(del_btn_num).style.visibility = 'visible'
}


function removeItem(game_name, add_btn_num, del_btn_num, categorie) {
    var ul = document.getElementById(categorie);
    var candidate = game_name;
    var item = document.getElementById(game_name);
    ul.removeChild(item);

    document.getElementById(add_btn_num).disabled = false;
    document.getElementById(add_btn_num).style.visibility = 'visible'
    document.getElementById(del_btn_num).disabled = true;
    document.getElementById(del_btn_num).style.visibility = 'hidden'
}

function play() {
    var audio = document.getElementById("audio");
    audio.play();
}

