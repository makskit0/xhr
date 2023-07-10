let content = document.querySelector('.content')
let wrap = document.querySelector('.content__wrap')
const url = ' https://kinopoiskapiunofficial.tech/api/v2.2/films/top'

let xhr = new XMLHttpRequest()
xhr.open('GET', url)
xhr.setRequestHeader('X-API-KEY', 'e065f89a-9759-4b39-a116-2003d164e0f4')
xhr.setRequestHeader('Content-Type', 'application/json')

xhr.onload = () => {
    let data = JSON.parse(xhr.response).films
    let films = data.forEach(film => {
        console.log(film)
    })
    let wrap = document.createElement('div')
    wrap.classList.add('content__wrap')
    let card = document.createElement('div')    
    card.classList.add('content__card')
    let image = document.createElement('img')
    let a = document.createElement('a')
    a.classList.add('content__img')
    let title = document.createElement('div')
    title.classList.add('content__title')
    let info =  document.createElement('div')
    info.classList.add('content__info')
    
    content.append(wrap)
    wrap.append(card)
    card.append(a)
    a.append(image)
    card.append(title)
    card.append(info)

    image.src = data[0].posterUrl
    title.innerHTML = 'Название : ' + data[0].nameRu
    info.innerHTML = ' Год выпуска: ' + data[0].year 



    


}

xhr.send()
