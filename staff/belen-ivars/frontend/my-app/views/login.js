var loginView = document.getElementById('login-view')

// loginView.style.display = 'none'

var loginRegisterLink = loginView.querySelector('a')

loginRegisterLink.onclick = function (event) {
    event.preventDefault()

    loginView.style.display = 'none'
    registerView.style.display = 'block'
}

var loginForm = loginView.querySelector('form')


loginForm.onsubmit = function (event) {
    event.preventDefault()

    var emailInput = loginForm.querySelector('#email-input')
    var passwordInput = loginForm.querySelector('#password-input')

    var email = emailInput.value
    var password = passwordInput.value

    try {
        authenticateUser(email, password)

        emailInput.value = ''
        passwordInput.value = ''

        var user = retrieveUser(email)

        profilelink.innerText = user.name

        emailLoggedIn = email

        loginView.style.display = 'none'
        homeView.style.display = 'block'
    } catch (error) {
        alert(error.message)
    }
}