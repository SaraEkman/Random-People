
const rootDiv = document.querySelector("div");

async function getData() {
    let response = await fetch("https://randomuser.me/api/");
    let result = await response.json();
    console.log(result);
    printUser(result.results);
}

function printUser(data) {
    for (let el in data) {
        let res = data[el];
        // console.log(data[el].result);
        let nameUser = document.createElement("h1");
        nameUser.innerText = res.name.first;

        let city = document.createElement("p");
        city.innerText = res.location.city;

        let phone = document.createElement("p");
        phone.innerText = res.phone;

        let picture = document.createElement("img");
        picture.src = res.picture.medium;

        rootDiv.append(nameUser, city, phone, picture);
    }
}

function main() {
    rootDiv.innerHTML = "";
    let btn = document.createElement("button");
    btn.innerText = "Update";
    btn.classList = "btn";
    rootDiv.append(btn);
    btn.addEventListener("click", main);
    getData();

} main();