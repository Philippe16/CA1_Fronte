// JavaScript Document

// --------------------------------- DOCUMENT ELEMENTS ---------------------------------

const result_section_element = document.querySelector("#result_section");

const getZip_btn_element = document.querySelector("#getZipBtn");
const getHobbies_btn_element = document.querySelector("#getHobbiesBtn");


// ------------------------------------- FUNCTIONS -------------------------------------

const getAllZip = () => {
  fetch("https://medina-projects.dk/HobbyConnect/api/HobbyConnect/zip")
  .then((response) => {
    return response.json();
  })
  .then((data) => {

    // Reset result section content
    result_section_element.innerHTML = "";

    const zipList_container_element = document.createElement("div");
    zipList_container_element.setAttribute("id", "zipList_container");
    zipList_container_element.classList.add("flexRow");

    data.forEach(zip => {
      let zip_container_element = document.createElement("div");
      zip_container_element.classList.add("zip_container");
      zip_container_element.innerHTML = zip;

      zipList_container_element.appendChild(zip_container_element);
    });

    result_section_element.appendChild(zipList_container_element);
  }); // fetch END
}

const getAllHobbies = () => {
  fetch("https://medina-projects.dk/HobbyConnect/api/HobbyConnect/hobby")
  .then((response) => {
    return response.json();
  })
  .then((data) => {

    // Reset result section content
    result_section_element.innerHTML = "";

    const hobbyList_1stTr_element = document.createElement("tr");

    const thTxt = ["Id", "Hobby", "Beskrivelse"];

    for(let i = 0; i < thTxt.length; i++){
      let hobbyList_th_element = document.createElement("th");
      hobbyList_th_element.innerHTML = thTxt[i];
      hobbyList_1stTr_element.appendChild(hobbyList_th_element);
    }

    const hobbyList_table_element = document.createElement("table");
    hobbyList_table_element.setAttribute("id", "hobbyList_table");
    hobbyList_table_element.appendChild(hobbyList_1stTr_element);

    data.forEach(hobby => {
      let hobbyRow_tr_element = document.createElement("tr");

      let hobbyId_td_element = document.createElement("td");
      hobbyId_td_element.innerHTML = hobby.id_HobbyDTO;
      hobbyRow_tr_element.appendChild(hobbyId_td_element);

      let hobbyName_td_element = document.createElement("td");
      hobbyName_td_element.innerHTML = hobby.hobby;
      hobbyRow_tr_element.appendChild(hobbyName_td_element);

      let hobbyLink_element = document.createElement("a");
      hobbyLink_element.innerHTML = hobby.desc;
      hobbyLink_element.setAttribute("href",  hobby.desc);
      hobbyLink_element.setAttribute("target", "_blank");

      let hobbyDesc_td_element = document.createElement("td");
      hobbyDesc_td_element.appendChild(hobbyLink_element);
      hobbyRow_tr_element.appendChild(hobbyDesc_td_element);

      hobbyList_table_element.appendChild(hobbyRow_tr_element);
    });

    result_section_element.appendChild(hobbyList_table_element);
  }); // fetch END
}


// --------------------------------- FUNCTIONS INVOKES ---------------------------------

getZip_btn_element.addEventListener("click", (event) =>{
  getAllZip();
});

getHobbies_btn_element.addEventListener("click", (event) =>{
  getAllHobbies();
});


