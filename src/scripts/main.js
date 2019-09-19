/*
    Import all the tools into main.js that are needed to display
    the initial UI to the user. Either the login form should appear
    or the dashboard should be rendered.
*/

const message = "Welcome to Bangazoon, please fillout the form"

document.querySelector("#container").innerHTML = `<h1>${message}</h1>`

console.log(message)
