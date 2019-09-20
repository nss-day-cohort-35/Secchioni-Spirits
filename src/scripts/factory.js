const factoryHTML = {
    landingPageHTML(){
        return `
        <div id="welcome">
        <div id="logo"></div>
        <h1>Welcome to Bangazon</h1>
        <div id="nav-container">
        <a href="#" id="landingRegister">Register</a>
        <a href="#" id="landingLogin">Log In</a>
        </div>
      </div>`
    },
    registerHTML(){
        return `
        <form class="registration">
        <fieldset>
        <label for="name">First and Last name:</label>
        <input type="text" id="name" placeholder="please enter your first and last name">
        <label for="username">Username:</label>
        <input type="text" id="userName" placeholder="please enter username or email">
        <label for="password">Password:</label>
        <input type="password" id="password-1" placeholder="please enter a valid password" autocomplete="on">
        <label for="password">Re-Enter Password:</label>
        <input type="password" id="password-2" placeholder="please re-enter your password" autocomplete="on">
        <button class="register" type="button">Register Now!</button>
        </fieldset>
        </form>
        `
    },
    loginHTML(){
        return `
        <form class="login">
        <fieldset>
        <label for="username">Username:</label>
        <input type="text" id="loginUser" placeholder="please enter your username">
        <label for="password">Password:</label>
        <input type="password" id="loginPassword" placeholder="please enter your password" autocomplete="on">
        <button class="signin" type="button">Sign In</button>
        </fieldset>
        </form>
        `
    },
    dashboardHTML(){
        return `
        <header>
        <h1>Welcome</h1>
        </header>
        `
    }
}

export default factoryHTML