import { key } from "../../key.js"


//pega os elementos no html através do dom
const search = document.querySelector(".search-box button")
const container = document.querySelector(".container")
const wheaterBox = document.querySelector(".weather-box")
const wheaterDetails = document.querySelector(".weather-details")
const error404 = document.querySelector(".not-found")


//quando o botão é clicacdo chama a função
search.addEventListener("click",() => {
  
  //chave da API
  const APIKey = key
  
  //Pega o Valor digitado no input
  const city = document.querySelector(".search-box input").value;

  //se for vazio o valor retorna
  if(city === "") return

  /*usa o fetch para pegar os dados da API
  Para enteneer melhor estes links abaixo:
  https://www.devmedia.com.br/javascript-fetch/41206
  https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch
  */
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`
    )
    /*
    o then "pega" se a respota for "resolvida 
    .json a tranforma para poder ser  manipulada no javascript
    */
  .then((response) => response.json())
  .then((json) => {
    /*
    
    */ 
    if (json.cod === "404") {
      container.style.height = "400px"
      wheaterBox.style.display = "none"
      wheaterDetails.style.display = "none"
      error404.style.display = "block"
      error404.classList.add("fadeIn")
      return
    }
    console.log(json)
    error404.style.display = "none"
    wheaterBox.style.display = "block"
    wheaterDetails.style.display = "flex"
    
    switch(json.weather[0].main){
      case "Rain":
        container.style.height = "600px"
        wheaterBox.classList.add("fadeIn")
        wheaterDetails.classList.add("fadeIn")

        wheaterBox.querySelector("img").src = "../images/rain.png"
        wheaterBox.querySelector(".temperature").textContent = json.main.temp
        wheaterBox.querySelector(".description").textContent = json.weather[0].description

        wheaterDetails.querySelector(".humidity .text span").textContent = json.main.humidity
        wheaterDetails.querySelector(".wind .text span").textContent = json.wind.speed

        break;
      case "Thunderstorm":
        container.style.height = "600px"
        wheaterBox.classList.add("fadeIn")
        wheaterDetails.classList.add("fadeIn")

        wheaterBox.querySelector("img").src = "../images/rain.png"
        wheaterBox.querySelector(".temperature").textContent = json.main.temp
        wheaterBox.querySelector(".description").textContent = json.weather[0].description

        wheaterDetails.querySelector(".humidity .text span").textContent = json.main.humidity
        wheaterDetails.querySelector(".wind .text span").textContent = json.wind.speed

        break;
      case "Drizzle":
        container.style.height = "600px"
        wheaterBox.classList.add("fadeIn")
        wheaterDetails.classList.add("fadeIn")

        wheaterBox.querySelector("img").src = "../images/rain.png"
        wheaterBox.querySelector(".temperature").textContent = json.main.temp
        wheaterBox.querySelector(".description").textContent = json.weather[0].description

        wheaterDetails.querySelector(".humidity .text span").textContent = json.main.humidity
        wheaterDetails.querySelector(".wind .text span").textContent = json.wind.speed

        break;
      case "Snow":
        container.style.height = "600px"
        wheaterBox.classList.add("fadeIn")
        wheaterDetails.classList.add("fadeIn")

        wheaterBox.querySelector("img").src = "../images/snow2.png"
        wheaterBox.querySelector(".temperature").textContent = json.main.temp
        wheaterBox.querySelector(".description").textContent = json.weather[0].description

        wheaterDetails.querySelector(".humidity .text span").textContent = json.main.humidity
        wheaterDetails.querySelector(".wind .text span").textContent = json.wind.speed

        break;
      case "Clear":
        container.style.height = "600px"
        wheaterBox.classList.add("fadeIn")
        wheaterDetails.classList.add("fadeIn")

        wheaterBox.querySelector("img").src = "../images/clear.png"
        wheaterBox.querySelector(".temperature").textContent = json.main.temp
        wheaterBox.querySelector(".description").textContent = json.weather[0].description

        wheaterDetails.querySelector(".humidity .text span").textContent = json.main.humidity
        wheaterDetails.querySelector(".wind .text span").textContent = json.wind.speed

        break;
      case "Clouds":
        container.style.height = "600px"
        wheaterBox.classList.add("fadeIn")
        wheaterDetails.classList.add("fadeIn")

        wheaterBox.querySelector("img").src = "../images/cloud.png"
        wheaterBox.querySelector(".temperature").textContent = json.main.temp
        wheaterBox.querySelector(".description").textContent = json.weather[0].description

        wheaterDetails.querySelector(".humidity .text span").textContent = json.main.humidity
        wheaterDetails.querySelector(".wind .text span").textContent = json.wind.speed

        break;
    }
  })
})
