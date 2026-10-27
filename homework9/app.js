// This code prints out the hello world 
console.log("Hello, World!"); 

// This going store the owner's name
const name = "Eaonnes"; 

// this will check if the resume has been download
let downLoadCount = 0;

// this variable will get the id for the resume
// then it will pass it to the function
const resumeButton = 
document.getElementById("jsResumeDownload");

// Function is going to display the message
resumeButton.addEventListener("click", function(event){
      
    // this is going to check the code below
    // then excecute if the use clicks resume 
    // when clicked it will delay the message  
    event.preventDefault();
    
    // incremeant the count by 1 
    downLoadCount++; 

    // get the Id then display the amount of times the 
    // resume was downloaded
    document.getElementById("downLoadCount").textContent =
        "Downloads: " + downLoadCount;
      
        // set time out will wait a few seconds
        // then run function below
        setTimeout(function(){
            // this will display the message 
            alert("Your resume is downloaded successfully"); 
        }, 2000);
        
       // this will open the resume in a different tab
        window.open(
            resumeButton.href,
            "_blank"
        );
    
});

// Function will display greeting message to viewer
function showGreeting(name){
    
    // this will use the user current day of time 
    // it will be used in the code below. 
    const currentHour = new Date().getHours();
    
    // this creates a changeable variable 
    // this will go into the if condition
    let greeting;

    // if it is less than 12 
    // print good morning  
    if(currentHour < 12){
        greeting = "Good Morning";
    }
    // if first condition is false 
    // print good afternoon
    else if(currentHour < 18){
        greeting = "Good Afternoon";
    }
    // if the first two are false 
    // print good evening
    else{
        greeting = "Good Evening";
    }
    
    // return message
    return greeting + "," + " my name is " + name + 
           "! Welcome to my portfolio!";
} 

// variable will call the function message
const greetingMessage = showGreeting(name);

// this will go through the html to 
document.getElementById("greeting").textContent =
greetingMessage;

// this will call/print the greeting
// for the currenthour in the message
console.log("Greeting Element:",
    document.getElementById("greeting"));

// This is for the test project in project showcase 

// Calculate the number of days until the deadline
function dayUntilDeadline(deadlineDate){

    // this is going to take the user current time
    const currentDate = new Date();
    
    // this is will take how many days until deadline
    const deadline = new Date(deadlineDate);
    
    // this will subtract the difference from current and deadline
    const difference = deadline - currentDate;
    
    // this will take the time convert the time to days
    const daysLeft = Math.ceil(difference / (1000 * 60 * 60 * 24));
    
    // return the daysleft
    return daysLeft;

}

/* add skills to the through the input (updated version for hw9) */

// declare variable 
let skills = [
    "Python",
    "MySQL"
];

// this functions is going to display the skills on the webpage
function updatedSkills()
{
    // this going to clear the current list before creating it
    $("#skillsList").empty();
    
    // loop through the skiill stored in the let variable
    for(let i = 0; i < skills.length; i++)
    {
        // add the skills on the webpage
        $("#skillsList").append(
            
            // create the tags to include the info on there 
            "<li>" +
               skills[i] + 

               // this will create a edit button
               "<button class='editBtn' data-index='" + 
               i +
               "'>Edit</button> " +
               
               // this will create a delete button
               " <button class='deleteBtn' data-index='" +
               i +
               "'>Delete</button>" +

            "</li>"
        );
    };
};

// search button for skills
function filterSkills(searchText)
{
   // clear the current skills before showing them
    $("#skillsList").empty(); 

    // go through all of the skills in the array
    for(let i = 0; i < skills.length; i++)
    {
        // checks if the content is in the array
        if(
            skills[i].toLowerCase().includes(
                searchText.toLowerCase()
            )
        )
        {
            // display only the skill that matches from the search
            $("#skillsList").append(
               // creates/uses the tag that matches from search
                "<li>" + 
                skills[i] +

                // edit button
                "<button class='editBtn' data-index='" + 
                i + 
                "'>Edit</button>" + 

                // delete button 
                "<button class='deleteBtn' data-index='" +
                i + 
                "'>Delete</button>" +

                "</li>"  
            );
        }
    }
}

// search input function in the search box
$("#skillSearch").on("input",function()
{
    // store user input
    let search = $(this).val();

    // checks if the box is empty
    if(search === "")
    {
        // show all skills
        updatedSkills(); 
    }
    // otherwise
    else
    {
        // continue to filiter skill list
        filterSkills(search);
    }
});

// this will call back the skill 
function addSkill(skill)
{
    // include skill 
    skills.push(skill);

    // call the updated function
    updatedSkills();
}

// validate the skill 
function validateSkill(skill, callback)
{
    // remove the whitespace around the string
    skill = skill.trim(); 

    // if the user has entered something
    if(skill === "")
    {
        // display alert - enter skill 
        alert("Please enter a skill"); 
        return;
    }

    // check if the skill already exists in the array
    if(
        skills.some(
            s => s.toLowerCase() === skill.toLowerCase()
        )
    )
    {
        // displays alert if skill exists
        alert("Skills already exists");
        return; 
    }
    // return the callback for the function
    callback(skill);
}

// add the skill to webpage 
$("#addSkillButton").click(function()
{
    // variable that can change 
    let skill = $("#skillInput").val();

    // check the skill before adding it
    validateSkill(skill, addSkill);

    // clear the textbox after processing it
    $("#skillInput").val(""); 
});

// event listern for skill section hw9 
$("#skillInput").keydown(function(event)
{
    // add skill if the user clicks enter
    if(event.key === "Enter")
    {
        // get the skill entered by user
        let skill = $("#skillInput").val();
        
        // clarify the skill then add it
        validateSkill(skill, addSkill);

        // clear the textbox after adding it
        $("#skillInput").val("");
    }

    // if user clicks escape clear textbox
    if(event.key === "Escape")
    {
        $("#skillInput").val("");
    }

});


// edit the skill list
$(document).on(
    "click", ".editBtn", function()
    {
        // get the position of the skill 
        let index = $(this).data("index");
        
        // get the replacement skill
        let newSkill = $("#skillInput").val();
    
        // checks to make sure replacement is not blank/empty
        if(newSkill.trim() !== "")
        {
            // replace the old skill 
            skills[index] = newSkill;

            // display array in the console browser
            console.log(skills);

            // this will update the values in the array
            updatedSkills(); 

            // clear textbox after editing 
            $("#skillInput").val("");
        }
    }
);

// create a delete function for the skills list 
$(document).on(
    "click", ".deleteBtn", function()
    {
        // find the location of the skill
        let index = $(this).data("index");

        // this will animate the skill being deleted from the list
        $(this).parent().slideUp(function()
        {
            // remove skill from the array
            skills.splice(index, 1); 

            // updated the skill list
            updatedSkills(); 
        });
    }
);


// display message on webpage
updatedSkills();

// project list for the hw9 assignment updated version 

// store the array of objects 
const projects = [

    {
        title: "Text-Based Game",

        description: "Python game where the players choices affects the story.",

        deadline: "2026-12-20",

        imageURL: "Text base game.png",
    },


    {
        title:"Bikeshop Database", 

        description: "Database project created using MySQL",

        deadline: "2027-01-23",

        imageURL: "Bikeshop Project .png",

    },

    {
        title:"Secure Password Manager",

        description: "Application to secure passwords for users",

        deadline: "2027-03-12",

        imageURL: ""
    }
];

// create the projects cards from the project array 
function updatedProjects()
{
    // clears the existing project and replaces it with the new html content
    $("#projectList").empty();

    // loop through every project array of objects
    for(let i = 0; i < projects.length; i++)
    {
        // create and display the bootstrap card 
        $("#projectList").append(
            // create a boostrap container 
            "<div class='card mb-3' style='width:18rem;'>" + 

               // display project image
               "<img src='" + 
               projects[i].imageURL + 
               "' class='card-img-top'>" + 

               // begin card content section
               "<div class='card-body'>" + 

                 // display title 
                  "<h5 class='card-title'>" + 
                  projects[i].title +
                  "</h5>" + 

                  // display project description
                  "<p class='card-text'>" +
                  projects[i].description + 
                  "</p>" +

                  // display the deadline 
                  "<p>" +
                  "Deadline: " + 
                  projects[i].deadline + 
                  "</p>" + 

                 "</div>" + 
            "</div>"
        );
    }
}

// sort the projects 
$("#sortProject").click(function()
{
    // sort the project array from begininng to end until the deadline object
    projects.sort(function(a,b)
    {
        return new Date(a.deadline) - new Date(b.deadline);
    });
    
    //redisplay the projects after the sorting of items  
    updatedProjects();   
});

// display the project items on the webpage
updatedProjects();

// this section is going to create the two table for education and experience section

// this is the education table section

// stores the degree array
const degrees = [
    "Public Health"
];

// store the school array
const schools = [
    "Northern Arizona University"
];

// stores the time I completed the degree
const completionDate = [
    "2023"
];

// create the education table
const educationTable = document.createElement("table");

// create the hover effect for the table 
educationTable.className = "table table-striped table-hover";

// actual table for the education part
educationTable.innerHTML = 
"<tr>" + 
   "<th>Degree</th>" +
   "<th>Institution</th>" + 
   "<th>Date</th>" +
"</tr>";

// loop through the education arrays 
for(let i = 0; i < degrees.length; i++)
{
    // create the row element/tag
    const row = document.createElement("tr");

    // this creates the individual rows the information in the table 
    row.innerHTML = 
    "<td>" + degrees[i] + "</td>" +
    "<td>" + schools[i] + "</td>" +
    "<td>" + completionDate[i] + "</td>";

    // place all the conten in its repected spot or area in the rows 
    // below the head of the title
    educationTable.appendChild(row);
}
// display the information on the webpage
document.getElementById("educationTable").appendChild(educationTable);


// this is the experience table section

// create an array for the job title
const jobTitle = [
    "Intern"
];

// create an array company
const companies = [
    "NAU Environmental Health and Safety"
];

// create an array for date 
const experienceDate = [
    "1 Year"
]

// create the table for the experience section 
const experienceTable = document.createElement("table");

// create the hover effect for the head of the table
experienceTable.className = "table table-striped table-hover";

// this will create the table rows for the head of the table
experienceTable.innerHTML = 
"<tr>" + 
   "<th>Job Title</th>" +
   "<th>Company</th>" + 
   "<th>Date</th>" +
"</tr>";

// loop through the education arrays 
for(let i = 0; i < jobTitle.length; i++)
{
    // create the element for the row
    const row = document.createElement("tr");

    // implement the content inside of the row
    row.innerHTML = 
    "<td>" + jobTitle[i] + "</td>" +
    "<td>" + companies[i] + "</td>" +
    "<td>" + experienceDate[i] + "</td>";
    
    // place the content into the repsected places or below the titles 
    experienceTable.appendChild(row);
}
// display the table on the webpage
document.getElementById("experienceTable").appendChild(experienceTable);


// get Id from HTML that creates the button
const themeButton = document.getElementById("themeButton");

// start with the light mode 
document.body.classList.add("light-theme");

// toggle the effect/theme 
themeButton.addEventListener("click", function(){

    // if user wants to switch from light theme to dark theme
    if(document.body.classList.contains("light-theme"))
    {
        // for this it will remove light theme to switch to dark theme
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");
    }
    // otherwise
    else
    {
        // for this code it will remove the dark theme and use light theme
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
    }
});

// get the color change in html
const bgColor = document.getElementById("bgColor");

// change background color instantly
bgColor.addEventListener("input", function(){
    
    // allows the user to change the color
    document.body.style.backgroundColor = bgColor.value;         
});


// font size format for the webpage
const fontInput = document.getElementById("fontSize");

// event listern/function that triggers when activiated 
fontInput.addEventListener("input", function(){
    
    // when number is inputed increase/decrease the font size
    document.body.style.fontSize = fontInput.value + "px";

});

// navigation section for hw9 

// store the  array of navigation items 
const navigationItems = [
    {
        text: "Introduction", 
        target: "#introduction"
    },

    {
        text: "Skills Section",
        target: "#skills"
    }, 

    {
        text: "Project Showcase",
        target: "#showcase"
    },

    {
        text: "Education and Experience",
        target: "#education"
    },

    {
        text: "Download Resume",
        target: "#resume_info"
    },

    {
        text: "Contact Information",
        target: "#footer"
    }
];

// create the navigation links from the array
function newNavigation()
{
    // this will clear the navigation items 
    $("#navMenu").empty(); 

    // loop through each item in the array
    for(let i = 0; i < navigationItems.length; i++)
    {
        // add the links to the navigation items
        $("#navMenu").append(
            
            // create the bootstrap feature
            "<a class='nav-link' href='" +
            
            // assign the target section to hyperlink 
            navigationItems[i].target +
            "'>" + 
            
            // display the navigation text
            navigationItems[i].text +
            "</a>"
        );
    }
}

// when the webpage loads display the navigation on the left side
newNavigation(); 

// scroll feature 
$(document).on("click", "#navMenu a", function(event)
{
    // prevents the browser from jumping into the next section
    event.preventDefault();

    // store the destination section of the link
    let target = $(this).attr("href");

    // this allows for a smooth scroll to the selected section
    $("html, body").animate(
        {
            // get the vertical position of the target section
            scrollTop: $(target).offset().top
        },1000
    );
});
