let header = document.querySelector('.header');


async function fetchData() {
    const responseData = await fetch("https://next.json-generator.com/api/json/get/VyEjrvLyq");
    const data = await responseData.json();
    console.log(data);
    
    let output = '';

    for(let d of data) {

        output += `

        <h2>
            ${d.name}
        </h2>
        <p>
            ${d.song}
        <p/>

        <ul>
            <li>
                ${d.username}
            </li>
            <li>
                ${d.city}
            </li>
            <li>
                ${d.year}
            </li>
        </ul>

        `

    }

    document.body.innerHTML = output;
}

fetchData();