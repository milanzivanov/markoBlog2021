let requestURL = 'https://next.json-generator.com/api/json/get/VkQaqyggc';
let header = document.querySelector('header');
let section = document.querySelector('.song-container__box');

async function fetchUsers() {
    const res = await fetch(requestURL);
    const data = await res.json();
    console.log(data);

    let myH1 = document.createElement('h1');
    myH1.textContent = data.userName;
    console.log(myH1.textContent);
    header.appendChild(myH1);

    let myH2 = document.createElement('h2');
    myH2.textContent = data.homeTown;
    header.appendChild(myH2);

    let info = data.info;
    console.log(info);

    output = '';

    for (let i of info) {
        output += `
        <div class="song-container__content">
            <h2>
            ${i.name}
            </h2>
                <p>
                ${i.song}
            </p>
        </div>
        `
    }

    section.innerHTML = output;

}

fetchUsers();




// one way
// async function fetchData() {
//     const responseData = await fetch("https://next.json-generator.com/api/json/get/VyEjrvLyq");
//     const data = await responseData.json();
//     console.log(data);
    
//     let output = '';

//     for(let d of data) {

//         output += `

//         <h2>
//             ${d.name}
//         </h2>
//         <p>
//             ${d.song}
//         <p/>

//         <ul>
//             <li>
//                 ${d.username}
//             </li>
//             <li>
//                 ${d.city}
//             </li>
//             <li>
//                 ${d.year}
//             </li>
//         </ul>

//         `

//     }

//     document.body.innerHTML = output;
// }

// fetchData();