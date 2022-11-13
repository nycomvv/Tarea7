class rickymorti {
    constructor (name, specie, image) {
        this.name = name;
        this.specie = specie;
        this.image = image;
    }
    get information() {
        let miArray = [this.name, this.specie, this.image];
        return miArray;
    }
}

function show (info) {
    let id = document.getElementById("apirym");
    id.innerHTML += `<div class="card">
    <h4>${info[0]}</h4>
    <p><h5>${info[1]}</h5></p>
    <img width="50%" src="${info[2]}"/>
    </div>`;
}

async function getPersons() {
    const response = await fetch ("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    let persons = data.results;
    persons.map ((person) => {
        let people = new rickymorti(person.name, person.species, person.image);
        show(people.information);
    });
}
getPersons();