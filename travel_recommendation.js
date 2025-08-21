const btnSearch = document.getElementById("Search");
const btnClear = document.getElementById("Clear");
const searchArray = [];
const display = document.getElementById("result");

function Search() {
    fetch('travel_recommendation_api.json')
        .then(res => res.json())
        .then(data => {
            display.innerHTML = "";
            const inputText = document.getElementById("text").value.trim().toLowerCase();;
    
            for (let category in data) {
                //  category = countries , temples, beaches


                for (let locations of data[category]) {
                    // locations =  information of the locations, for exameple 1 :"{
                    //     "id": 1,
                    //     "name": "Australia",
                    //     "cities": [
                    //       {
                    //         "name": "Sydney, Australia",
                    //         "imageUrl": "Sydney_Australia.JPG",
                    //         "description": "A vibrant city known for its iconic landmarks like the Sydney Opera House and Sydney Harbour Bridge."
                    //       },
                    //       {
                    //         "name": "Melbourne, Australia",
                    //         "imageUrl": "Melbourne_Australia.JPG",
                    //         "description": "A cultural hub famous for its art, food, and diverse neighborhoods."
                    //       }
                    //     ]
                    //   },

                    if (inputText.includes("countries") && category === "countries") {


                        locations.cities.forEach(cities => {
                            // cities =  information of the cities, for example : "cities": [
                            //           {
                            //             "name": "Sydney, Australia",
                            //             "imageUrl": "Sydney_Australia.JPG",
                            //             "description": "A vibrant city known for its iconic landmarks like the Sydney Opera House and Sydney Harbour Bridge."
                            //           },
                            //           {
                            //             "name": "Melbourne, Australia",
                            //             "imageUrl": "Melbourne_Australia.JPG",
                            //             "description": "A cultural hub famous for its art, food, and diverse neighborhoods."
                            //           }
                            //         ]

                            display.innerHTML += ` <div class="card">
        <img src="img/${cities.imageUrl}" alt="">
        <div class="below">
          <h1>${cities.name}</h1>
          <p> ${cities.description}</p>
          <button>Visit</button>
        </div>
      </div>`;


                        });



                    } else if (inputText.includes("temples") && category === "temples") {

                        display.innerHTML += ` <div class="card">
        <img src="img/${locations.imageUrl}" alt="">
        <div class="below">
          <h1>${locations.name}</h1>
          <p> ${locations.description}</p>
          <button>Visit</button>
        </div>
      </div>`;
                    } else if (inputText.includes("beaches") && category === "beaches") {

                        display.innerHTML += ` <div class="card">
        <img src="img/${locations.imageUrl}" alt="">
        <div class="below">
          <h1>${locations.name}</h1>
          <p> ${locations.description}</p>
          <button>Visit</button>
        </div>
      </div>`;

                    }

                }





            }





        })
        .catch(error => console.log(error));
}


btnSearch.addEventListener("click", Search);
