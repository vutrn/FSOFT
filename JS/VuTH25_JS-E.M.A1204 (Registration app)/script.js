const inputUsername = document.querySelector('#username')
const inputPassword = document.querySelector('#password')
const inputConfirmPwd = document.querySelector('#confirmPwd')
const button = document.querySelector('button')
const h1 = document.querySelector('h1')

const errorUsername = document.createElement('span')
inputUsername.insertAdjacentElement('afterend', errorUsername)

const errorPassword = document.createElement('span')
inputPassword.insertAdjacentElement('afterend', errorPassword)

const errorConfirmPwd = document.createElement('span')
inputConfirmPwd.insertAdjacentElement('afterend', errorConfirmPwd)

inputUsername.addEventListener('input', (e) => {
  if (e.target.value === '') {
    errorUsername.textContent = 'Username is required'
    errorUsername.style.color = 'red'
  } else {
    errorUsername.textContent = ''
  }
})

inputPassword.addEventListener('input', (e) => {
  if (e.target.value === '') {
    errorPassword.textContent = 'Password is required'
    errorPassword.style.color = 'red'
  } else {
    errorPassword.textContent = ''
  }
})

inputConfirmPwd.addEventListener('input', (e) => {
  if (e.value === '') {
    errorConfirmPwd.textContent = 'Confirm Password is required'
    errorConfirmPwd.style.color = 'red'
  } else if (inputPassword.value !== e.target.value) {
    errorConfirmPwd.textContent = 'Password does not match'
    errorConfirmPwd.style.color = 'red'
  } else {
    errorConfirmPwd.textContent = ''
  }
})

button.addEventListener('click', (e) => {
  e.preventDefault()

  // Validate all fields
  let isValid = true

  if (inputUsername.value === '') {
    errorUsername.textContent = 'Username is required'
    errorUsername.style.color = 'red'
    isValid = false
  }

  if (inputPassword.value === '') {
    errorPassword.textContent = 'Password is required'
    errorPassword.style.color = 'red'
    isValid = false
  }

  if (inputConfirmPwd.value === '') {
    errorConfirmPwd.textContent = 'Confirm Password is required'
    errorConfirmPwd.style.color = 'red'
    isValid = false
  } else if (inputPassword.value !== inputConfirmPwd.value) {
    errorConfirmPwd.textContent = 'Password does not match'
    errorConfirmPwd.style.color = 'red'
    isValid = false
  }

  if (isValid) {
    const p = document.createElement('p')
    h1.insertAdjacentElement('afterend', p)
    p.textContent = "You have successfully registered"
    p.style.color = 'green'
  }
})