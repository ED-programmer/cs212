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

// Function to call the DayUntilDeadline
const daysRemaining = dayUntilDeadline("March 12, 2027");

// Display the message in the webpage
document.getElementById("deadlineInfo").textContent =
"Days remaining : " + daysRemaining;


/* add skills to the through the input */

// variable to hold/ get the input id attribute 
const skillInput = document.getElementById("skillInput");

// variable to get the input from clicking the button tag
const addSkillbutton = document.getElementById("addSkillButton");

// variable the hold/get the list of item
const SkillList = document.getElementById("List");

// when the user clicks the button triggers the event listener
addSkillbutton.addEventListener("click", function(){

    // variable store the value 
    const skill = skillInput.value; 

    // if the condition does not equal the value
    if(skill !== ""){

        // if condition is true create new list item
        const newSkill = document.createElement("li");
        
           // return the content inside of the element
           newSkill.textContent = skill;
          
           // the item will be included into the webpage
           SkillList.appendChild(newSkill);

        // item is appended on the webpage
        skillInput.value = ""; 
    }
});

// project list for the hw8 assignment 

// this will hold the array list 
const projectTitles = ["Text-Based Game", "Bikeshop Database",
                       "Secure Password Manager"
];

// store the description of the projects in a array
const projectDescription = ["Python game where the players choices affects the story.",
                            "Database project created using MySQL",
                            "Application to secure passwords for users"
];

// store the deadlines of each project
const projectDeadlines = ["2026-12-20", "2027-01-23", "2027-03-12"];

// retrieve the id from the html file
const projectList = document.getElementById("projectList");

// loop through the arrays 
for(let i = 0; i < projectTitles.length; i++)
{
    
    // create a new element that is div tag 
    const project = document.createElement("div");

    // get current date 
    const currentDate = new Date();

    // project deadline 
    const deadline = new Date(projectDeadlines[i]);

    // variable to store the status of project 
    let status; 

    // compare the dates from today until due date
    if(deadline > currentDate)
    {
        // hold a value in the variable
        status = "Ongoing"; 
    }
    // if date has passed then print completed
    else if(deadline < currentDate)
    {
        status = "Completed";
    }
    // otherwise
    else if(deadline === currentDate)
    {
        status = "Needs To Be Completed Today"; 
    }

    // display project information on the project showcase section
    project.innerHTML = "<h3>" + projectTitles[i] + "</h3>" +
                        "<p>Description: " + projectDescription[i] +
                        "</p>" + "<p>Deadline: " + projectDeadlines[i] +
                        "</p>" + "<p>Status: " + status + "</p>";

    // include the code into the webpage
    projectList.appendChild(project); 
}

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
