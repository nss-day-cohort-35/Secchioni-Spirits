/*this function is creating a user that is holding the values of name, username, password which we will use on the event
listener function */

const createUser = (name, username, password) => {
    const newUser = {
        name: name,
        userName: username,
        password: password
    }
    return newUser
}

export default createUser