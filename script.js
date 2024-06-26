const primoBottone = document.getElementById("primoBottone");
const secondoBottone = document.getElementById("secondoBottone");
const contenitoreCard = document.getElementById("contenitoreCard");
/* creazioine delle carte */
const creazioneCarteImg = function (foto) {
  const colDiv = document.createElement("div");
  colDiv.className = "col-md-4";
  const cardDiv = document.createElement("div");
  cardDiv.className = "card mb-4 shadow-sm";
  console.log(foto);
  const img = document.createElement("img");
  img.className = "bd-placeholder-img card-img-top object-fit-cover";
  img.src = foto.src.original;
  img.alt = foto.alt;
  img.style.height = "300px";
  /* evento al click dell'img */
  img.addEventListener("click", () => {
    window.location.href = foto.url;
  });
  cardDiv.appendChild(img);
  const cardBody = document.createElement("div");
  cardBody.className = "card-body";
  const cardTitle = document.createElement("h5");
  cardTitle.className = "card-title";
  cardTitle.textContent = foto.alt;
  /* evento al click del nome dell'img */
  cardTitle.addEventListener("click", () => {
    window.location.href = foto.url;
  });
  cardBody.appendChild(cardTitle);
  const cardText = document.createElement("p");
  cardText.className = "card-text";
  cardText.textContent =
    "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.";
  cardBody.appendChild(cardText);
  const btnGroup = document.createElement("div");
  btnGroup.className = "d-flex justify-content-between align-items-center";
  const groupDiv = document.createElement("div");
  groupDiv.className = "btn-group";
  const viewBtn = document.createElement("button");
  viewBtn.type = "button";
  viewBtn.className = "btn btn-sm btn-outline-secondary";
  viewBtn.id = "viewBottone";
  viewBtn.textContent = "View";
  groupDiv.appendChild(viewBtn);
  const hideBtn = document.createElement("button");
  hideBtn.type = "button";
  hideBtn.className = "btn btn-sm btn-outline-secondary";
  hideBtn.id = "hideBottone";
  hideBtn.textContent = "Hide";
  groupDiv.appendChild(hideBtn);
  /* evento al click per rimuovere la colonna */
  hideBtn.addEventListener("click", () => {
    colDiv.remove();
  });
  btnGroup.appendChild(groupDiv);
  const IdIndicator = document.createElement("small");
  IdIndicator.className = "text-muted";
  IdIndicator.textContent = `id:  ${foto.id}`;
  btnGroup.appendChild(IdIndicator);
  cardBody.appendChild(btnGroup);
  cardDiv.appendChild(cardBody);
  colDiv.appendChild(cardDiv);
  contenitoreCard.appendChild(colDiv);
};
/* evento sul primo bottone */
primoBottone.addEventListener("click", () => {
  contenitoreCard.innerHTML = "";
  fetch("https://api.pexels.com/v1/search?query=natural", {
    method: "GET",
    headers: {
      Authorization: "qc8A6GMApQcUJD9kLAGOx0TBzfKn2zwrKbRt0CPoBXwqHXuQDJXw8B5l",
    },
  })
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error("Errore nel caricamento delle immagini");
      }
    })
    .then((objapi) => {
      console.log(objapi);
      objapi.photos.forEach((element) => {
        creazioneCarteImg(element);
      });
    })
    .catch((err) => console.log(err));
});
/* evento sul secondo bottone */
secondoBottone.addEventListener("click", () => {
  contenitoreCard.innerHTML = "";
  fetch("https://api.pexels.com/v1/search?query=dark", {
    method: "GET",
    headers: {
      Authorization: "qc8A6GMApQcUJD9kLAGOx0TBzfKn2zwrKbRt0CPoBXwqHXuQDJXw8B5l",
    },
  })
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error("Errore nel caricamento delle immagini");
      }
    })
    .then((objapi) => {
      console.log(objapi);
      objapi.photos.forEach((element) => {
        creazioneCarteImg(element);
      });
    })
    .catch((err) => console.log(err));
});
/* barra ricerca */
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  contenitoreCard.innerHTML = "";
  const query = searchInput.value;
  fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}`, {
    method: "GET",
    headers: {
      Authorization: "qc8A6GMApQcUJD9kLAGOx0TBzfKn2zwrKbRt0CPoBXwqHXuQDJXw8B5l",
    },
  })
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error("Errore nel caricamento delle immagini");
      }
    })
    .then((objapi) => {
      console.log(objapi);
      objapi.photos.forEach((element) => {
        creazioneCarteImg(element);
      });
    })
    .catch((err) => console.log(err));
});
