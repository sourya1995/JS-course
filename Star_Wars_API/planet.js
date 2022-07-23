const showPlanetInfo = planetId => {
    fetch(`https://swapi.dev/api/planets${planetId}/`)
    .then(response => response.json())
    .then(planet => {
        const movieCount = planet.films.length;
        const planetNameElement = document.createElement("h3");
        planetNameElement.textContent = planet.name;
        const PlanetSummaryElement = document.createElement("p");
        PlanetSummaryElement.textContent = `Climate: ${planet.climate}, Population: ${planet.population}, Appears in ${movieCount} movies.`;
        const planetInfoElement = document.getElementById("infos");
        planetInfoElement.innerHTML = '';
        planetInfoElement.appendChild(planetNameElement);
        planetInfoElement.appendChild(PlanetSummaryElement);
    })
    .catch(err => {
        console.err(err.message);
    })
};

const planetLinksElement = document.getElementById("links");
for (let planetId = 1; planetId <= 10; planetId++ ){
    const planetLinkElement = document.createElement("a");
    planetLinkElement.id = planetId;
    planetLinkElement.textContent = planetId;
    planetLinkElement.href = "#";
    planetLinkElement.addEventListener("click", e => {
        e.preventDefault();
        showPlanetInfo(e.target.id);
    });
    planetLinksElement.appendChild(planetLinkElement);
    planetLinksElement.appendChild(document.createTextNode(" | "));
    

}
planetLinksElement.appendChild(document.createTextNode("..."));