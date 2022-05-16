# BuiltNYC

Built NYC is a data visualization tool that explores building development in New York City. 
Using a data base provided by NYC Open Data the user can filter building demolitions / constructions by year and borough on a location specific map. Each location is a clickable pin that displays the address, owner, and contracting company of the site. 
I Built an API to receive requests from the app which converts those requests into Socrata Query Language. 
This QL is used to fetch building data. Data visualizations are supplemented by charts that illustrate a breakdown of construction permits by type and construction trends for the last 30 years.

### Use deployed app

To use this app visit www.nissimram.com or https://build-nyc.herokuapp.com/ . 

Select a year, borough, and a construction type and click submit. Once the results load, pins will drop onto the map where constructions took place. Click on a pin to see the address, owner, and contracting company of the site. Scroll down further to see chart breakdowns of city wide and borough-specific building activity for that year. The line graph displays the trajectory of building year-to-year.

## Installation and set up instructions

After cloning this repo, run npm install to install all dependencies. Please note that the app requires an API key for NYC Open Data's database. You can find out how to make your own here: https://opendata.cityofnewyork.us/how-to/#apidocumentation

## Using the app on your machine

Once you have an API key, make sure to save it in an env variable where it is accessible to the backend in ```./server ``` folder. To start the app on your machine first spin up the node server by changing to the ```./server ``` directory and running ```npm start```. Then change into ```client/nyc-open-data/src/``` and run the same command. That will initiate the app to run in your browser at ```localhost: 3000``` . 

## Reflection

This app was made to practice data visualization with the UI and backend organization of data and events. In ```BuiltNYC/server/processrequest.js ``` I tried to create a clear order of events and function calls. Each function call returned a value that would be used for the next event. This made it easier to orgqnize my code and keep my index file from being overcrowded with lots of different functionalities. This level of organization is something I plan to implimenet in all my future projects. Something I will keep in mind next time I am requesting data from an API is to think about efficiency and caching. This project made me recognize the importance of limiting the number of API calls and creating requests that gets as much of the needed information as possible in one attempt. Additionally, for information that doesn't change often but still is requested - I will consider caching the results which will help reduce load time. 

