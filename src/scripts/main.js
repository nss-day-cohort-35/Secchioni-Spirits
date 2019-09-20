import createUser from "./auth/eventListeners"
import API from "./auth/data"

/*
    Import all the tools into main.js that are needed to display
    the initial UI to the user. Either the login form should appear
    or the dashboard should be rendered.
*/

const message = "Welcome to Bangazoon, please fillout the form"

//HTML Component for the Registration Form//
document.querySelector("#container").innerHTML = `<h1>${message}</h1>
<form>
<fieldset>
<label for="name">First and Last name:</label>
<input type="text" id="name" placeholder="please enter your first and last name">
<label for="username">Username:</label>
<input type="text" id="userName" placeholder="please enter username or email">
<label for="password">Password:</label>
<input type="password" id="password-1" placeholder="please enter a valid password" autocomplete="on">
<label for="password">Re-Enter Password:</label>
<input type="password" id="password-2" placeholder="please re-enter your password" autocomplete="on">
<button class="submit" type="button">Register Now!</button>
</fieldset>
</form>
`


//This is the submit button event listener that checks for passwords//
document.querySelector(".submit").addEventListener("click", event => {
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
        // API has a function that will create a new object and translate from the server in order to make it readable for Javascript , in this case a new user. this API function is imported from data.js file that is doing a fetch call to local server//
        API.createUser(newUser).then((user) => {  // response it's a placeholder to call the "users" from JSON database


            sessionStorage.setItem("activeUser", user.id)  // sessionStorage is a builded method. It has different uses: we are using setItem to define the activeUser within the id number belonging to it, from the JSON database.

            document.querySelector("#welcome").innerHTML = `<h2> Welcome in the website ${newUser.name}</h2>`
        })

    }
})
