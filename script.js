import pokemonArray from "./data/pokemon.js";

const cardContainer = document.querySelector(".card-container");
const dropdown = document.querySelector(".type");
const search = document.querySelector(".search input");
const amount = document.querySelector(".amount");


function titleCase(str) {
    return str.replace(/(^|\s)\S/g, (letter) => letter.toUpperCase());
}

pokemonArray.forEach(pokemon => {
    cardContainer.innerHTML += 
    `<div class="card">
        <img class="card__image" src=${pokemon.sprite}>
        <section class="card__content">
            <p class="card__heading">${titleCase(pokemon.name)}<p>
            <p class="card__text">${titleCase(pokemon.name)} (#${pokemon.id}) is a ${pokemon.types.join(" & ")} type pokemon.</p>
        </section>
    </div>
    `
});

const cards = document.querySelectorAll(".card");

const filterPokemon = (inp) => {
    Array.from(cards)
        .filter(pokemon => !pokemon.textContent.toLowerCase().includes(inp))
        .forEach(pokemon => pokemon.classList.add("filtered"));

    Array.from(cards)
        .filter(pokemon => pokemon.textContent.toLowerCase().includes(inp))
        .forEach(pokemon => pokemon.classList.remove("filtered"));
}


search.addEventListener("keyup", () => {
    const trimmed = search.value.trim().toLowerCase();
    filterPokemon(trimmed);
});

dropdown.addEventListener("change", () => {
    const option = dropdown.value.toLowerCase();
    console.log(option);
    filterPokemon(option);
});

amount.addEventListener("change", () => {
    const toShow = Array.from(cards).slice(0, amount.value);
    const toFilterOut = Array.from(cards).slice(amount.value);
    
    toShow.forEach(pokemon => pokemon.classList.remove("filtered"));
    toFilterOut.forEach(pokemon => pokemon.classList.add("filtered"));
});
