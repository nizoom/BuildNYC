import './App.css';
import React, { useState, useEffect } from "react";
import Grid from '@material-ui/core/Grid';
import Intro from "./components/intro/intro"
import MyMap from './components/map/map';

import YearSlider from './components/yearslider/yearslider';
import BoroughMenu from './components/boroughmenu/boroughmenu';
import JobMenu from './components/jobmenu/jobmenu';
import SubmitBtn from './components/submit/submit';

import { GetBoroughCoordinates } from './components/boroughmenu/getcoordinates';
import formatChartData from './components/charts/formatchartdata';

import CityPieChart from './components/charts/citypiechart';
import BoroughPieChart from './components/charts/boroughpiechart';
import LineChart from './components/charts/linechart';
import Loader from './components/loader/loader';

import HomeBtn from './components/homebtn/homebtn';
import HalfWayElement from './components/halfwayelement';

import '@fontsource/poppins';

function App() {

  //default state of UI when page loads
  const [request, setRequest] = useState({
    borough: "",
    job_type: "",
    year: 1990,
  })

  //Centering map on Manhattan is default

  const [mapCenter, setMapCenter] = useState([40.754932, -73.954016])

  //records new borough when a new borough is selected by the user

  const [borough, newBorough] = useState(false);

  //entries holds all the map pin data to be passed to the map

  const [entries, receivedEntries] = useState([])

  //holds city chart data/arrays and borough specific data/arrays

  const [cityChartData, setCityChartData] = useState([])

  const [boroughChartData, setBoroughChartData] = useState([])


  // response from backend is initally recorded here and then destructured 
  const [responseObj, setResponseObj] = useState({})

  //holds data for alltime line graph 

  const [allTimehData, setAllTimeGraphData] = useState([])

  //determines when loading animation is active 

  const [loader, setLoader] = useState(false);

  //determines when to automatically scroll to show content after submit from user

  const [scroll, setScroll] = useState(false);



  async function callAPI() {
    setLoader(true)

    //console.log("API function called")

    //destructure request hook so that the fetch request is more readable 
    const [borough, job_type, year] = [request.borough, request.job_type, request.year]


    const response = await fetch(`/borough/${borough}/type/${job_type}/timeSpan/${year}`)
      .then((res) => res.json())
      .catch((err) => console.log(err))

    setResponseObj(response);
    setLoader(false)
    setScroll(true)
    return response;


  }


  useEffect(() => { // organize data into specific useState hooks 

    if (responseObj.hasOwnProperty("allData")) {

      const permitEntries = Object.values(responseObj)[0][0]; //map pin data
      receivedEntries(permitEntries)

      const rawChartData = Object.values(responseObj)[0][1] //chart data
      const rawLineGraphData = Object.values(responseObj)[0][2]

      //organizes chart data by year 
      const [cityPieChartData, boroughPieChartData, processedLineGraphData
      ] = formatChartData(rawChartData, rawLineGraphData)


      //store formatted data in useState hooks
      setCityChartData(cityPieChartData)
      setBoroughChartData(boroughPieChartData)
      setAllTimeGraphData(processedLineGraphData)
      setScroll(false);

    }



  }, [responseObj])//every time responseObj changes this useEffect function will fire


  const changeFromUser = (component, updatedItem) => {

    //console.log(component, updatedItem);


    receivedEntries([]); //reset map every time there is a change from the user 

    //this dynamic function fires every time there is a change from a UI component 
    switch (component) {
      case "borough":
        setRequest({ //update state of request 
          ...request,
          borough: updatedItem,

        })
        //if component is borough then the map will be shifted to a new center with this function
        const boroughCoordiantes = GetBoroughCoordinates(updatedItem)

        //if there is a new borough the map component will set a new center based on coordinate props 
        // generated from the above function 

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


  }


  return (
    <div className="App">
      <HomeBtn />
      <Intro />
      <HalfWayElement scroll={scroll} />

      {loader ? <Loader /> : null}
      <Grid container direction="column" className={loader ? "disappear" : "reappear"}>

        <Grid item >
          <div className="UI_Container">
            <div className="UI_subcontainer">
              <YearSlider passYearToParent={changeFromUser} />
              <div className="small_pair">
                <BoroughMenu passBoroughToParent={changeFromUser} />
                <JobMenu passJobTypeToParent={changeFromUser} />
              </div>

              <SubmitBtn allUserInputs={request} startRequest={callAPI} />
            </div>
          </div>

        </Grid>


        <Grid item>
          <MyMap centerCoordinates={mapCenter} mapShift={borough} permitsObject={entries}
            job_type={request.job_type} />
        </Grid>



        {boroughChartData.length > 0 ? <Grid item>
          <div className="flex_for_charts">
            <CityPieChart dataPoints={cityChartData} year={request.year} scroll={scroll} />
            <BoroughPieChart dataPoints={boroughChartData}
              year={request.year} borough={request.borough} />
          </div>
        </Grid> : null}
        <Grid item>
          {allTimehData.length > 0 ? <LineChart dataPoints={allTimehData} /> : null}
        </Grid>
      </Grid>

    </div>
  );
}

export default App;
