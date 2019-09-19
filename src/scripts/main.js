/*
    Import all the tools into main.js that are needed to display
    the initial UI to the user. Either the login form should appear
    or the dashboard should be rendered.
*/

const message = "Welcome to Bangazon. Please complete the registration form below."

//HTML Component for the Registration Form//
document.querySelector("#container").innerHTML = `<h1>${message}</h1>
<form>
<fieldset>
<label for="username">Username</label>
<input type="text" id="userName" placeholder="please enter username or email">
<label for="password">Password</label>
<input type="password" id="password-1" placeholder="please enter a valid password">
<label for="password">Re-Enter Password</label>
<input type="password" id="password-2" placeholder="please re-enter your password">
<button class="submit" type="button">Register Now</button>
</fieldset>
</form>
`

console.log(message)
//This is the submit button event listener that checks for passwords//
document.querySelector (".submit").addEventListener("click", event =>  {
    let password1 = document.querySelector("#password-1").value;
    let password2 = document.querySelector("#password-2").value;
    console.log(password1)
    console.log(password2)
    })
