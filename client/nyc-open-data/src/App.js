import './App.css';
import React, { useState, useEffect } from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import Intro from "./components/intro/intro"
import MyMap from './components/map/map';
import YearSlider from './components/yearslider/yearslider';
import BoroughMenu from './components/boroughmenu/boroughmenu';
import JobMenu from './components/jobmenu/jobmenu';
import { GetBoroughCoordinates } from './components/boroughmenu/getcoordinates';

import PieChart from './components/charts/chart';

import '@fontsource/poppins';

function App() {


  const [request, setRequest] = useState({
    borough: "",
    //boroughChange: false,
    job_type: "",
    year: 1990,
  })

  //Centering map on Manhattan is default

  const [mapCenter, setMapCenter] = useState([40.754932, -73.954016])

  const [borough, newBorough] = useState(false);

  const [entries, receivedEntries] = useState([])

  const [chartData, setChartData] = useState([])

  const [responseObj, setResponseObj] = useState({})

  async function callAPI() {
    console.log("API function called")
    //console.log(request.borough)
    //console.log("request at API time " + request.borough)

    const [borough, job_type, year] = [request.borough, request.job_type, request.year]


    const response = await fetch(`/borough/${borough}/type/${job_type}/timeSpan/${year}`)
      .then((res) => res.json())
      //.then((data) => console.log(data))
      //.then((data) => setResponseObject(data))
      //.then((data) => console.log("data in app.js " + data))
      .catch((err) => console.log(err))
    console.log(response)
    setResponseObj(response);
    // receivedEntries(response[0])
    // setChartData(response[1])
    return response;


  }


  useEffect(() => { // store data in hooks 
    // console.log(responseObj)
    if (responseObj.hasOwnProperty("allData")) {
      const permitEntries = Object.values(responseObj)[0][0];
      receivedEntries(permitEntries)

      const pieData = Object.values(responseObj)[0][1]
      setChartData(pieData);

    }

  }, [responseObj])


  const changeFromUser = (component, updatedItem) => {

    console.log(component, updatedItem);

    switch (component) {
      case "borough":
        setRequest({
          ...request,
          borough: updatedItem,

        })
        const boroughCoordiantes = GetBoroughCoordinates(updatedItem)
        //console.log(boroughCoordiantes)
        newBorough(true)
        setMapCenter(boroughCoordiantes)
        break;
      case "job_type":
        setRequest({
          ...request,
          job_type: updatedItem
        })
        break;
      case "year":
        setRequest({
          ...request,
          year: updatedItem
        })
        break;
    }
    //console.log(request)


  }

  useEffect(() => {
    if (request.borough !== "" && request.job_type !== "") {
      callAPI();
    } else {
      console.log("a field is empty")
    }; // This is be executed when `loading` state changes
  }, [request])




  console.log(request)
  //console.log("Map Center: " + mapCenter)

  return (
    <div className="App">
      <Intro />

      <Grid container direction="column">

        <Grid item >
          <div className="UI_Container">
            <BoroughMenu passBoroughToParent={changeFromUser} />
            <JobMenu passJobTypeToParent={changeFromUser} />
            <YearSlider passYearToParent={changeFromUser} />

          </div>

        </Grid>


        <Grid item>
          <MyMap centerCoordinates={mapCenter} mapShift={borough} permitsObject={entries}
            job_type={request.job_type} />
        </Grid>
        <Grid item>
          <PieChart dataPoints={chartData} />
        </Grid>
      </Grid>

    </div>
  );
}

export default App;
