import './App.css';
import React, { useState } from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import Intro from "./components/intro/intro"
import ManhattanMap from './components/map/map';
import YearSlider from './components/yearslider/yearslider';
import BoroughMenu from './components/boroughmenu/boroughmenu';
import JobMenu from './components/jobmenu/jobmenu';

import '@fontsource/poppins';

function App() {

  const [request, setRequest] = useState({
    borough: "",
    job_type: "",
    year: 1990,
  })

  const callAPI = (borough, job_type, year) => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => console.log(data))
    //.then((data) => setMessage(data));
  }

  const changeFromUser = (component, updatedItem) => {

    console.log(component, updatedItem);

    switch (component) {
      case "borough":
        setRequest({
          ...request,
          borough: updatedItem
        })
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
  }


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