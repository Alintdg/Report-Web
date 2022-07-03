const url = "https://swapi.dev/api/";   // de adaugat endpointuri


var GetOptions = {
    method: 'GET',
}



async function restGetReq(path) {
    try {
        let response = await fetch(url + path, GetOptions)
        let data = await response.json();
        console.log(data); //testing
        return data;
    }
    catch (error) {
        console.error("Could not fetch from API using REST! : " + error);
    }
}








async function graphQLreq(id) {

    const graphURL = "http://localhost:49569";                                               //  "https://swapi-graphql.netlify.app/.netlify/functions/index"
    const query = `
    query{
         person(personID:${id}){ 
             name,
             birthYear,
             eyeColor,
             skinColor,
             hairColor,
             height,
             mass
          }
        }
    `;

    try {
        let response = await fetch(graphURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({
                query: query
            })
        })
        let data = await response.json();
        return data;
    }
    catch (error) {
        console.error("Could not fetch from API using GraphQL! : " + error);
    }


}


