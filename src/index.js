import Car from "./Car";
import Wishlist from "./Wishlist";

//Form Selections
let form = document.querySelector("#submitForm");
let makeInput = document.querySelector("#makeInput");
let modelInput = document.querySelector("#modelInput");
let yearInput = document.querySelector("#yearInput");

//Display Sections
let wishlistUl = document.querySelector("#wishListContainer > ul");
let makeP = document.querySelector("#car-make");
let modelP = document.querySelector("#car-model");
let yearP = document.querySelector("#car-year");
let removeBtn = document.querySelector("#removeBtn");

//Script Values
let wishlist = new Wishlist();

//Event Listeners
//Form is submitted
form.addEventListener("submit", (event) => {
  event.preventDefault();

  //Get Inputs
  let make = makeInput.value;
  let model = modelInput.value;
  let year = yearInput.value;

  //Create Car from Inputs
  let car = new Car(make, model, year);

  //Add Car to Wishlist
  wishlist.add(car);

  // Update DOM
  let li = document.createElement("li");
  li.classList.add("list-group-item");
  li.textContent = car.model;

  //li is clicked
  li.addEventListener("click", (event) => {
    //Display details on card
    makeP.textContent = car.make;
    modelP.textContent = car.model;
    yearP.textContent = car.year;

    //enable remove button on card
    removeBtn.disabled = false;
    removeBtn.onclick = (event) => {
      wishlist.remove(car);
      //reset card display value
      makeP.textContent = "";
      modelP.textContent = "";
      yearP.textContent = "";
      //disabled remove button
      removeBtn.disabled = true;
      //remove li form DOM
      wishlistUl.removeChild(li);
    };
  });

  wishlistUl.appendChild(li);

  //Clear Form Inputs
  makeInput.value = "";
  modelInput.value = "";
  yearInput.value = "";
});
