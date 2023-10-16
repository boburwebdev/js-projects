const wrapper = document.querySelector(".wrapper"),
  selectBtn = wrapper.querySelector(".select-btn"),
  searchInp = wrapper.querySelector("input"),
  options = wrapper.querySelector(".options");

const COUNTRIES__ARRAY = ["Afghanistan", "Algeria", "Argentina", "Australia", "Bangladesh", "Belgium", "Bhutan",
  "Brazil", "Canada", "China", "Denmark", "Ethiopia", "Finland", "France", "Germany",
  "Hungary", "Iceland", "India", "Indonesia", "Iran", "Italy", "Japan", "Malaysia",
  "Maldives", "Mexico", "Morocco", "Nepal", "Netherlands", "Nigeria", "Norway", "Pakistan",
  "Peru", "Russia", "Romania", "South Africa", "Spain", "Sri Lanka", "Sweden", "Switzerland",
  "Thailand", "Turkey", "Uganda", "Ukraine", "United States", "United Kingdom", "Vietnam"];

window.addEventListener("DOMContentLoaded", () => {
  addCountry();
});

function addCountry(selectedCountry) {
  options.innerHTML = "";
  COUNTRIES__ARRAY.forEach(country => {
    const listItem = document.createElement("li")
    if (country == selectedCountry) listItem.classList.add("selected");
    listItem.innerText = country;
    listItem.addEventListener("click", () => {
      updateName(listItem);
    });

    options.appendChild(listItem);
  });
}

function updateName(selectedLi) {
  searchInp.value = "";
  addCountry(selectedLi.innerText);
  wrapper.classList.remove("active");
  selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

searchInp.addEventListener("keyup", () => {
  let arr = [];
  let searchWord = searchInp.value.toLowerCase();
  arr = COUNTRIES__ARRAY.filter(data => {
    return data.toLowerCase().startsWith(searchWord);
  }).map(data => {    
    const listItem = document.createElement("li");
    if (data == selectBtn.firstElementChild.innerText) listItem.classList.add("selected");
    listItem.innerText = data;
    listItem.addEventListener("click", () => {
      updateName(listItem);
    });

    return listItem;
  });

  if (arr.length) {
    options.innerHTML = "";
    arr.forEach(item => options.appendChild(item));
  } else {
    options.innerHTML = `<p style="margin-top: 10px;">Oops! Country not found</p>`;
  }
});

selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));