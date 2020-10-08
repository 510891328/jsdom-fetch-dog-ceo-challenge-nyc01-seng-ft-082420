console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function(e){

  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'

  function fetchImg(img){
    return fetch(img)
    .then(resp => resp.json())
    .then(json => {
      for(const imgLink of json.message){
        let img = document.createElement('img')
        img.src = imgLink;
        document.body.appendChild(img)
      }

    })
  }

  function fetchBreed(url){
    return fetch(url)
    .then(resp => resp.json())
    .then(json => {
      let ul = document.getElementById('dog-breeds')
      Object.keys(json.message).forEach(function(key){
        li = document.createElement('li')
        li.innerText = key
        ul.appendChild(li)
      })
    })
  }

  fetchImg(imgUrl);
  fetchBreed(breedUrl);
})
