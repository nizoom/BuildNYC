# BuiltNYC

Built NYC is a data visualization tool that explores building development in New York City. 
Using a data base provided by NYC Open Data the user can filter building demolitions / constructions by year and borough on a location specific map. Each location is a clickable pin that displays the address, owner, and contracting company of the site. 
I Built an API to receive requests from the app which converts those requests into Socrata Query Language. 
This QL is used to fetch building data. Data visualizations are supplemented by charts that illustrate a breakdown of construction permits by type and construction trends for the last 30 years.

### Use deployed app

To use this app visit www.nissimram.com or https://build-nyc.herokuapp.com/ . 

Select a year, borough, and a construction type and click submit. Once the results load, pins will drop onto the map where constructions took place. Click on a pin to see the address, owner, and contracting company of the site. Scroll down further to see chart breakdowns of city wide and borough-specific building activity for that year. The line graph displays the trajectory of building year-to-year.
