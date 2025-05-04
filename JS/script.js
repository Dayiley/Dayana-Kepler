



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




//relocate connect container
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

        skill.items.forEach((item, index) => {
            const listItem = document.createElement("li");
            listItem.classList.add("skill-item");
        
            const itemText = document.createElement("span");
            itemText.textContent = item;
            listItem.appendChild(itemText);
        
            // adding a horizontal bar next to the text when percentage array exist
            if (skill.percentage && skill.percentage[index] !== undefined) {
                const progressBar = document.createElement("div");
                progressBar.classList.add("progress-bar-inline");
        
                const progress = document.createElement("div");
                progress.classList.add("progress-inline");
                progress.style.width = skill.percentage[index] + "%";
        
                progressBar.appendChild(progress);
                listItem.appendChild(progressBar);
            }    
            
            itemList.appendChild(listItem);
        });

        card.appendChild(itemList);
   
        container.appendChild(card);
    });
}

createSkillCards();



//lets fetch github projects

async function fetchGitHubRepos() {
    const response = await fetch("https://api.github.com/users/Dayiley/repos");
    const repos = await response.json();

    const container = document.getElementById("project-list");
    repos.forEach(repo => {
      const card = document.createElement("div");
      card.className = "repo-card";

      const image = document.createElement("img");
      image.className = "repo-image";
      image.src = `https://raw.githubusercontent.com/Dayiley/${repo.name}/refs/heads/main/preview.png`;
      image.onerror = () => {
        image.src = "https://placehold.co/300x200?text=No+Image&font=montserrat";
      };

      const info = document.createElement("div");
      info.className = "repo-info";
      info.innerHTML = `
        <a class="repo-name" href="${repo.html_url}" target="_blank">${repo.name} <span>&#8599</span></a>
        <p>${repo.description || "No description provided."}</p>
        <small>Last updated: ${new Date(repo.updated_at).toLocaleDateString()}</small>
        
      `;

      card.appendChild(image);
      card.appendChild(info);
      container.appendChild(card);
    });
  }

  fetchGitHubRepos();