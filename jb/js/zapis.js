const form = document.getElementById('form')
const name = document.getElementById('name')
const number = document.getElementById('number')
const email = document.getElementById('email')
const course = document.getElementById('course')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (name.value === '' || name.value == null) {
    messages.push('Name is required')
  }
  if (number.value === '' || number.value == null) {
    messages.push('Number is required')
  }
  if (email.value === '' || email.value == null) {
    messages.push('Email is required')
  }
  if (course.value === '' ) {
    messages.push('Course is required')
  }
  if (name.value.length != '' && name.value.length < 3) {
    messages.push('Name is less than 3 characters')
  }
  if (name.value.length != '' && name.value.length >= 20) {
    messages.push('Name is too long')
  }
  if (email.value.length != '' && email.value.length < 8) {
    messages.push('Email is less than 8 characters')
  }
  if (email.value.length != '' && email.value.length >= 30) {
    messages.push('Email is too long')
  }
  if (number.value.length != '' && number.value.length != 12) {
    messages.push('Number is incorrect')
  }




  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(',  ')
  }
})
