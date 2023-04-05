# FE-Weather-Journal1

## Demo Website (Heroku)
https://fe-weather-journal1.herokuapp.com/

## Introduction
This project is an asynchronous web app that uses Web API and user data to dynamically update the UI for a Weather-Journal App.

### Technologies Used

Vanilla JS - Programming language (Plain Javascript)

Express - Server-side web application framework for Node.js

Sass - css preprocessor

Node.js - Server-side JavaScript runtime environment


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

Start application with the following command:
```bash
node server.js
```
## Features
### User

The user can:

    1. request the weather information by US zipcode.
    
    2. add the today feeling.
    
<img src="https://user-images.githubusercontent.com/79179847/229431578-f2f19e11-09a6-4ca3-ba77-3948326d520e.png" alt="Image Description" width="500" >

### API

The API:

    1. return the weather information from API: City name, Date, Fahrenheit temperature, the feeling memo the user added, weather description
    
<img src="https://user-images.githubusercontent.com/79179847/229431947-cf481861-5c46-48f9-81bb-40b0261be9cd.png" alt="Image Description" width="500" >

    2. Weather information is available for historical and future 10 days.



## Updates
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


