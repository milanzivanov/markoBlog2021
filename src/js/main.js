
async function fetchData() {
    const responseData = await fetch("https://next.json-generator.com/api/json/get/VyEjrvLyq");
    const data = await responseData.json();
    console.log(data);

    let output = "";

    for(let d of data) {


        output += `
               <h1>
                    ${d.name}
                </h1>
               <p>
                    ${d.email}
                <p/>

                <ul>
                    <li>
                        <span>city: </span>
                        ${d.address.city}
                    </li>
                    <li><span>street: </span>${d.address.street}</li>
                    <li><span>zip: </span>${d.address.zipcode}</li>
                </ul>

                <h2>
                    <span>${d.address.geo.lat}</span>
                    <span>${d.address.geo.lng}</span>
                </h2>
        `

        


    }

    document.body.innerHTML = output;
}

fetchData();