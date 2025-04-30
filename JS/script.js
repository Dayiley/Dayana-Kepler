



//halo
document.addEventListener("mousemove", (e) => {
    const halo = document.querySelector(".halo");
    halo.style.left = `${e.clientX}px`;
    halo.style.top = `${e.clientY}px`;
});


// Nav-bar make active when you are on
const navLinks = document.querySelectorAll('.nav-bar a');
const sections = document.querySelectorAll('section');

function removeActiveClasses() {
  navLinks.forEach(link => link.classList.remove('active'));
}

// Function to add 'active' to link 
function setActiveLinkOnScroll() {
  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute('id');
    }
  });

  removeActiveClasses();
  navLinks.forEach(link => {
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
}


window.addEventListener('scroll', setActiveLinkOnScroll);

// get nav-bar links activated when we click on them
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    removeActiveClasses();
    link.classList.add('active');
  });
});

window.addEventListener('load', () => {
    if (window.location.hash) {
      history.replaceState(null, null, window.location.pathname);
    }
    window.scrollTo(0, 0);
  });






//experience "show more" button
document.querySelectorAll('.show-experience-btn').forEach(button => {
    button.addEventListener('click', function() {
      toggleDescription(this);
    });
  });

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
        connect2.appendChild(social);
    } else {
        staticContainer.appendChild(social);
    }
}

// Activate it when we load or redimension
window.addEventListener("load", relocateSocialIcons);
window.addEventListener("resize", relocateSocialIcons);


//Lets build skills section
//1. creating an array of objects 
let Skills = [
    {
        name: "Web Development",
        iconClass: "fa-solid fa-laptop-code",
        items: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Responsive Design"
        ],
        percentage: [80, 75, 50, 20, 90]
    },
    {
        name: "Softwares and Tools",
        iconClass:"fa-solid fa-gears",
        items: [
            "Git and Github",
            "Visual Studio Code",
            "Chrome DevTools",
            "Excel (Advanced)",
            "Photoshop"
        ]
    },
    {
        name: "Engineering",
        iconClass: "fa-solid fa-chart-line",
        items: [
            "Six Sigma (DMAIC methodology)",
            "Process Automation",
            "Quality Control",
            "Data Analysis",
            "Technical Documentation"
        ]
    },
    {
        name: "Soft Skills",
        iconClass: "fa-solid fa-users",
        items: [
            "Work Ethic",
            "Cultural Awareness",
            "Resourcefulness",
            "Time Management",
            "Spanish Fluency"
        ]
    }
];

//2. creating cards using skill list objects information
function createSkillCards() {
    const container = document.getElementById("skills-container");

    Skills.forEach(skill => {
        
        const card = document.createElement("div");
        card.classList.add("skill-card");

        
        const icon = document.createElement("div");
        icon.classList.add("icon");
        
        
        const iconContent = document.createElement("i");
        iconContent.classList.add(...skill.iconClass.split(' '));  

        icon.appendChild(iconContent);  
        card.appendChild(icon);  

        const name = document.createElement("div");
        name.classList.add("skill-name");
        name.textContent = skill.name; 
        card.appendChild(name);

       
        const itemList = document.createElement("ul");
        itemList.classList.add("items");

        skill.items.forEach(item => {
            const listItem = document.createElement("li");
            listItem.textContent = item; 
            itemList.appendChild(listItem);
        });
        card.appendChild(itemList);

        container.appendChild(card);
    });
}

createSkillCards();