const url = 'https://dog.ceo/api/breeds/image/1'
const dogImg = document.querySelector('[data-js="dog-img"]')

const validateHTTPStatus = dogdata => {
  if (!dogdata.ok) {
    throw new Error(`HTTP error , status ${dogdata.status}`)
  }
  return dogdata.json()
}

const setDogImg = ({ message: url }) => {
  dogImg.setAttribute('src', url)
}

const handleRequestError = error => {
  console.log(error.message)
}

fetch(url).then(validateHTTPStatus).then(setDogImg).catch(handleRequestError)