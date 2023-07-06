let img = document.querySelector('img')

const url = ' https://kinopoiskapiunofficial.tech/films/301'
const xhr = new XMLHttpRequest()

xhr.open('GET', url)
xhr.setRequestHeader('API-KEY', 'e065f89a-9759-4b39-a116-2003d164e0f4')



xhr.onload = () => {
    console.log(xhr.response)
}

xhr.send()
