const inputText = document.getElementById("text");
const btnSearch = document.getElementById("Search");
const btnClear = document.getElementById("Clear");
const searchArray = [];
const display = document.getElementById("result");

function Search() {
    fetch("travel_recommendation_api.json")
        .then(res => res.json())
        .then(data => {
            display.innerHTML = ""; // limpiar resultados

        })
        .catch(error => console.log(error));
}


btnSearch.addEventListener("click", Search);
