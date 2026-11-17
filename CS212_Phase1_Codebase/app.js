// store the  array of navigation items 
const navigationItems = [
    {
        text: "Homepage Screen",
        target: "#Homepage"
    }, 

    {
        text: "Add Expense",
        target: "#Add_expense"
    },

    {
        text: "Expense History",
        target: "#Expense_history"
    },
];

// create the navigation links from the array
function newNavigation()
{
    // this will clear the navigation items 
    const navMenu = document.getElementById("navMenu");
    
    // gets the html
    navMenu.innerHTML = "";

    // loop through each item in the array
    for(let i = 0; i < navigationItems.length; i++)
    {
        // creates all of the necessary html tags/attributes
        navMenu.innerHTML += `
        <li>
            <a href="${navigationItems[i].target}">
            ${navigationItems[i].text}
            </a>
        </li>`;
    }
}

// when the webpage loads display the navigation 
newNavigation(); 

// scroll feature 
document.addEventListener("click", function(event)
{
    // check if the user clicked one of the navigation items
    if(event.target.tagName === "A")
    {
        // get the id from the html 
        const target = event.target.getAttribute("href");

        // checks if it is the correct Id/attribute from the html 
        if(target.startsWith("#"))
        {
            // prevents the page from jumping to different section on the webpage
            event.preventDefault();

            // creates a smooth effect when going to section
            document.querySelector(target).scrollIntoView(
                {
                    behavior: "smooth"
                });
        }
    }
});

/* This section is going to contain the adding expense code */

// array to store the info
let expenses = [];

// variable will allow the user to change info in expenses
let editElement = -1;

// add expense function
document.getElementById("expenseForm").addEventListener("submit", function(event)
{
    // this will help to prevent the webpage from refreshing immediately
    event.preventDefault();

    // these variables are responisable for getting the information from the user
    const amount = document.getElementById("amount").value;
    const category = document.getElementById("category").value;
    const date = document.getElementById("date").value;
    const notes = document.getElementById("notes").value;

    // this will store the items/create an object which stores the items
    const expense = {
        amount, category, date, notes
    };

    // if the doesn't click the edit button
    if(editElement === -1)
    {
        // put the item in the expense history
        expenses.push(expense);
    }
    // otherwise 
    else
    {
        // user can change the item in the array
        expenses[editElement] = expense;
        editElement = -1; 
    }
    
    // This will prevent the data from being deleted and staying on the local storage 
    // even after you refresh to put other information on there
    localStorage.setItem(
        "expenses",
        JSON.stringify(expenses)
);

    // this is going to print the expense in console log
    console.log(expense);

    // this function here is going to reset the form 
    document.getElementById("expenseForm").reset();

    // call the history expense function
    HistoryExpenses();

})

/* this section here will be used for local storage of the items from the webpage */

// this variable purpose is to create an array that stores the elements
const savedExpenses = JSON.parse(
    
    // this will retrieve info from the local storage that stores expense information
    localStorage.getItem("expenses")
);

// check if the items/elements exist and create the array
if(savedExpenses)
{
    // store the information
    expenses = savedExpenses; 
}


/* This is going be to used for the history expenses */
function HistoryExpenses()
{
    // variable to get/retrieve the id from the html file
    const expenseHistory = document.getElementById("expenseHistory");

    // this going to search the html tags and retrieve them to display
    expenseHistory.innerHTML = "";


    // this is going to loop through all of the content 
    for(let i = 0; i < expenses.length; i++)
    {
        // retrieve the Id then start to create the html tags/attributes
        // It will also place the expense information in the respected order
        expenseHistory.innerHTML += `
        <div class="card">

            <h3>${expenses[i].category}</h3>

            <p>
                <strong>Amount:</strong>
                $${expenses[i].amount}
            </p>
            <p>
                <strong>Date:</strong>
                ${expenses[i].date}
            </p>
            <p>
                <strong>Notes:</strong>
                ${expenses[i].notes}
            </p>

            <button
                class="editBtn"
                data-index="${i}">
                Edit
            </button>

            <button
                class="deleteBtn"
                data-index="${i}">
                Delete
            </button>
        </div>`;
    }
}

/* This function here is part of the add expense, this is going to edit and/or delete items */

// this function is waiting for the user to click the edit button
document.addEventListener("click", function(event)
{
    // this will edit the expenses
    if(event.target.classList.contains("editBtn"))
    {

        // retrieve the existing data for the user to edit the items in the expense history
        editElement = event.target.getAttribute("data-index");

         // get the Id and place the information in amount
        document.getElementById("amount").value = expenses[editElement].amount;

         // get the Id and place the information in category
        document.getElementById("category").value = expenses[editElement].category;

         // get the Id and place the information in date
        document.getElementById("date").value = expenses[editElement].date;

        // get the Id and place the information in notes
        document.getElementById("notes").value = expenses[editElement].notes;
    }


    // this section is going to be resposbile for the delete function
    if(event.target.classList.contains("deleteBtn"))
    {
        // variable to retrieve the information the items
        const deleteIndex = event.target.getAttribute("data-index");

        // this is will take out item from the expense history
        expenses.splice(deleteIndex, 1);

        // this will locate the information in local storage to delete the item
        localStorage.setItem(
            "expenses",
            JSON.stringify(expenses)
        );
        // this will call the history expenses
        HistoryExpenses();
    }
});

// call the expense history function 
HistoryExpenses(); 

