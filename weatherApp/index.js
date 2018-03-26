"use strict"

const request = require('request');
const argv = require('yargs').argv;

let apiKey = "bc020bd3ee69505799f67deb1e4808a6";
let city = argv.c || "vinaros";
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

request(url, function (err, res, body) {
  if (err) {
    console.log("err:", err);
  } else {
    let weather = JSON.parse(body);
    let temp = `It's ${weather.main.temp} degrees, there's an humidity of ${weather.main.humidity}% and a wind speed of ${weather.wind.speed} in ${weather.name}, ${weather.sys.country}`;
    console.log(temp);
  }
});
