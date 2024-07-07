const scriptURL = 'https://script.google.com/macros/s/AKfycbwKt0CED8LTNPFO3YPKNvlI-gBYiG8iKPdDChtEdHxymTnD8G81GzTUS6Z7mQJJn1ZfAw/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("We've received your submission."))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
})