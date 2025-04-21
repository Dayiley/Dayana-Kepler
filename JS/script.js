
//halo
document.addEventListener("mousemove", (e) => {
    const halo = document.querySelector(".halo");
    halo.style.left = `${e.clientX}px`;
    halo.style.top = `${e.clientY}px`;
});

//experience "show more" button
function toggleDescription(button) {
    const description = button.previousElementSibling;
  
    description.classList.toggle("expanded");
    button.textContent = description.classList.contains("expanded")
      ? "Show less ▲"
      : "Show more ▼";
  }


  //footer and copyright
  /*Create footer year and copyright*/
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.createElement("footer");
footer.className = "content-footer"
const scrollContainer = document.getElementById("scroll-container")
const copyright = document.createElement("p");
copyright.innerHTML = `<small> This portfolio was buildt with love by Dayana Leyva &copy; ${thisYear}</small>`;

footer.appendChild(copyright);
scrollContainer.appendChild(footer);


//mover el connect container
function relocateSocialIcons() {
    const social = document.getElementById("connect");
    const connect2 = document.getElementById("connect2")
    const staticContainer = document.getElementById("static-container");

    if (window.innerWidth <= 1024) {
        // Mover al final del scroll container
        connect2.appendChild(social);
    } else {
        // Volver al static container
        staticContainer.appendChild(social);
    }
}

// Llamar al cargar y al redimensionar
window.addEventListener("load", relocateSocialIcons);
window.addEventListener("resize", relocateSocialIcons);

