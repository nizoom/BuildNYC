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


  async function callAPI() {
    console.log("API function called")
    console.log(request.borough)
    //console.log("request at API time " + request.borough)

    const [borough, job_type, year] = [request.borough, request.job_type, request.year]


    const response = await fetch(`/borough/${borough}/type/${job_type}/timeSpan/${year}`)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .then((data) => receivedEntries(data))
      .catch((err) => console.log(err))
    //.then((data) => setMessage(data));
    return response;


  }



  const changeFromUser = (component, updatedItem) => {

    console.log(component, updatedItem);

    switch (component) {
      case "borough":
        setRequest({
          ...request,
          borough: updatedItem,

        })
        const boroughCoordiantes = GetBoroughCoordinates(updatedItem)
        console.log(boroughCoordiantes)
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
          <MyMap centerCoordinates={mapCenter} mapShift={borough} />
        </Grid>
      </Grid>

    </div>
  );
}

export default App;


// const getBorough = (borough) => {
  //   console.log(borough)
  //   const newBorough = borough
  //   setRequest({
  //     ...request,
  //     borough: newBorough
  //   });
  // }

  // const getYear = (year) => {
  //   const newYear = year
  //   setRequest({
  //     ...request,
  //     year: newYear
  //   });
  // }