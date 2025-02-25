'use strict'

const catList = document.querySelector('.list');
const kittenDescription1 = "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente"
const kittenDescription2 = "Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo"
const kittenDescription3 = "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta"
const kittenImage1 = "https://dev.adalab.es/gato-siames.webp"
const kittenImage2 = "https://dev.adalab.es/sphynx-gato.webp"
const kittenImage3 = "https://dev.adalab.es/maine-coon-cat.webp"
const kittenName1 = "Anastacio"
const kittenName2 = "Fiona"
const kittenName3 = "Cielo"
const kittenRace1 = "Siamés"
const kittenRace2 = "Sphynx"
const kittenRace3 = "Maine Coon"
const kittenOne = `<li class="card">
                  
                        <img class="card_img" src="${kittenImage1}" alt="siames-cat"/>
                        <h3 class="card_title">${kittenName1.toUpperCase()}</h3>
                        <h4 class="card_race">${kittenRace1}</h4>
                        <p class="card_description">${kittenDescription1}</p>
                    </li>`
const kittenTwo = `<li class="card">
                    <img class="card_img" src="${kittenImage2}" alt="sphynx-cat"/>
                    <h3 class="card_title">${kittenName2.toUpperCase()}</h3>
                    <h4 class="card_race">${kittenRace2}</h4>
                    <p class="card_description">${kittenDescription2}</p>
                </li>`

const kittenThree = `<li class="card">
                    <img class="card_img" src="${kittenImage3}" alt="maine-coon-cat"/>
                    <h3 class="card_title">${kittenName3.toUpperCase()}</h3>
                    <h4 class="card_race">${kittenRace3}</h4>
                    <p class="card_description">${kittenDescription3}</p>
                </li>`

/* - selecionar los campos
   - cuando la usuaria haga click en añadir:
        . guardar el valor de los inputs
        . crear la ficha de los gatos con esos valores
        . mostrar en la web la ficha del gato con esos valores
*/

function renderKittenOne() {

    `<li class="card">
                  
                        <img class="card_img" src="${kittenImage1}" alt="siames-cat"/>
                        <h3 class="card_title">${kittenName1.toUpperCase()}</h3>
                        <h4 class="card_race">${kittenRace1}</h4>
                        <p class="card_description">${kittenDescription1}</p>
                    </li>`
  }
  catList.innerHTML = renderKittenOne();
  
            
 const plusButton = document.querySelector (".js-btn-add");
 const plusForm = document.querySelector (".js-new-form");
 const cancelButton = document.querySelector (".button-cancel");
 const inputUrl = document.querySelector (".js-input-url");
 const inputName = document.querySelector (".js-input-name");
 const inputRaza = document.querySelector (".js-input-raza");
 const inputDescription = document.querySelector (".js-input-description");
 
const searchButton = document.querySelector(".js_button-search");
const descriptionText = document.querySelector(".js_in_search_desc");
const buttonAdd = document.querySelector(".js-button-add");


const razaText = document.querySelector(".js-raza");
 
 /*catList.innerHTML = kittenOne + kittenTwo + kittenThree;*/




    //evento para mostrar y ocultar el formulario usando toggle

   /* plusButton.addEventListener ("click", () => {
 
    plusForm.classList.toggle("collapsed");
    inputUrl.value = ("");
    inputName.value = ("");
    inputRaza.value = ("");
    inputDescription.value = ("");

 });*/

 cancelButton.addEventListener ("click", () => {
  
    plusForm.classList.add("collapsed");
    inputUrl.value = ("");
    inputName.value = ("");
    inputRaza.value = ("");
    inputDescription.value = ("");

 });


searchButton.addEventListener ("click",(event) => {
    event.preventDefault();
    const descriptionValue = descriptionText.value;
    if (kittenDescription1.includes(descriptionValue)) {catList.innerHTML = kittenOne}
    if (kittenDescription2.includes(descriptionValue)) {catList.innerHTML = kittenTwo}
    if (kittenDescription3.includes(descriptionValue)) {catList.innerHTML = kittenThree}

    const razaValue = razaText.value;
    if (razaValue === "") {catList.innerHTML = "¡Uy que despiste, no sabemos su raza!"}
    else if (razaValue === "Siamés") {catList.innerHTML = kittenOne}
    else if (razaValue === "Sphynx") {catList.innerHTML = kittenTwo}
    else if (razaValue === "Maine Coon") {catList.innerHTML = kittenThree}
});

function showAndHideNewCatForm () {
    plusForm.classList.toggle("collapsed");

    inputUrl.value = ("");
    inputName.value = ("");
    inputRaza.value = ("");
    inputDescription.value = ("");
}

plusButton.addEventListener ("click",showAndHideNewCatForm);






















/* 
function showNewCatForm () {
    //muestra el formulario
    plusForm.classList.remove("collapsed");
    inputUrl.value = ("");
    inputName.value = ("");
    inputRaza.value = ("");
    inputDescription.value = ("");
}

function hideNewCatForm () {
    //Oculta el formulario
    plusForm.classList.add("collapsed");
    inputUrl.value = ("");
    inputName.value = ("");
    inputRaza.value = ("");
    inputDescription.value = ("");
}

function handleClickNewCatForm () {
    if (plusForm.classList.contains("collapsed")) {
        showNewCatForm ();
     }
     else {
        hideNewCatForm ();
     }
    }

plusButton.addEventListener ("click", handleClickNewCatForm);



function renderKitten(url, name, race, desc) {
     
        catList.innerHTML= (`<li class="card">
            <img class="card_img" src="${url}" alt="siames-cat"/>
            <h3 class="card_title">${name}</h3>
            <h4 class="card_race">${race}</h4>
            <p class="card_description">${desc}</p>
            </li>`) + kittenOne + kittenTwo + kittenThree
}


buttonAdd.addEventListener("click", (event) => {
    event.preventDefault();
    renderKitten(inputUrl.value, inputName.value, inputRaza.value, inputDescription.value, );
    handleClickNewCatForm ();
})

 */