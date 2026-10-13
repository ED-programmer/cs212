// This code prints out the hello world 
console.log("Hello, World!");

// This going store the owner's name
const name = "Eaonnes"; 

// this will check if the resume has been download
let hasDownloadedResume = false;

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

    // if the resume does not equal true
    // contiune through the if statement 
    if(hasDownloadedResume === false){
      
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

        // if the message plays don't display again
        hasDownloadedResume = true; 
    } 
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
    
    // this will subtract the difference from  cur
    const difference = deadline - currentDate;
    
    // This will take the time convert the time to days
    const daysLeft = Math.ceil(difference / (1000 * 60 * 60 * 24));
    
    // return the daysleft
    return daysLeft;

}

// Function to call the DayUntilDeadline
const daysRemaining = dayUntilDeadline("March 12, 2027");

// Display the message in the webpage
document.getElementById("deadlineInfo").textContent =
"Days remaining : " + daysRemaining;


