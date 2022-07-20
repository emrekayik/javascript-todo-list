// onclick eventi
document.getElementById("liveToastBtn").onclick = newElement;

function newElement() {
    var task = document.getElementById("task").value;
    var li = document.getElementById("list");
    // taskdan alınan değeri listeye ekle
    li.innerHTML += "<li>" + task + "</li>";
}

