# FE-Weather-Journal1

## Demo Website (Heroku)
https://git.heroku.com/fe-weather-journal1.git // need redeploy


## Introduction
This project is an asynchronous web app that uses Web API and user data to dynamically update the UI for a Weather-Journal App.


### Getting Started:

Requirements: 
```bash
"dependencies": {
    "body-parser": "^1.20.0",
    "cors": "^2.8.5",
    "express": "^4.18.1"
  }
  ```
Install Requirements with the following command:
```bash
npm install
```
### Running Local Tests
```bash
node server.js
```
### Features
The user can:
    1. search the weather information by US zipcode.
    2. add the today feeling.
    3.


### Updates
Origianl app was designed to show a weather picture based on the temperature from the requested api data.
updateWeatherPic()
```bash
if (temppic < 32) {
        createDiv.innerHTML = `<img src="https://cdn1.vectorstock.com/i/1000x1000/51/20/cartoon-character-weather-forecast-sign-snow-cloud-vector-24545120.jpg">`;
    }
    else if (temppic > 70) {
        createDiv.innerHTML = `<img src="https://cdn0.iconfinder.com/data/icons/weater/500/vi102_11_sun_cartoon_object_logo_sunny_bright_climate-512.png">`;
    }
    else {
        createDiv.innerHTML = `<img src="https://img.favpng.com/4/12/0/cloud-drawing-euclidean-vector-sun-png-favpng-aYgfTuhntALzGJ1JTquJcbSjm.jpg">`;
    }
  ```

 Now this app is updated to show a weather picture from the OpenWeather API with the request based on the icon value of the requested weather data.
 updateWeatherPic()
```bash
    let weathericon = data.icon;

    createDiv.innerHTML = `<img src=https://openweathermap.org/img/wn/${weathericon}@2x.png>`;
```
<img src="https://user-images.githubusercontent.com/79179847/229430424-498a8499-59e0-4132-988f-7e41a20aeff8.png" alt="Image Description" width="400" height="300">


![image](https://user-images.githubusercontent.com/79179847/229430424-498a8499-59e0-4132-988f-7e41a20aeff8.png)
