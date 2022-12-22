// Copyright (c) 2022 Ali Mugamai All rights reserved
//
// Created by: Ali Mugamai
// Created on: Sep 2020
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-6-03-JS/sw.js", {
    scope: "/ICS20-6-03-JS/",
  })
}

const getImage = async (URLAddress) => {
  try {
    const result = await fetch(URLAddress)
    const jsonData = await result.json()
    const realfeel = jsonData.weather[0]
    const image = realfeel.icon

    console.log(jsonData)
    console.log(jsonData.weather)
    document.getElementById("api-image").innerHTML =
      "<img src='http://openweathermap.org/img/wn/" +
      image +
      "@2x.png' alt='Weather Icon' width='10%'><br><h5>"
    ;(">")

    let celcius = 0

    let c = jsonData.main.temp - 273.15

    document.getElementById("api-weather").innerHTML =
      "<p>temperature in ottawa is </p>" + c.toFixed(2)
  } catch (err) {
    console.log(err)
  }
}

getImage(
  "https://api.openweathermap.org/data/2.5/weather?lat=45.4211435&lon=-75.6900574&appid=fe1d80e1e103cff8c6afd190cad23fa5"
)
