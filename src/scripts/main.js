import createUser from "./auth/eventListeners.js"
import API from "./auth/data.js"
import renderToDom from "./renderDom.js"
import newsMain from "./articles/main-news.js"
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


/* overallContainer is a dynamically created HTML Element. So to target it we have to do¸
"event.target.value" This is checking to see if register button is clicked then it is going to do
all of those things below and populate the page with the form fields for registration form as
well as checking to make sure nothing is left blank and that passwords match. If the login
button is clicked then it is going to dynamically populate different HTML as also outlined below*/
overallContainer.addEventListener("click", event => {
  if (event.target.id === "register") {
    // we are checking the value of the name label
    let name = document.querySelector("#name").value
    // we are checking the value of the username label
    let username = document.querySelector("#userName").value;
    // we are checking the value of password 1
    let password1 = document.querySelector("#password-1").value;
    // we are checking the value of password 2
    let password2 = document.querySelector("#password-2").value;
    // starting the if statement
    if (password1 !== password2) {
      // if pass 1 isn't equal to pass 2
      alert("Please use the same password")
      // if pass 1 or pass 2 are empty
    } else if (password1 === "" || password2 === "") {
      alert("Please fill the Password Form")
      // if username is empty
    } else if (username === "") {
      alert("Please enter an Username")
    } else if (name === "") {
      // if name is empty
      alert("Please enter your Name")
    } else {
      // newUser will crete an object with the name, username, password1 values
      let newUser = createUser(name, username, password1);
      //this is pulling in all of the users data that we have in database//
      API.getUserData()
        .then(usersArray => {
          let existingUser = usersArray.find(existingUserObj => {
            return existingUserObj.userName === newUser.userName
          })
          if (existingUser) {
            alert("You are already a user!")
          } else {
            // API has a function that will create a new object and translate from the server in order to make it readable for Javascript , in this case a new user. this API function is imported from data.js file that is doing a fetch call to local server//
            API.createUser(newUser).then((user) => {  // response it's a placeholder to call the "users" from JSON database


              sessionStorage.setItem("activeUser", user.id)  // sessionStorage is a builded method. It has different uses: we are using setItem to define the activeUser within the id number belonging to it, from the JSON database.
              renderToDom.renderDashboardDom()
            })
          }
        })
    }
  }
  else if (event.target.id === "login") {
    //we are checking the value of the username label
    let username = document.querySelector("#loginUser").value;
    // we are checking the value of the password label
    let password = document.querySelector("#loginPassword").value;

    if (password === "" || username === "") {
      alert("Please fill out the form")
    }
    else {
      API.getUserData()
        .then(existingUser => {
          let users = existingUser.find(usersObj => {
            return usersObj.userName === username && usersObj.password === password
          })
          if (users) {
            renderToDom.renderDashboardDom()
            sessionStorage.setItem("activeUser", users.id)
            // newsMain.displayAllNews()
            newsMain.invokeAllNewsFunctions()
          } else {
            let okPassword = confirm("Something's gone wrong. click \"Cancel\" to try again OR \"OK\" to register as a new user")
            if (okPassword === true) {
              renderToDom.renderRegistrationDom()
            }

          }
        }
        )
    }
  }
  if (event.target.id === "logout") {
    renderToDom.renderLandingDom()
    sessionStorage.removeItem("activeUser")
  }
})

/*we need to check if user is logged in via session storage and render everything to the
dom and else check if they are clicking register and login. we need to call things in
the correct order of operation. right now it is specific like a,b,c but it some steps should
be available all  the time not only in certain order (like adding new news)-you shouldn't
have to have just logged in to add new news. */