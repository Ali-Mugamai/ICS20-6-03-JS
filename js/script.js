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
    console.log(jsonData)
    let celcius = 0
    document.getElementById("api-weather").innerHTML =
    celcius = jsonData.main.temp - 273.15
  } catch (err) {
    console.log(err)
  }
}

getImage(
  "https://api.openweathermap.org/data/2.5/weather?lat=45.4211435&lon=-75.6900574&appid=fe1d80e1e103cff8c6afd190cad23fa5"
)
