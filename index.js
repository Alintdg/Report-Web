// restGetReq("people/1");
graphQLreq(2)


async function loadPeopleREST(done) {
  let people = [];

  for (let i = 1; i <= 4; i++) {
    let person = await restGetReq("people/" + i);
    people.push(person);
  }
  console.log("persoane_REST: ", people);
  done(people, "REST");
}


async function loadPeopleGraphQL(done) {
  let people = [];

  for (let i = 5; i <= 8; i++) {
    let person = await graphQLreq(i);
    people.push(person.data.person);
  }
  console.log("persoane_GraphQL: ", people);
  done(people, "GraphQL");
}



function renderPeople(people, apiType) {

  var mainElement = document.querySelector('main');

  let h1 = document.createElement("h1");
  h1.innerHTML = `Calls with ${apiType}`;
  h1.style = "width:100%; padding-left: 25px";
  mainElement.appendChild(h1);

  people.forEach(person => {
    let box = document.createElement("section");
    box.classList.add("person");
    let h1 = document.createElement("h1");
    box.appendChild(h1);
    h1.innerHTML = person.name;

    let div = document.createElement("div");
    let list = document.createElement("ul");

    let birthYear = document.createElement("li");
    let label = document.createElement("span");
    label.classList.add("label");
    label.innerHTML = "Birth year: ";
    birthYear.appendChild(label);
    let value = document.createElement("span");
    value.classList.add("value");
    if (apiType == "GraphQL")
      value.innerHTML = person.birthYear;
    else
      value.innerHTML = person.birth_year;

    birthYear.appendChild(value);
    list.appendChild(birthYear);

    let eyeColor = document.createElement("li");
    label = document.createElement("span");
    label.classList.add("label");
    label.innerHTML = "Eye Color:  ";
    eyeColor.appendChild(label);
    value = document.createElement("span");
    value.classList.add("value");
    if (apiType == "GraphQL")
      value.innerHTML = person.eyeColor;
    else
      value.innerHTML = person.eye_color;  
    eyeColor.appendChild(value);
    list.appendChild(eyeColor);

    let skinColor = document.createElement("li");
    label = document.createElement("span");
    label.classList.add("label");
    label.innerHTML = "Skin Color:  ";
    skinColor.appendChild(label);
    value = document.createElement("span");
    value.classList.add("value");
    if (apiType == "GraphQL")
      value.innerHTML = person.skinColor;
    else
      value.innerHTML = person.skin_color;
    skinColor.appendChild(value);
    list.appendChild(skinColor);

    let hairColor = document.createElement("li");
    label = document.createElement("span");
    label.classList.add("label");
    label.innerHTML = "Hair Color:  ";
    hairColor.appendChild(label);
    value = document.createElement("span");
    value.classList.add("value");
    if (apiType == "GraphQL")
      value.innerHTML = person.hairColor;
    else
      value.innerHTML = person.hair_color;
    hairColor.appendChild(value);
    list.appendChild(hairColor);


    let height = document.createElement("li");
    label = document.createElement("span");
    label.classList.add("label");
    label.innerHTML = "Height:  ";
    height.appendChild(label);
    value = document.createElement("span");
    value.classList.add("value");
    value.innerHTML = person.height;
    height.appendChild(value);
    list.appendChild(height);

    let mass = document.createElement("li");
    label = document.createElement("span");
    label.classList.add("label");
    label.innerHTML = "Mass:  ";
    mass.appendChild(label);
    value = document.createElement("span");
    value.classList.add("value");
    value.innerHTML = person.mass;
    mass.appendChild(value);
    list.appendChild(mass);

    div.appendChild(list);
    box.appendChild(div);
    mainElement.appendChild(box);
  });


}

// call the loadPeople with the renderPeople function as parameter
loadPeopleREST(renderPeople);
loadPeopleGraphQL(renderPeople);