// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
const PORT = process.env.PORT || 3101;
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());


// Initialize the main project folder
app.use(express.static('website'));



app.post('/add', addData);

async function addData(request, response) {

    const { date, temp, content, city, weather, icon } = request.body;
    projectData = { date, temp, content, city, weather, icon };
    response.send(projectData);
}



app.get("/result", async (request, response) => {
    if (projectData) {
        response.send(projectData);
    }
});


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

// function listening() {
//     console.log(`listening on port ${port}`);
// }

// app.listen(process.env.PORT || 3100, listening());