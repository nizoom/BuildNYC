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
import Loader from './components/loader/loader.';

import HomeBtn from './components/homebtn/homebtn';
import HalfWayElement from './components/halfwayelement';

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

  const [cityChartData, setCityChartData] = useState([])

  const [boroughChartData, setBoroughChartData] = useState([])

  const [responseObj, setResponseObj] = useState({})

  const [allTimehData, setAllTimeGraphData] = useState([])

  const [loader, setLoader] = useState(false);

  const [scroll, setScroll] = useState(false);



  async function callAPI() {
    setLoader(true)

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
    //console.log(response)

    setResponseObj(response);
    setLoader(false)
    setScroll(true)
    return response;


  }


  useEffect(() => { // store data in hooks 
    //console.log(responseObj)
    if (responseObj.hasOwnProperty("allData")) {
      //


      const permitEntries = Object.values(responseObj)[0][0];
      receivedEntries(permitEntries)

      const rawChartData = Object.values(responseObj)[0][1]
      const rawLineGraphData = Object.values(responseObj)[0][2]

      const [cityPieChartData, boroughPieChartData, processedLineGraphData
      ] = formatChartData(rawChartData, rawLineGraphData)



      setCityChartData(cityPieChartData)
      setBoroughChartData(boroughPieChartData)
      setAllTimeGraphData(processedLineGraphData)
      setScroll(false);


      //PAN DOWN

    }



  }, [responseObj])

  function validRequest() {
    callAPI()
  }


  const changeFromUser = (component, updatedItem) => {

    console.log(component, updatedItem);

    //either  markers don't change until submitted 

    //or upon one change the map is cleared 

    receivedEntries([]);

    // if (submitted) {
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

              <SubmitBtn allUserInputs={request} startRequest={validRequest} />
            </div>
          </div>

        </Grid>


        <Grid item>
          <MyMap centerCoordinates={mapCenter} mapShift={borough} permitsObject={entries}
            job_type={request.job_type} />
        </Grid>



        <Grid item style={{ display: "flex", justifyContent: "center" }}>
          <CityPieChart dataPoints={cityChartData} year={request.year} scroll={scroll} />
          <BoroughPieChart dataPoints={boroughChartData}
            year={request.year} borough={request.borough} />

        </Grid>
        <Grid item>
          {allTimehData.length > 0 ? <LineChart dataPoints={allTimehData} /> : null}
        </Grid>
      </Grid>

    </div>
  );
}

export default App;
