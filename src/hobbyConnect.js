const zipContainer_element = document.querySelector("#zipContainer");
const hobbyContainer_element = document.querySelector("#hobbyContainer");



const getAllHobby = async () => {
    const result =  await fetch("https://medina-projects.dk/HobbyConnect/api/HobbyConnect/hobby");
    const data = await result.json();
    let hobbies = "";
    data.forEach(element =>   {
        hobbies += element.hobby;

    });
    //hobbyContainer_element.innerHTML = hobbies;
    
}



const getAllZip = async () => {
    const result =  await fetch("https://medina-projects.dk/HobbyConnect/api/HobbyConnect/zip");
    const data = await result.json();
//    zipContainer_element.innerHTML = data;
}

const getAmountByHobby = async () => {
    const result =  await fetch("https://medina-projects.dk/HobbyConnect/api/HobbyConnect/hobby/1/person/amount");
    const data = await result.json();

    console.log("Amount" + data);

}




getAllHobby();
getAllZip();
getAmountByHobby();