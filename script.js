import pokemonArray from "./data/pokemon.js";

const cardContainer = document.querySelector(".card-container");


function titleCase(str) {
    return str.replace(/(^|\s)\S/g, (letter) => letter.toUpperCase());
}

pokemonArray.forEach(pokemon => {
    cardContainer.innerHTML += 
    `<div class="card">
        <img class="card__image" src=${pokemon.sprite}>
        <section class="card__content">
            <p class="card__heading">${titleCase(pokemon.name)}<p>
            <p class="card__text">${titleCase(pokemon.name)} (#${pokemon.id}) is a ${pokemon.types} type pokemon.</p>
        </section>
    </div>
    `
});


const searchBox = document.createElement("div");
searchBox.innerHTML += `
    <form class="search">
        <input type="text" name="search">
    </form>
`;

document.body.prepend(searchBox);

const search = document.querySelector(".search input")
const cards = document.querySelectorAll(".card")

const filterPokemon = (inp) => {
    Array.from(cards)
        .filter((pokemon) => !pokemon.textContent.toLowerCase().includes(inp))
        .forEach((pokemon) => pokemon.classList.add("filtered"));

    Array.from(cardContainer.children)
        .filter((pokemon) => pokemon.textContent.toLowerCase().includes(inp))
        .forEach((pokemon) => pokemon.classList.remove("filtered"));
}


search.addEventListener("keyup", () => {
    const trimmed = search.value.trim().toLowerCase();
    filterPokemon(trimmed);
})