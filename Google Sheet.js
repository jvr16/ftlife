const scriptURL = 'https://script.google.com/macros/s/AKfycbwbJhjz4VzATzxr-7_dcbNdnOCwsYgQuHcO7H8Ayyibj22B8XxP_YcUav6amhtM2fWJaw/exec'

const form = document.forms['submission-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("We've received your submission."))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
})
