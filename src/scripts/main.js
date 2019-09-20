import createUser from "./auth/eventListeners.js"
import API from "./auth/data.js"
import renderToDom from "./renderDom.js"
/*
    Import all the tools into main.js that are needed to display
    the initial UI to the user. Either the login form should appear
    or the dashboard should be rendered.
*/

//Targeting the section with ID container
const overallContainer = document.querySelector("#container")

//Converting string of activeUser into a number
const activeUser = parseInt(sessionStorage.getItem("activeUser"))
//If there is not an active user, populate the registration form
if (!activeUser) {
    renderToDom.renderLandingDom()
//If there IS an active user, populate the log in form
} else {
    renderToDom.renderDashboardDom()
}

//Event listener to populate registration or login form when links are clicked
overallContainer.addEventListener("click", () => {
    if (event.target.id === "landingRegister") {
      renderToDom.renderRegistrationDom()
    } else if (event.target.id === "landingLogin") {
      renderToDom.renderLoginDom()
    }
  })

  
//This is the submit button event listener that checks for passwords//
// document.querySelector(".register").addEventListener("click", event => {
//     // we are checking the value of the name label
//     let name = document.querySelector("#name").value
//     // we are checking the value of the username label
//     let username = document.querySelector("#userName").value;
//     // we are checking the value of password 1
//     let password1 = document.querySelector("#password-1").value;
//     // we are checking the value of password 2
//     let password2 = document.querySelector("#password-2").value;
//     // starting the if statement
//     if (password1 !== password2) {
//         // if pass 1 isn't equal to pass 2
//         alert("Please use the same password")
//         // if pass 1 or pass 2 are empty
//     } else if (password1 === "" || password2 === "") {
//         alert("Please fill the Password Form")
//         // if username is empty
//     } else if (username === "") {
//         alert("Please enter an Username")
//     } else if (name === "") {
//         // if name is empty
//         alert("Please enter your Name")
//     } else {
//         // newUser will crete an object with the name, username, password1 values
//         let newUser = createUser(name, username, password1);
//         // API has a function that will create a new object and translate from the server in order to make it readable for Javascript , in this case a new user. this API function is imported from data.js file that is doing a fetch call to local server//
//         API.createUser(newUser).then((user) => {  // response it's a placeholder to call the "users" from JSON database


//             sessionStorage.setItem("activeUser", user.id)  // sessionStorage is a builded method. It has different uses: we are using setItem to define the activeUser within the id number belonging to it, from the JSON database.

//             document.querySelector("#welcome").innerHTML = `<h2> Welcome in the website ${newUser.name}</h2>`
//         })

//     }
// })

// //This is the login button event listener that checks for passwords//
// document.querySelector(".signin").addEventListener("click", event => {
//     // we are checking the value of the username label
//     let username = document.querySelector("#loginUser").value;
//     // we are checking the value of the password label
//     let password = document.querySelector("#loginPassword").value;

//     if (password || username === "") {
//         alert("Please fill out the form")
//     }
// })