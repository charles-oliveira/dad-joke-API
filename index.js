const jokeEl = document.querySelector('#joke')
const btn = document.querySelector('#btn')

const apiKey = 'FXqdRLDPstXS0/HP171gxA==DdE1bXmWUc8RhXZI'
const apiURL = 'https://api.api-ninjas.com/v1/dadjokes?limit=1'

const options = {
    method: 'GET',
    headers: {
        'X-Api-Key': apiKey
    }
}

async function generateJoke() {
    try {
        jokeEl.innerText = 'Updating...'
        btn.disabled = true
        const response = await fetch(apiURL, options) 
        const data = await response.json()
        btn.disabled = false
        btn.innerText = 'Tell me a joke'

        jokeEl.innerText = data[0].joke
    } catch (error) {
        btn.disabled = false
        btn.innerText = 'Tell me a joke'
        jokeEl.innerText = `An ${error} happened, try again later`

    }

    // Limpar o código 
    // Reescrever usando jQuery
   
}

btn.addEventListener('click', generateJoke)