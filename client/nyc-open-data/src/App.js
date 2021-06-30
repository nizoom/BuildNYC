import './App.css';
import React, { useState, useEffect } from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import Intro from "./components/intro/intro"
import ManhattanMap from './components/map/map';
import YearSlider from './components/yearslider/yearslider';
import BoroughMenu from './components/boroughmenu/boroughmenu';
import JobMenu from './components/jobmenu/jobmenu';

import '@fontsource/poppins';

function App() {

  const [counter, setCounter] = useState(0) // counts if enough changes have been made to call API
  //NEEDS UPDATINGS

  //also is sending old state to API

  const [request, setRequest] = useState({
    borough: "",
    job_type: "",
    year: 1990,
  })

  const callAPI = () => {
    console.log("API function called")
    console.log(request.borough)
    //console.log("request at API time " + request.borough)

    const [borough, job_type, year] = [request.borough, request.job_type, request.year]

    fetch(`/borough/${borough}/type/${job_type}/timeSpan/${year}`)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err))
    //.then((data) => setMessage(data));
  }

  const changeFromUser = (component, updatedItem) => {

    console.log(component, updatedItem);

    switch (component) {
      case "borough":
        setCounter(counter + 1)
        setRequest({
          ...request,
          borough: updatedItem
        })
        break;
      case "job_type":
        setCounter(counter + 1)
        setRequest({
          ...request,
          job_type: updatedItem
        })
        break;
      case "year":
        setCounter(counter + 1)
        setRequest({
          ...request,
          year: updatedItem
        })
        break;
    }
    //console.log(request)


    // if (counter >= 3) { // if job_type and borough are not blank 
    //   callAPI();
    // }
  }


  useEffect(() => {
    if (request.borough !== "" && request.job_type !== "") {
      callAPI();
    } else {
      console.log("a field is empty")
    }; // This is be executed when `loading` state changes
  }, [request])




  console.log(request)

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

        {/* <Grid item md={6} >

        </Grid> */}

        <Grid item>
          <ManhattanMap />
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