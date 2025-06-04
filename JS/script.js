

//1.Code for giving the cursor a ligh effect
document.addEventListener("mousemove", (e) => {
    const halo = document.querySelector(".halo");
    halo.style.left = `${e.clientX}px`;
    halo.style.top = `${e.clientY}px`;
});

//.1:::::::::::::::::::::::::::::::::::::::::::::::



//2. Code for applying a light theme
    
    //-creating the variables to use in root CSS
const lightTheme = {
    '--color-bg': '#ffffff',
    '--color-text': '#110025',
    '--color-a': '#5f2f91',
    '--color-focus': '#630088',
    '--color-hover': '#bb45ff',
    '--color-box-bg': 'rgba(0, 0, 0, 0.05)',
    '--color-skill-bg-hover': '#e0c4ff55',
    '--color-border': '#a457e33d',
    '--color-s-icon': 'rgba(94, 27, 255, 0.262)',
    '--color-progress-hover': '#bb45ff',
    '--color-msg-bg': 'rgba(240, 240, 255, 0.9)',
  };

    //function to access and change variables values in style.css:root
  function applyTheme(theme) {
    const root = document.documentElement;
    for (let variable in theme) {
      root.style.setProperty(variable, theme[variable]);
    }
    
  }

    let isLightTheme = false;
  
    //code to trigger "applyTheme function" using toggle-theme button, toggle between light them and default them and change button icon

document.getElementById('theme-toggle').addEventListener('click', () => {
  if (!isLightTheme) {
    applyTheme(lightTheme);
    document.getElementById('theme-toggle').innerHTML = `<i class="fa-solid fa-moon"></i>`; 

  } else {
    document.documentElement.removeAttribute('style');
    document.getElementById('theme-toggle').innerHTML = `<i class="fa-solid fa-sun"></i>`;
  }
  
  isLightTheme = !isLightTheme;
});

//.2::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


//3. Creating a hamburger nav menu for smaller screens devives
const hamburger = document.querySelector('.hamburger');
const existingNavLinks = document.querySelectorAll('.nav-bar a');

const mobileNav = document.createElement('div');
mobileNav.classList.add('mobile-nav');

//create a "close" button 
const closeBtn = document.createElement('button');
closeBtn.innerHTML = '&times;';
closeBtn.classList.add('close-btn');
mobileNav.appendChild(closeBtn);


existingNavLinks.forEach(link => {
  const clonedLink = link.cloneNode(true);
  clonedLink.addEventListener('click', () => {
    mobileNav.classList.remove('show');
  });
  mobileNav.appendChild(clonedLink);
});


document.body.appendChild(mobileNav);


hamburger.addEventListener('click', () => {
  mobileNav.classList.add('show');
});


closeBtn.addEventListener('click', () => {
  mobileNav.classList.remove('show');
});


document.addEventListener('click', (e) => {
  const isClickInside = mobileNav.contains(e.target) || hamburger.contains(e.target);
  if (!isClickInside) {
    mobileNav.classList.remove('show');
  }
});

//.3::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::



//4.adding animation to tagline using Javascript instead of CSS

const tagline = `Industrial Engineer | Software Developer Student |
 Part-time Artist`;
const taglineElement = document.getElementById("tagline");
let index = 0;

function typeText() {
  if (index < tagline.length) {
    taglineElement.textContent += tagline.charAt(index);
    index++;
    setTimeout(typeText, 15); 
  }
}

//to activate the animation everytime you refresh the page
window.addEventListener("DOMContentLoaded", typeText);

//.4::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::



//5. Make nav highlight when you click or when you are scroll section

// Nav-bar make active when you are on
const navLinks = document.querySelectorAll('.nav-bar a');
const sections = document.querySelectorAll('section');

//Function to remove active class to links
function removeActiveClasses() {
  navLinks.forEach(link => link.classList.remove('active'));
}

// Function to add 'active' to link 
function setActiveLinkOnScroll() {
  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop - sectionHeight / 4) {
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

//add "active to links while scroll"
window.addEventListener('scroll', setActiveLinkOnScroll);


// get nav-bar links activated when we click on them
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    removeActiveClasses();
    link.classList.add('active');
  });
});

//.5::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::



//6. experience section "show more" experience description button

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

//.6:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


  


//7. Lets build skills section
//- creating an array of objects for skill card
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
        percentage: [80, 75, 50, 20, 80]
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
            "Attention to detail"
        ]
    }
];

//- creating cards using skill list objects information
function createSkillCards() {
    
    const container = document.getElementById("skills-container");

    Skills.forEach(skill => {
        //Creating container
        const card = document.createElement("div");
        card.classList.add("skill-card");

        //creating div and append an icon
        const icon = document.createElement("div");
        icon.classList.add("icon");      
        const iconContent = document.createElement("i");
        iconContent.classList.add(...skill.iconClass.split(' '));  
        icon.appendChild(iconContent);  
        card.appendChild(icon);  

        //append a name for list
        const name = document.createElement("div");
        name.classList.add("skill-name");
        name.textContent = skill.name; 
        card.appendChild(name); 

        //append list of skills
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

//.7::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


//8.Lets fetch github projects

function fetchGitHubRepos() {
    fetch("https://api.github.com/users/Dayiley/repos")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong 😢");
        }
        return res.json();
      })
      .then((repos) => {
        const container = document.getElementById("project-list");
  
        repos.forEach((repo) => {
          const card = document.createElement("div");
          card.className = "repo-card";
  
          //retrieving preview of the site from main folder picture 
          const image = document.createElement("img");
          image.className = "repo-image";
          image.src = `https://raw.githubusercontent.com/Dayiley/${repo.name}/refs/heads/main/preview.png`;
          image.onerror = () => {
            image.src = "https://placehold.co/300x200?text=No+Image&font=montserrat";
          };
          
          //getting repositories information(name, link, description and last updated)
          const info = document.createElement("div");
          info.className = "repo-info";
          info.innerHTML = `
            <a class="repo-name" href="${repo.html_url}" target="_blank">${repo.name} <span>&#8599;</span></a>
            <p>${repo.description || "No description provided."}</p>
            <small>Created: ${new Date(repo.created_at).toLocaleDateString()}</small>
          `;
  
          card.appendChild(image);
          card.appendChild(info);
          container.appendChild(card);
        });
      })
      .catch((error) => {
        const container = document.getElementById("project-list");
        const errorElement = document.createElement("p");
        errorElement.innerText = error.message;
        container.appendChild(errorElement);
      });
  }
  
  fetchGitHubRepos();
//8.:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  
  




//9.'LEAVE A MESSAGE' SECTION
//accesing containers
const showBtn = document.getElementById("show-form-btn");
const messageContainer = document.getElementById("message-container");
const form = document.getElementById("leave-message");
const leftPanel = document.getElementById("message-form");
const rightPanel = document.getElementById("messages");
const messageList = rightPanel.querySelector("ul");

//show leave a message form when click a button
showBtn.addEventListener("click", () => {
    showBtn.style.display = "none";
    messageContainer.classList.add("show"); 
    leftPanel.classList.add("show");
  });
  
  //coding submit button
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    const name = e.target.usersName.value;
    const email = e.target.usersEmail.value;
    const message = e.target.usersMessage.value;

  //display list of messages in a different container
    const newMessage = document.createElement("li");
    newMessage.classList.add("msg")
    newMessage.innerHTML = `
    <div class="displayed-message">
      <a href="mailto:${email}">${name}</a>
      <p>${message}</p>
    </div>
    `;
  
    //code for remove message button 
    const removeBtn = document.createElement("button");
    removeBtn.className = "msg-btn remove";
    removeBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    removeBtn.addEventListener("click", ()=> {
        newMessage.remove();

        if (messageList.children.length === 0) {
        rightPanel.classList.remove("show");
        }
    
    });


    //code for edtit message button
    const editBtn = document.createElement("button");
    editBtn.className = "msg-btn edit";
    editBtn.innerHTML = `<i class="fa-regular fa-pen-to-square"></i>`;
    editBtn.addEventListener("click", () => {
        form.usersName.value = name;
        form.usersEmail.value = email;
        form.usersMessage.value = message;

        newMessage.remove();
        if (messageList.children.length === 0) {
        rightPanel.classList.remove("show");
        }
    });
  
    const btnCont = document.createElement("div");
    btnCont.className = "btn-container";
    

    btnCont.appendChild(editBtn);
    btnCont.appendChild(removeBtn);
    newMessage.appendChild(btnCont);
    messageList.appendChild(newMessage);
  
    
    rightPanel.classList.add("show");
  
    e.target.reset();
  });
//.9::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::



  //10.footer and copyright
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

//.10.:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::



//11.relocate connect container
function relocateSocialIcons() {
    const social = document.getElementById("connect");
    const connect2 = document.getElementById("connect2")
    const staticContainer = document.getElementById("static-container");

    if (window.innerWidth <= 1366) {     
        connect2.appendChild(social);

    } else {
        staticContainer.appendChild(social);
    }
}

// Activate it when we load or redimension
window.addEventListener("load", relocateSocialIcons);
window.addEventListener("resize", relocateSocialIcons);

//.11.::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::